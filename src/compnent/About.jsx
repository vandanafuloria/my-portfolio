import React, { useState } from "react";
import Button from "./UI/Button";
import Hobby from "./UI/Hobby";
import RecruiterSection from "./UI/Recruiter";
import Engineer from "./UI/Engineer";

export default function About() {
  const [everyone, setEveryone] = useState(true);
  const [recruiter, setRecruiter] = useState(false);
  const [engineer, setEngineer] = useState(false);

  const showEveryone = () => {
    setEveryone(true);
    setEngineer(false);
    setRecruiter(false);
  };
  const showRecruiter = () => {
    setRecruiter(true);
    setEveryone(false);
    setEngineer(false);
  };
  const showEngineer = () => {
    setEngineer(true);
    setRecruiter(false);
    setEveryone(false);
  };

  return (
    <section className="about border-2 rounded-2xl p-4 m-3">
      <div>
        <span>
          <i className="fas fa-circle-info"></i>
        </span>
        <span>About</span>
      </div>

      <div className="audiance">
        <div className="flex gap-3 items-center">
          <span>For</span>
          <Button text="Anyone" onClick={showEveryone} bg={everyone} />
          <Button text="Recruiter" onClick={showRecruiter} bg={recruiter} />
          <Button text="Engineer" onClick={showEngineer} bg={engineer} />
        </div>

        {/* Animate container */}
        <div className="persons p-3 m-1  ">
          {/* Anyone Section */}
          {everyone && (
            <div
              className={`transition-all duration-500 transform ${
                everyone
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-80 pointer-events-none"
              }`}
            >
              <div className="anyone">
                <i className="fa-solid fa-quote-left"></i>
                <p className="border-l-4 border-pink-400 p-2">
                  The more I learn, the more I realize how much there is yet to
                  learn.
                </p>
                <span>Hobbies : </span>
                <div className="hobbies-section grid grid-cols-2 gap-2 mt-2 flex-wrap">
                  <Hobby
                    icon={<i className="fa-solid fa-pen-nib"></i>}
                    text="Writing"
                  />
                  <Hobby
                    icon={<i className="fa-solid fa-book-open-reader"></i>}
                    text="Reading"
                  />
                  <Hobby
                    icon={<i className="fa-solid fa-dumbbell"></i>}
                    text="Gym"
                  />
                  <Hobby
                    icon={<i className="fa-solid fa-camera-retro"></i>}
                    text="Photography"
                  />
                  <Hobby
                    icon={<i className="fa-solid fa-spa"></i>}
                    text="Mindfulness"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Recruiter Section */}
          {recruiter && (
            <div
              className={`transition-all duration-500 transform ${
                recruiter
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90 pointer-events-none"
              }`}
            >
              <RecruiterSection />
            </div>
          )}

          {/* Engineer Section */}
          {engineer && (
            <div
              className={` w-full transition-all duration-500 transform ${
                engineer
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90 pointer-events-none"
              }`}
            >
              <Engineer />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
