import profile from "../assets/vandana.png";

export default function Header() {
  return (
    <div className="header">
      <div>
        {" "}
        <div>
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
      <div className="profile">
        <img src={profile} alt="" />
      </div>
      <h1>Vandana Fuloria</h1>
      <i className="fa-solid fa-location-dot"></i>{" "}
      <span>Dehradun Uttarakhand India</span>
      <div>
        <button>
          {" "}
          <span>
            <i className="fa-solid fa-file"></i>
          </span>
          Resume
        </button>
        <button>
          {" "}
          <span>
            <i className="fa-regular fa-address-book"></i>
          </span>
          Contact Me
        </button>
      </div>
    </div>
  );
}
