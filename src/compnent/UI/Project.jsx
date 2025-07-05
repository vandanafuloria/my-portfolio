export default function Project({ img, title, desc, link, keywords, id }) {
  return (
    <>
      <div className="project-container border">
        <div className="flex flex-col-reverse text-white">
          <div className="img">
            <img src={img} alt="img" />
          </div>
          <div className="content p-3 flex">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div>
              {keywords.map((key) => (
                <span className="border p-2 text-sm rounded-lg m-2">{key}</span>
              ))}
            </div>
          </div>
          <button className="flex gap-3 align-middle justify-center p-2">
            {" "}
            <i className="fa-solid fa-up-right-from-square text-sm"></i>
            <a className="text-sm" href={link}>
              Visit Project
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
