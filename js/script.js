const themeToggle = document.getElementById("themeToggle");
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");
const body = document.body;
const currentTheme = localStorage.getItem("theme") || "dark";

if (currentTheme === "light") {
  body.classList.add("light-mode");
  moonIcon?.classList.add("hidden");
  sunIcon?.classList.remove("hidden");
}

themeToggle?.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const isLight = body.classList.contains("light-mode");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  moonIcon?.classList.toggle("hidden", isLight);
  sunIcon?.classList.toggle("hidden", !isLight);
  if (document.getElementById("heroCanvas")) setCanvasSize();
});

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const mobileLinks = document.querySelectorAll(".mobile-nav-link");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");
  const expanded = mobileMenu.classList.contains("hidden") ? "false" : "true";
  mobileMenuButton.setAttribute("aria-expanded", expanded);
  menuIcon?.classList.toggle("hidden");
  closeIcon?.classList.toggle("hidden");
}

mobileMenuButton?.addEventListener("click", toggleMobileMenu);
mobileLinks.forEach((link) =>
  link.addEventListener("click", () => {
    if (!mobileMenu.classList.contains("hidden")) toggleMobileMenu();
  })
);

const header = document.querySelector("header");
const scrollThreshold = 50;

function handleScroll() {
  if (!header) return;
  if (window.scrollY > scrollThreshold) {
    header.classList.add("bg-slate-900", "shadow-xl", "light-mode:bg-white", "scrolled");
    header.classList.remove("bg-slate-900/90", "light-mode:bg-white/90");
  } else {
    header.classList.remove("bg-slate-900", "shadow-xl", "light-mode:bg-white", "scrolled");
    header.classList.add("bg-slate-900/90", "light-mode:bg-white/90");
  }
}

document.addEventListener("scroll", handleScroll);
handleScroll();

let canvas;
let ctx;
let particles = [];
let particleCount = 50;
let animationFrameId;
let canvasAnimationEnabled = false;

function shouldRunCanvasAnimation() {
  return (
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    window.innerWidth >= 768
  );
}

function initParticles() {
  for (let i = 0; i < particleCount; i += 1) {
    particles.push(new Particle());
  }
}

function setCanvasSize() {
  if (!canvas) return;
  const parent = canvas.parentElement;
  canvas.width = parent.clientWidth;
  canvas.height = parent.clientHeight;
}

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2.5 + 0.5;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = body.classList.contains("light-mode")
      ? "rgba(59,130,246,0.2)"
      : "rgba(59,130,246,0.5)";
    ctx.fill();
  }
}

function animate() {
  if (!canvasAnimationEnabled) return;
  ctx.fillStyle = body.classList.contains("light-mode")
    ? "rgba(248,250,252,0.3)"
    : "rgba(12,18,30,0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  animationFrameId = requestAnimationFrame(animate);
}

function stopCanvasAnimation() {
  canvasAnimationEnabled = false;
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
}

function startCanvasAnimation() {
  if (!canvas || canvasAnimationEnabled || !shouldRunCanvasAnimation()) return;

  canvasAnimationEnabled = true;
  setCanvasSize();

  if (!particles.length) initParticles();

  animate();
}

function hydrateListImages() {
  document.querySelectorAll("#list-layout img[data-src]").forEach((image) => {
    if (!image.getAttribute("src")) {
      image.setAttribute("src", image.dataset.src);
    }
  });
}

function setLayout(layout) {
  const grid = document.getElementById("grid-layout");
  const list = document.getElementById("list-layout");
  const gridBtn = document.getElementById("grid-view-btn");
  const listBtn = document.getElementById("list-view-btn");

  if (layout === "grid") {
    grid.classList.remove("hidden");
    list.classList.add("hidden");
    gridBtn.classList.add("bg-cyan-600");
    gridBtn.classList.remove("bg-slate-700");
    listBtn.classList.remove("bg-cyan-600");
    listBtn.classList.add("bg-slate-700");
    return;
  }

  hydrateListImages();
  grid.classList.add("hidden");
  list.classList.remove("hidden");
  listBtn.classList.add("bg-cyan-600");
  listBtn.classList.remove("bg-slate-700");
  gridBtn.classList.remove("bg-cyan-600");
  gridBtn.classList.add("bg-slate-700");
}

window.addEventListener("load", () => {
  canvas = document.getElementById("heroCanvas");
  if (!canvas) return;

  ctx = canvas.getContext("2d");

  const scheduleCanvasStart = () => startCanvasAnimation();
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(scheduleCanvasStart, { timeout: 900 });
  } else {
    setTimeout(scheduleCanvasStart, 300);
  }

  window.addEventListener("resize", () => {
    if (shouldRunCanvasAnimation()) {
      if (!canvasAnimationEnabled) startCanvasAnimation();
      setCanvasSize();
      return;
    }

    stopCanvasAnimation();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopCanvasAnimation();
    } else {
      startCanvasAnimation();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  setLayout("grid");

  document.getElementById("grid-view-btn")?.addEventListener("click", () => setLayout("grid"));
  document.getElementById("list-view-btn")?.addEventListener("click", () => setLayout("list"));

  document.querySelectorAll(".project-card").forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function onClick(event) {
    const href = this.getAttribute("href");
    if (href.length <= 1) return;

    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  });
});
