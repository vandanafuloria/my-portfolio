export default function Project({ img, title, desc, link, keywords, id }) {
  console.log(title, img, desc);
  return (
    <>
      <div
        className="info flex align-middle p-5 m-4 border justify-around"
        style={{
          display: id % 2 === 0 ? "flex" : "flex",
          flexDirection: id % 2 === 0 ? "row-reverse" : "row",
        }}
      >
        <div className="img rounded-2xl overflow-hidden p-4 shadow-2xl">
          <img className="w-full" src={img} alt="img" />
        </div>
        <div>
          <div className="m-5">
            {keywords.map((key) => (
              <span className="p-2 m-2 border rounded-2xl">{key}</span>
            ))}
          </div>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p>{desc}</p>
          <button className="border p-3 m-2 bg-red-700">
            <a href={link}>View Project</a>
          </button>
        </div>
      </div>
    </>
  );
}
