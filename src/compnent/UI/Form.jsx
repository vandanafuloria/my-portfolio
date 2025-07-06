export default function Form() {
  return (
    <>
      <div className="form flex-3/4 border border-gray-700 p-5 rounded-2xl">
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
