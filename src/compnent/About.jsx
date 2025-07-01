import React, { useState } from "react";
import Button from "./UI/button";
import Hobby from "./UI/Hobby";
import RecruiterSection from "./UI/Recruiter";

export default function About() {
  const [everyone, setEveryone] = useState(true);
  const [recruiter, setRecruiter] = useState(true);

  return (
    <section className="about">
      <div>
        <span>
          <i className="fas fa-circle-info"></i>
        </span>
        <span>About</span>
      </div>
      <div className="audiance">
        <span>For </span>
        <Button text={"Anyone"} />
        <Button text={"Recruiter"} />

        <Button text={"Engineer"} />
        <div>
          {everyone && (
            <div className="anyone">
              <i className="fa-solid fa-quote-left"></i>
              <p>
                "The more I learn, the more I realize how much there is yet to
                learn."
              </p>
              <span>Hobbies</span>
              <div className="hobbies-section">
                <Hobby
                  icon={<i class="fa-solid fa-pen-nib"></i>}
                  text={"Writing"}
                />
                <Hobby
                  icon={<i className="fa-solid fa-book-open-reader"></i>}
                  text={"Reading"}
                />
                <Hobby
                  icon={<i className="fa-solid fa-dumbbell"></i>}
                  text={"Gym"}
                />
                <Hobby
                  icon={<i class="fa-solid fa-camera-retro"></i>}
                  text={"Photography"}
                />
                <Hobby
                  icon={<i className="fa-solid fa-spa"></i>}
                  text={"Mindfulness"}
                />
              </div>
            </div>
          )}
        </div>
        <div>{recruiter && <RecruiterSection />}</div>
        <div> {}</div>
      </div>
    </section>
  );
}
