export default function Project({
  img,
  title,
  desc,
  link,
  about,
  keywords,
  id,
}) {
  console.log(about);
  return (
    <>
      <div
        style={{ minWidth: "200px" }}
        className="project-card project-container border w-full overflow-hidden cursor-pointer sm:w-1/2 md:w-1/4  bg-black rounded-2xl border-gray-600"
      >
        <div className="project-header p-3">
          <h1 className="text-xl font-bold text-white">{title}</h1>
          <div className="flex flex-wrap m-2">
            {keywords.map((key) => (
              <span className="bg-gray-700 text-xs p-0.5 rounded-lg mx-1 text-gray-300 cursor-pointer">
                {key}
              </span>
            ))}
          </div>
        </div>
        <div className="project-img p-3 h-[200px]">
          {/* <iframe src={link} frameborder="0"></iframe> */}
          <img className="h-full" src={img} alt="img" />
        </div>
        <div className="project-detail">
          {/* <p className="text-white font-sans">{desc}</p> */}

          <div className="flex justify-between my-3 p-2 gap-2">
            {" "}
            <div className="flex gap-2 items-center">
              {" "}
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
              <span className="text-green-500">
                {" "}
                <a href={link}>Live</a>
              </span>
            </div>
            <a
              href={about}
              className="text-sm text-gray-100 bg-pink-600 border border-gray-600 rounded-xl p-1"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
