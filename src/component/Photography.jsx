import Photo from "./UI/Photo";
export default function Photography() {
  return (
    <>
      <div className="border border-gray-700 rounded-2xl p-5">
        <h1 className="text-2xl font-bold text-pink-600 m-3 md:text-4xl">
          Achievements
        </h1>
        <div className="photography-section flex gap-3 flex-wrap justify-center md:gap-5">
          <Photo
            title="Qualified GATE Exam"
            description="Cleared the GATE (Graduate Aptitude Test in Engineering), in Biotechnology and Life Sciences."
          />
          <Photo
            title="GitHub Portfolio"
            description="Published multiple repositories on GitHub, including project codebases, experiments, and learning logs as part of my growth journey."
          />
          <Photo
            title="Self-Taught Developer"
            description="Taught myself JavaScript, React, and modern web development practices through projects, challenges, and consistent hands-on learning."
          />

          <Photo
            title="FreeCodeCamp responsive web desing and JavaScript"
            description="Successfully completed FreeCodeCamp certifications in Responsive Web Design and JavaScript Algorithms, covering semantic HTML, Flexbox, Grid, media queries, functions, arrays, loops, and algorithmic thinking."
          />
        </div>
      </div>
    </>
  );
}
