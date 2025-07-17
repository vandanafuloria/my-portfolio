import main from "../assets/main.png";
import ss1 from "../assets/ss1.png";
import cv from "../assets/cv.png";
import weather from "../assets/desktop-light.png";
import memory from "../assets/image.png";
import Project from "./UI/Project";
import car from "../assets/car.png";
import Extra from "./AdditionalProjects";

export default function Projects() {
  const arr = [
    {
      id: 1,
      title: "e-Market",
      img: main,
      desc: "🛒 E-Market – A responsive shopping app with product listings, category filters, search, pagination, cart, liked items, and product detail pages.",
      link: "https://e-market-blush.vercel.app/",
      about: "https://github.com/vandanafuloria/e-market",
      keyword: ["e-market", "React"],
    },
    {
      id: 2,
      title: "Weahter Forcast",
      img: weather,
      desc: "A simple weather application, that gets weather of any country, city or village around the globe",
      link: "https://vandanafuloria.github.io/weather-forecast/",
      about: "https://github.com/vandanafuloria/weather-forecast",
      keyword: ["vanilla js", "Weahter forcast"],
    },
    {
      id: 3,
      title: "Restuarant Page",
      img: ss1,
      desc: "Restaurant page, which focus on rendering pages according to click on a single page, with nice responsive design",
      link: "https://vandanafuloria.github.io/restuarant/",
      about: "https://github.com/vandanafuloria/restuarant",
      keyword: ["design", "vanila js", "UI"],
    },
    {
      id: 4,
      title: "Resume Builder",
      img: cv,
      desc: "CV Builder is a web-based resume generator that allows users to create, edit, and preview their CVs in real-time. .",
      link: "vandanafuloria.github.io/CV-builder-/",
      about: "https://github.com/vandanafuloria/CV-builder-",
      keyword: ["CV-builder", "Live-preview", "React"],
    },
    {
      id: 5,
      title: "Memory-game",
      img: memory,
      desc: "A fun and interactive memory matching game built to sharpen focus and recall. Developed using React and CSS.",
      link: "https://vandanafuloria.github.io/play-with-memory/",
      about: "https://github.com/vandanafuloria/play-with-memory",
      keyword: ["Game", "Memory", "React"],
    },
    {
      id: 6,
      title: "carBazar",
      img: car,
      desc: "Car bazar is a project focused on jwt authantication and page navigation, wiht nice visaul apreal",
      link: "",
      about: "",
      keyword: ["Car website", "JWT Authantication"],
    },
  ];

  return (
    <>
      <section
        id="Project"
        className="project-section  w-fullborder border-gray-700 my-5 p-2 rounded-2xl"
      >
        <h1 className="text-3xl font-bold text-pink-600 px-4 py-2 my-4">
          My Projects
        </h1>

        <div className="projects flex justify-around gap-10 md:justify-center flex-wrap">
          {arr.map((pro) => {
            return (
              <Project
                img={pro.img}
                title={pro.title}
                desc={pro.desc}
                link={pro.link}
                keywords={pro.keyword}
                id={pro.id}
                about={pro.about}
              />
            );
          })}
        </div>

        <Extra />
      </section>
    </>
  );
}
