const FEATURED = [
  { name: "StreamioX", kind: "Native Xbox app", tags: ["C#", "UWP / XAML", "Rust", "FFmpegInteropX"] },
  { name: "CodeAgentX", title: "CodeAgent X", kind: "Gemini agent" },
  { name: "traffic-cameras-nz-app", title: "TrafficNZ Explorer", kind: "Live data map",
    blurb: "Live New Zealand traffic data, cameras and map-based discovery in a focused exploration interface." },
  { name: "Nexus-Research-Workspace-", title: "Nexus Research Workspace", kind: "AI research tool" },
  { name: "Multimodal-Research-Engine", title: "Multimodal Research Engine", kind: "Gemini multimodal" },
  { name: "ai-health-companion", title: "AI Health Companion", kind: "Gemini assistant" },
  { name: "Face-Avatar-Generator", title: "Face Avatar Generator", kind: "Gemini image" },
  { name: "compx201-university-java-data-structures", title: "Data Structures", kind: "Java / algorithms",
    blurb: "Java implementations covering trees, heaps, linked structures and core computer-science algorithms." },
  { name: "dailyspaceimage_nasa", title: "Daily Space Image", kind: "Public data app" },
];

const LANG_COLORS = {
  TypeScript: "#3178c6", JavaScript: "#f1e05a", Kotlin: "#a97bff", "C#": "#178600", Rust: "#dea584",
  HTML: "#e34c26", Python: "#3572a5", Svelte: "#ff3e00", PHP: "#4f5d95", Java: "#b07219",
  PowerShell: "#012456", CSS: "#563d7c", Other: "#6b6880",
};

const $ = (id) => document.getElementById(id);
const el = (tag, props = {}, ...children) => {
  const node = Object.assign(document.createElement(tag), props);
  for (const c of children) if (c != null) node.append(c);
  return node;
};
const safeUrl = (u) => {
  if (!u) return null;
  try { const url = new URL(u.startsWith("http") ? u : `https://${u}`); return url.protocol === "https:" ? url.href : null; }
  catch { return null; }
};
const fmtDate = (iso) => new Date(iso).toLocaleDateString("en-NZ", { day: "numeric", month: "short", year: "numeric" });
const relTime = (iso) => {
  const days = Math.floor((Date.now() - new Date(iso)) / 86400000);
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  return months < 12 ? `${months} mo ago` : `${Math.floor(months / 12)} yr ago`;
};
const prettyName = (n) => n.replace(/[-_]+$/g, "").replace(/[-_]+/g, " ");

function renderFeatured(byName) {
  const root = $("featured");
  root.replaceChildren();
  for (const f of FEATURED) {
    const r = byName.get(f.name);
    if (!r) continue;
    const live = safeUrl(r.homepage);
    const tags = f.tags || [r.language, ...(r.topics || [])].filter(Boolean).slice(0, 4);
    const links = el("div", { className: "card-links" },
      el("a", { href: r.html_url, target: "_blank", rel: "noopener", textContent: "Source" }),
      live ? el("a", { href: live, target: "_blank", rel: "noopener", textContent: "Live demo" }) : null);
    for (const [extra, label] of f.also || []) {
      const x = byName.get(extra);
      if (x) links.append(el("a", { href: x.html_url, target: "_blank", rel: "noopener", textContent: label }));
    }
    root.append(el("article", { className: "card" },
      el("span", { className: "kind", textContent: f.kind }),
      el("h3", { textContent: f.title || prettyName(r.name) }),
      el("p", { textContent: f.blurb || r.description || "No description yet." }),
      el("ul", { className: "tags" }, ...tags.map((t) => el("li", { textContent: t }))),
      el("span", { className: "card-meta", textContent: `Last push ${relTime(r.pushed_at)}` }),
      links));
  }
  if (!root.children.length) root.append(el("p", { className: "muted", textContent: "No projects available right now." }));
}

function renderActivity(repos) {
  const recent = [...repos].sort((a, b) => b.pushed_at.localeCompare(a.pushed_at)).slice(0, 8);
  $("timeline").replaceChildren(...recent.map((r) => el("li", {},
    el("span", {}, el("a", { href: r.html_url, target: "_blank", rel: "noopener", textContent: r.name }),
      r.language ? el("span", { className: "lang", textContent: r.language }) : null),
    el("time", { dateTime: r.pushed_at, textContent: relTime(r.pushed_at) }))));

  const counts = {};
  for (const r of repos) if (r.language) counts[r.language] = (counts[r.language] || 0) + 1;
  let entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  if (entries.length > 7) {
    const rest = entries.slice(7).reduce((s, [, n]) => s + n, 0);
    entries = [...entries.slice(0, 7), ["Other", rest]];
  }
  const total = entries.reduce((s, [, n]) => s + n, 0) || 1;
  const color = (l) => LANG_COLORS[l] || LANG_COLORS.Other;
  $("langbar").replaceChildren(...entries.map(([l, n]) => {
    const s = el("span", { title: `${l}: ${n}` });
    s.style.width = `${(n / total) * 100}%`;
    s.style.background = color(l);
    return s;
  }));
  $("langlist").replaceChildren(...entries.map(([l, n]) => {
    const sw = el("span", { className: "sw" });
    sw.style.background = color(l);
    return el("li", {}, sw, el("span", { textContent: l }), el("span", { className: "n", textContent: `${Math.round((n / total) * 100)}%` }));
  }));
  return Object.keys(counts).length;
}

const PAGE_SIZE = 12;

function setupTable(repos) {
  let expanded = false;
  const sorted = [...repos].sort((a, b) => b.pushed_at.localeCompare(a.pushed_at));
  const langs = [...new Set(repos.map((r) => r.language).filter(Boolean))].sort();
  $("lang").append(...langs.map((l) => el("option", { value: l, textContent: l })));
  const draw = () => {
    const q = $("q").value.trim().toLowerCase();
    const lang = $("lang").value;
    const liveOnly = $("liveOnly").checked;
    const rows = sorted.filter((r) =>
      (!q || r.name.toLowerCase().includes(q) || (r.description || "").toLowerCase().includes(q)) &&
      (!lang || r.language === lang) && (!liveOnly || safeUrl(r.homepage)));
    $("count").textContent = `${rows.length} of ${repos.length} repositories`;
    const filtering = q || lang || liveOnly;
    const shown = expanded || filtering ? rows : rows.slice(0, PAGE_SIZE);
    $("more").hidden = shown.length === rows.length;
    $("more").textContent = `Show all ${rows.length} repositories`;
    $("repo-rows").replaceChildren(...shown.map((r) => {
      const live = safeUrl(r.homepage);
      return el("tr", {},
        el("td", {}, el("div", { className: "name", textContent: r.name }),
          r.description ? el("div", { className: "desc", textContent: r.description }) : null),
        el("td", { className: "mono", textContent: r.language || "—" }),
        el("td", { className: "hide-sm" }, el("time", { dateTime: r.pushed_at, textContent: fmtDate(r.pushed_at) })),
        el("td", { className: "links" },
          el("a", { href: r.html_url, target: "_blank", rel: "noopener", textContent: "Code" }),
          live ? el("a", { href: live, target: "_blank", rel: "noopener", textContent: "Live" }) : null));
    }));
    if (!rows.length) $("repo-rows").append(el("tr", {}, el("td", { colSpan: 4, className: "muted", textContent: "No repositories match." })));
  };
  for (const id of ["q", "lang", "liveOnly"]) $(id).addEventListener("input", draw);
  $("more").addEventListener("click", () => { expanded = true; draw(); });
  draw();
}

const GITHUB_USER = "lukeponga-dev";
const SNAPSHOT_URL = new URL("repos.json", document.currentScript.src).href;

async function loadRepos() {
  try {
    const all = [];
    for (let page = 1; page <= 5; page++) {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner&sort=pushed&page=${page}`,
        { headers: { Accept: "application/vnd.github+json" } });
      if (!res.ok) throw new Error(res.status);
      const batch = await res.json();
      all.push(...batch);
      if (batch.length < 100) break;
    }
    return { repos: all, fetched_at: new Date().toISOString(), live: true };
  } catch {
    const res = await fetch(SNAPSHOT_URL);
    if (!res.ok) throw new Error(res.status);
    return { ...(await res.json()), live: false };
  }
}

async function main() {
  try {
    const data = await loadRepos();
    const repos = (data.repos || []).filter((r) => !r.fork && !r.private);
    const byName = new Map(repos.map((r) => [r.name, r]));
    renderFeatured(byName);
    const langCount = renderActivity(repos);
    setupTable(repos);
    $("stat-repos").textContent = repos.length;
    $("stat-langs").textContent = langCount;
    $("stat-live").textContent = repos.filter((r) => safeUrl(r.homepage)).length;
    const latest = repos.reduce((m, r) => (!m || r.pushed_at > m.pushed_at ? r : m), null);
    $("stat-last").textContent = latest ? relTime(latest.pushed_at) : "—";
    if (latest) {
      Object.assign($("now-repo"), { href: latest.html_url, textContent: latest.name });
      Object.assign($("now-when"), { dateTime: latest.pushed_at, textContent: relTime(latest.pushed_at) });
    }
    if (data.live) $("freshness").textContent = "Live from GitHub";
    else if (data.fetched_at) $("freshness").textContent = `GitHub snapshot from ${fmtDate(data.fetched_at)}`;
  } catch {
    $("featured").replaceChildren(el("p", { className: "muted" }, "Couldn't load projects right now. See ",
      el("a", { href: "https://github.com/lukeponga-dev", target: "_blank", rel: "noopener", textContent: "GitHub" }), "."));
  }
}
function setupNav() {
  const links = new Map([...document.querySelectorAll(".topbar nav a")].map((a) => [a.hash.slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) {
      for (const a of links.values()) a.removeAttribute("aria-current");
      links.get(e.target.id)?.setAttribute("aria-current", "true");
    }
  }, { rootMargin: "-45% 0px -50% 0px" });
  for (const id of links.keys()) { const s = $(id); if (s) io.observe(s); }
  const bar = document.querySelector(".topbar");
  const onScroll = () => bar.classList.toggle("scrolled", window.scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupReveal() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("motion");
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }, { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".section-head, .flagship, .panel, .about > div, .contact .wrap").forEach((n) => io.observe(n));
}

setupNav();
setupReveal();
main();
