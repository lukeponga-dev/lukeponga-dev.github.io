const projects = [
  {
    title: 'Data Structures & Algorithms',
    description:
      'University assignments on implementing core data structures in Java. Demonstrates knowledge of BSTs, Heaps, and Linked Lists.',
    href: 'https://github.com/lukeponga-dev/compx201-university-java-data-structures',
    label: 'View on GitHub',
  },
  {
    title: 'Job Application Tracker',
    description: 'A practical web-based tool for tracking job applications and volunteer work.',
    href: 'https://github.com/lukeponga-dev/JobApplication-tracker',
    label: 'View on GitHub',
  },
  {
    title: 'Kiwi Car Checker',
    description: 'A TypeScript-based application for checking vehicle information in New Zealand.',
    href: 'https://github.com/lukeponga-dev/kiwi-car-checker',
    label: 'View on GitHub',
  },
  {
    title: 'More Projects',
    description:
      "I'm actively working on new projects. Stay tuned for updates, or check out my GitHub profile for my latest activity.",
    href: 'https://github.com/lukeponga-dev',
    label: 'Visit My GitHub',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="mb-8 border-b-2 border-indigo-500 pb-2 text-center text-4xl font-bold text-white">Projects</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project flex transform flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-xl transition-colors duration-300 hover:-translate-y-2 hover:border-indigo-500"
          >
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mb-4 text-gray-400">{project.description}</p>
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-400 hover:underline"
            >
              {project.label}
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-10h6m0 0l-6 6" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
