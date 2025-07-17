import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RecruiterSection() {
  const [copied, setCopied] = useState(false);
  const email = "vandanfuloria02@gmail.com";

  const handleCopy = (val) => {
    // copy on click funtion
    navigator.clipboard.writeText(val).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 500);
      toast.success("Email Copied");
    });
  };
  return (
    <>
      <div className=" recruiters ">
        <p className="w-fit">
          Frontend Developer skilled in crafting responsive, accessible, and
          user-friendly interfaces using React, JavaScript, and modern CSS
          frameworks. Passionate about clean design, performance, and delivering
          intuitive user experiences.
        </p>
        <ul className="my-4">
          <li>
            Strong foundation in HTML, CSS, JavaScript, and React Familiar with
          </li>
          <li>version control (Git), REST APIs, and basic UI/UX principles.</li>
          <li>
            {" "}
            Eager to learn, collaborate, and grow in a dynamic team environment
          </li>
        </ul>
        <div className="flex gap-4 align-middle">
          <div onClick={() => handleCopy(email)} style={{ cursor: "pointer" }}>
            <i className="fa-solid fa-envelope md:text-2xl"></i>
            <ToastContainer position="bottom-right" autoClose={1500} />
          </div>

          <span>
            <a
              href="https://www.linkedin.com/in/vandanafuloria/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <i class=" icons fa-solid fa-file md:text-2xl"></i>
            </a>
          </span>

          <div>
            <span>
              <a
                href="./resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <i className="fa-brands fa-linkedin md:text-2xl"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
