export default function Form() {
  return (
    <>
      <div className="form flex-3/4 border border-gray-700 p-5 rounded-2xl">
        <h1 className="text-white flex gap-3 mb-3">
          {" "}
          <span>
            <i class="fa-solid fa-paper-plane text-pink-600"></i>
          </span>
          <span className="text-xl font-bold"> Send me a Message</span>
        </h1>
        <form action="" className="flex flex-col gap-4">
          <fieldset>
            <input
              className="w-full border border-gray-400 p-2 rounded"
              type="text"
              id="name"
              placeholder="Your Name"
            />
          </fieldset>
          <fieldset>
            <input
              className="w-full   border border-gray-400 p-2 rounded"
              type="email"
              id="email"
              placeholder="Your Email"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="msg" className="text-white">
              Any Message
            </label>
            <textarea
              className="w-full border border-gray-400 p-2 rounded"
              id="msg"
            ></textarea>
          </fieldset>
          <button className="bg-pink-600 text-white p-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
