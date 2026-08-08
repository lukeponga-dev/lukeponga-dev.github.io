export default function Hero() {
  return (
    <header className="relative mt-16 -skew-y-1 overflow-hidden rounded-b-3xl bg-slate-900 px-4 py-20 text-center shadow-2xl md:px-8">
      <div className="pointer-events-none absolute -top-10 left-1/4 h-36 w-36 animate-pulse rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-1/4 h-44 w-44 animate-pulse rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative skew-y-1">
        <h1 className="mb-2 bg-gradient-to-r from-indigo-400 via-cyan-300 to-violet-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl">
          Luke Ponga
        </h1>
        <p className="text-xl font-light text-gray-300 md:text-2xl">Junior Software Developer | Hamilton, NZ</p>
      </div>
    </header>
  );
}
