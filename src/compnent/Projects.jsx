import main from "../assets/main.png";
import ss1 from "../assets/ss1.png";
import cv from "../assets/cv.png";
import weather from "../assets/desktop-light.png";
import memory from "../assets/image.png";
import Project from "./UI/Project";

export default function Projects() {
  const arr = [
    {
      id: 1,
      title: "e-Market",
      img: main,
      desc: "🛒 E-Market – A responsive shopping app with product listings, category filters, search, pagination, cart, liked items, and product detail pages.",
      link: "https://e-market-blush.vercel.app/",
      keyword: ["e-market", "React"],
    },
    {
      id: 2,
      title: "Weahter Forcast",
      img: weather,
      desc: "A simple weather application, that gets weather of any country, city or village around the globe",
      link: "https://vandanafuloria.github.io/weather-forecast/",
      keyword: ["vanilla js", "openweatherapi", "Weahter forcast"],
    },
    {
      id: 3,
      title: "Restuarant Page",
      img: ss1,
      desc: "Restaurant page, which focus on rendering pages according to click on a single page, with nice responsive design",
      link: "https://vandanafuloria.github.io/restuarant/",
      keyword: ["design", "vanila js", "UI"],
    },
    {
      id: 4,
      title: "Resume Builder",
      img: cv,
      desc: "CV Builder is a web-based resume generator that allows users to create, edit, and preview their CVs in real-time. It features a clean interface and instant preview functionality, ideal for users looking to craft professional resumes quickly and efficiently.",
      link: "vandanafuloria.github.io/CV-builder-/",
      keyword: ["CV-builder", "Live-preview", "React"],
    },
    {
      id: 5,
      title: "Memory-game",
      img: memory,
      desc: "A fun and interactive memory matching game built to sharpen focus and recall. Developed using React and CSS.",
      link: "https://vandanafuloria.github.io/play-with-memory/",
      keyword: ["Game", "Memory", "React"],
    },
  ];

  return (
    <>
      <section className="project-section border border-gray-700 my-10 p-4 rounded-2xl">
        <h1 className="text-3xl font-bold text-pink-600">My Work</h1>

        <div className="projects flex flex-wrap justify-start gap-10 flex-1">
          {arr.map((pro) => {
            return (
              <Project
                img={pro.img}
                title={pro.title}
                desc={pro.desc}
                link={pro.link}
                keywords={pro.keyword}
                id={pro.id}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
