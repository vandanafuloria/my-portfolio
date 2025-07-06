export default function Photo({ img, link }) {
  return (
    <>
      <div className="photo w-20 md:w-1/5">
        <img className="w-full rounded-2xl" src={img} alt="" />
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
