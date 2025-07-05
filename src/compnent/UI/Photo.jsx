export default function Photo({ img, link }) {
  return (
    <>
      <div className="photo">
        <img src={img} alt="" />
        {/* <div className="overlay">
          <span>
            <a href={link}>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </span>
        </div> */}
      </div>
    </>
  );
}
