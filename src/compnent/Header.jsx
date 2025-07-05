import profile from "../assets/vandana.png";
import logo from "../assets/icon.jpg";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  return (
    <div className="header p-3.5">
      <div className="flex justify-between">
        <div className="border  rounded-full w-12 h-12 overflow-hidden">
          <img className="w-full h-full" src={logo} alt="logo" />
        </div>
        <div className="w-1/2">
          <nav>
            <ul className="flex justify-between gap-2.5">
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
      <hr />
      <div className="profile-container border border-gray-700 rounded-2xl m-3 my-5 p-5 flex flex-row-reverse justify-around gap-4 flex-wrap">
        <div className="profile">
          <img src={profile} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-3xl font-serif">
            {" "}
            Hi, I am <span className="text-pink-500">Vandana</span> Fuloria,
          </h1>

          <span className="text-3xl">
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

          <h2 className="font-extralight text-xl text-gray-400">
            A passionate developer by curiosity, and a life sciences learner by
            choice.
          </h2>
          <h2> Aspiring Frontend Developer</h2>
          <span className="flex gap-2 align-middle">
            <i className="fa-solid fa-location-dot"></i>
            <span>Dehradun Uttarakhand India</span>
          </span>

          <div className="flex gap-4 my-3">
            <button className="flex gap-x-3 border-2 rounded-2xl p-2">
              <span>
                <i className="fa-solid fa-file"></i>
              </span>
              <span> Resume</span>
            </button>
            <button className="flex gap-x-3 border-2 rounded-2xl p-2">
              {" "}
              <span>
                <i className="fa-regular fa-address-book"></i>
              </span>
              <span> Contact Me</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
