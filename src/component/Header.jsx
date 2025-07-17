import profile from "../assets/vandana.png";
import logo from "../assets/peng.png";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  return (
    <div className="header p-3.5 ">
      <div className="flex justify-between">
        <div className="border  rounded-full w-5 h-5  overflow-hidden bg-white">
          <img className="" src={logo} alt="logo" />
        </div>
        <div className="w-full md:w-2/4">
          <nav>
            <ul className="flex justify-around gap-2.5 text-sm sm:text-sm md:text-lg">
              <li className="hover:text-pink-500 slide-in delay-1">Home</li>
              <li className="hover:text-pink-500 slide-in delay-2">
                <a href="#About"> About</a>
              </li>
              <li className="hover:text-pink-500 slide-in delay-3">
                <a href="#Project"> Projects</a>
              </li>
              <li className="hover:text-pink-500 slide-in delay-4">
                <a href="#Services">Services</a>
              </li>
              <li className="hover:text-pink-600 slide-in delay-5">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="profile-container border border-gray-700 rounded-2xl m-3 my-5 p-5 flex flex-row-reverse justify-around gap-4 text-center  flex-wrap lg:text-left ">
        <div className="profile">
          <img src={profile} draggable={false} />
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="font-bold text-lg md:text-2xl lg:text-4xl">
            {" "}
            Hi, I am <span className="text-pink-500">Vandana</span> Fuloria,
          </h1>

          <span className="text-lg md:text-2xl lg:text-3xl">
            {" "}
            <span>a </span>
            <Typewriter
              words={["Frontend Developer", "Nature Lover", "React Enthusiast"]}
              loop={true}
              cursor
              cursorStyle=""
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>

          <h2 className="font-extralight text-sm text-gray-400 md:text-lg lg:text-xl ">
            A passionate developer by curiosity, and a life sciences learner by
            choice.
          </h2>
          <h2> Aspiring Frontend Developer</h2>
          <h4>
            <i className="fa-solid fa-location-dot m-4"></i>
            Dehradun Uttarakhand India
          </h4>

          <div className="flex gap-4 my-3 m-auto sm:m-auto lg:m-0">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="flex gap-x-2  rounded-lg p-2 align-middle">
                <span>
                  <i className="fa-solid fa-file"></i>
                </span>
                <span className="text-sm">Resume</span>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/vandanafuloria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex gap-x-2 rounded-lg p-2 align-middle">
                {" "}
                <span>
                  <i className="fa-regular fa-address-book"></i>
                </span>
                <span className="text-sm"> Contact Me</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
