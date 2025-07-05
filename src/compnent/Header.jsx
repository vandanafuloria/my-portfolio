import profile from "../assets/vandana.png";
import logo from "../assets/icon.jpg";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  return (
    <div className="header p-3.5 ">
      <div className="flex justify-between">
        <div className="border  rounded-full w-12 h-12 overflow-hidden">
          <img className="w-full h-full" src={logo} alt="logo" />
        </div>
        <div className="w-3/4 md:w-2/4">
          <nav>
            <ul className="flex justify-around gap-3 text-sm sm:text-sm">
              <li className="hover:text-pink-500">Home</li>
              <li className="hover:text-pink-500">About</li>
              <li className="hover:text-pink-500">Project</li>
              <li className="hover:text-pink-500">Service</li>
              <li className="hover:text-pink-600">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <span>
            <i className="fa-solid fa-gear"></i>
          </span>
        </div>
      </div>

      <div className="profile-container border border-gray-700 rounded-2xl m-3 my-5 p-5 flex flex-row-reverse justify-around gap-4 text-center  flex-wrap lg:text-left ">
        <div className="profile">
          <img src={profile} alt="" />
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
            <button className="flex gap-x-2 border rounded-lg p-2 align-middle">
              <span>
                <i className="fa-solid fa-file"></i>
              </span>
              <span className="text-sm"> Resume</span>
            </button>
            <button className="flex gap-x-2 border rounded-lg p-2 align-middle">
              {" "}
              <span>
                <i className="fa-regular fa-address-book"></i>
              </span>
              <span className="text-sm"> Contact Me</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
