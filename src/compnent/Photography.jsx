import img1 from "../assets/1.png";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/1.jpg";
import Photo from "./UI/Photo";
export default function Photography() {
  return (
    <>
      <div className="border border-gray-700 rounded-2xl p-5">
        <h1 className="text-2xl font-bold text-pink-600 m-3 md:text-4xl ">
          Photography I Love ❤️{" "}
        </h1>
        <div className="photography-section flex gap-3 flex-wrap justify-center md:gap-5 ">
          <Photo img={img2} />
          <Photo img={img3} />

          <Photo img={img4} />
          <Photo img={img6} />
          <Photo img={img5} />

          <Photo img={img7} />
          <Photo img={img8} />
          <Photo img={img1} />
        </div>
      </div>
    </>
  );
}
