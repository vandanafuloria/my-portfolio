export default function AdditionalProjects() {
  const projects = [
    { name: "Homepage UI", link: "https://vandanafuloria.github.io/homepage/" },
    {
      name: "Calculator",
      link: "https://vandanafuloria.github.io/calculator/",
    },
    {
      name: "Rock Paper Scissors",
      link: "https://vandanafuloria.github.io/rock-paper-scissors/",
    },
    { name: "To-Do App", link: "https://vandanafuloria.github.io/todo/" },
    {
      name: "Tic Tac Toe",
      link: "https://vandanafuloria.github.io/tic-tac-toe/",
    },
    {
      name: "Book Library",
      link: "https://vandanafuloria.github.io/bookLibrary/",
    },

    {
      name: "News Laundry",
      link: "https://vandanafuloria.github.io/News-Laundry/",
    },
    {
      name: "Random Quotes",
      link: "https://vandanafuloria.github.io/random-quote-generation/",
    },

    {
      name: "Sketch Area",
      link: "https://vandanafuloria.github.io/sketch-area/",
    },

    {
      name: "Music Band",
      link: "https://github.com/vandanafuloria/music-instrument",
    },
    {
      name: "Alarm Clock",
      link: "https://vandanafuloria.github.io/alarm-clock/",
    },
  ];

  return (
    <section className="my-10 px-6 py-4 rounded-xl border border-gray-700 shadow-md">
      <h2 className="text-2xl font-bold text-center text-purple-600 mb-6 md:text-3xl">
        Additional Projects
      </h2>
      <div className="extra grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gray-800 rounded-lg"
          >
            <span className="text-xs font-medium md:text-lg">
              {project.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
