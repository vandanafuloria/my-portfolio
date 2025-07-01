import { useState } from "react";

export default function RecruiterSection() {
  const [copied, setCopied] = useState(false);
  const email = "vandanfuloria02@gmail.com";

  const handleCopy = (val) => {
    // copy on click funtion
    navigator.clipboard.writeText(val).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 500);
    });
  };
  return (
    <>
      <p>
        Frontend Developer skilled in crafting responsive, accessible, and
        user-friendly interfaces using React, JavaScript, and modern CSS
        frameworks. Passionate about clean design, performance, and delivering
        intuitive user experiences.
      </p>
      <ul>
        <li>
          Strong foundation in HTML, CSS, JavaScript, and React Familiar with
        </li>
        <li>
          version control (Git), REST APIs, and basic UI/UX principles Eager to
        </li>
        <li>learn, collaborate, and grow in a dynamic team environment</li>
      </ul>
      <div>
        <div
          onClick={() => handleCopy(email)}
          style={{ cursor: "pointer", marginTop: "1rem", color: "#007bff" }}
        >
          <i className="fa-solid fa-envelope"></i> {copied && email}
          {copied && (
            <span style={{ marginLeft: "10px", color: "green" }}>Copied!</span>
          )}
        </div>
        <div>
          <span>
            <a
              href="https://www.linkedin.com/in/vandanafuloria/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
