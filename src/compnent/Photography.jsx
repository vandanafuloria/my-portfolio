import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import Photo from "./UI/Photo";
export default function Photography() {
  return (
    <>
      <div className="photography-section flex gap-5">
        <Photo
          img={img2}
          link={"https://www.pexels.com/photo/jackfruit-12992545/"}
        />
        <Photo
          img={img3}
          link={"https://www.pexels.com/photo/jackfruit-12992545/"}
        />
        <Photo
          img={img4}
          link={"https://www.pexels.com/photo/jackfruit-12992545/"}
        />
        <Photo
          img={img5}
          link={"https://www.pexels.com/photo/jackfruit-12992545/"}
        />
        <Photo
          img={img6}
          link={"https://www.pexels.com/photo/jackfruit-12992545/"}
        />
        <Photo
          img={img7}
          link={"https://www.pexels.com/photo/jackfruit-12992545/"}
        />
        <Photo
          img={img8}
          link={"https://www.pexels.com/photo/jackfruit-12992545/"}
        />
      </div>
    </>
  );
}
