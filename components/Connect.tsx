export default function Connect() {
  return (
    <section
      id="connect"
      className="mb-16 rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-lg backdrop-blur-xl"
    >
      <h2 className="mb-4 border-b-2 border-indigo-500 pb-2 text-4xl font-bold text-white">Connect</h2>
      <p className="text-lg">
        <span className="text-indigo-500">Email:</span>{' '}
        <a href="mailto:lukeponga9@gmail.com" className="text-gray-300 hover:underline">
          lukeponga9@gmail.com
        </a>
      </p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <a
          href="https://github.com/lukeponga-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm text-gray-200 transition-colors duration-300 hover:bg-white/10"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/luke-ponga/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm text-gray-200 transition-colors duration-300 hover:bg-white/10"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
