import profile from "../assets/vandana.png";

export default function Header() {
  return (
    <div className="header p-3.5">
      <div className="flex justify-between">
        {" "}
        <div className="border-2 rounded-lg">
          {" "}
          <input type="search" placeholder="Search..." />
        </div>
        <div>
          <span>
            <i className="fa-solid fa-gear"></i>
          </span>
        </div>
      </div>
      <hr />
      <div className="border-2 rounded-2xl m-3 my-5 p-5 flex flex-col gap-4">
        <div className="profile">
          <img src={profile} alt="" />
        </div>
        <h1 className="font-bold text-4xl font-serif">Vandana Fuloria</h1>
        <span className="flex gap-2 align-middle">
          <i className="fa-solid fa-location-dot"></i>
          <span>Dehradun Uttarakhand India</span>
        </span>

        <div className="flex gap-1.5">
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
  );
}
