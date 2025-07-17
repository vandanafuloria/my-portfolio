import Form from "./UI/Form";

export default function Contact() {
  return (
    <>
      <div
        id="Contact"
        className="contact-section flex justify-around border border-gray-700 p-4 my-4 rounded-2xl flex-wrap text-center gap-4 "
      >
        <div className="flex-1/4">
          <h1 className="text-2xl font-bold text-pink-600 md:text-5xl">
            Lets Connect
          </h1>
          <div className="flex flex-col gap-3 text-gray-200 m-4">
            <div className="contact flex justify-center gap-2 md:justify-start">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <span>Vandanafuloria02@gmail.com</span>
            </div>
            <div className="contact flex justify-center gap-2 md:justify-start">
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <span>+91 9068889214</span>
            </div>
            <div className="contact flex justify-center gap-4 md:justify-start">
              <span>
                <a href="https://x.com/vandana_fuloria">
                  <i class="icon fa-brands fa-square-x-twitter text-4xl"></i>
                </a>
              </span>

              <span>
                <a href="'https://github.com/vandanafuloria">
                  <i class="icon fa-brands fa-square-github text-4xl"></i>
                </a>
              </span>

              <span>
                <a href="https://www.linkedin.com/in/vandanafuloria/">
                  <i class=" icon fa-brands fa-linkedin text-4xl"></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        <Form />
      </div>
    </>
  );
}
