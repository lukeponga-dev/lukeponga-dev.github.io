const skillGroups = [
  {
    title: 'Languages & Frameworks',
    items: ['C#, Java, HTML/CSS/JS', 'SQL, .NET, Azure', 'React Native'],
  },
  {
    title: 'Tools & Software',
    items: ['Microsoft Office', 'Git, GitHub', 'Visual Studio, VS Code'],
  },
  {
    title: 'Methodologies & Concepts',
    items: ['ISTQB CTFL', 'Natural Language AI', 'Agile Development'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-16 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg backdrop-blur-xl">
      <h2 className="mb-8 border-b-2 border-indigo-500 pb-2 text-center text-4xl font-bold text-white">Skills</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="transform rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:-translate-y-2 hover:bg-indigo-600/40"
          >
            <h3 className="mb-2 text-2xl font-semibold text-white">{group.title}</h3>
            <ul className="list-inside list-disc text-gray-300">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
