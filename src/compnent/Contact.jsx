import Form from "./UI/Form";
export default function Contact() {
  return (
    <>
      <div className="contact-section flex justify-around border border-gray-400 p-4 m-3">
        <div className="flex-1/4">
          <h1 className="text-5xl font-bold">Contact Me</h1>
          <div className="flex flex-col gap-3">
            <div className="flex justify-start gap-2">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <span>Vandanafuloria02@gmail.com</span>
            </div>
            <div className="flex justify-start gap-2">
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <span>+91 9068889214</span>
            </div>
            <div className="flex justify-start gap-2">
              <span>
                <a href="https://x.com/vandana_fuloria">
                  <i class="fa-brands fa-square-x-twitter"></i>
                </a>
              </span>

              <span>
                <a href="'https://github.com/vandanafuloria">
                  <i class="fa-brands fa-square-github"></i>
                </a>
              </span>

              <span>
                <a href="https://www.linkedin.com/in/vandanafuloria/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
          <button>Download CV</button>
        </div>
        <Form />
      </div>
    </>
  );
}
