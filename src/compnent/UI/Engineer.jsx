export default function Engineer() {
  return (
    <>
      <div className="engineer text-white">
        <p>
          Still figuring things out, still breaking stuff, still learning — and
          that’s the fun part. I'm always digging into basics and best
          practices, and trying to get a little better every day.
        </p>
        <span>
          If you're a developer like me, always exploring and building, feel
          free to check out my GitHub or connect on LinkedIn. I'm open to
          collaborations, feedback, or just a good tech chat!
        </span>
        <div className="flex gap-4 my-4">
          <span>
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </span>
          <span>
            <a
              href="https://github.com/vandanafuloria"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fa-brands fa-github"></i>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
