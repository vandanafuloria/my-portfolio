export default function Form() {
  return (
    <>
      <div className="flex-3/4">
        <form action="" className="flex flex-col gap-4">
          <fieldset>
            <input
              className="w-full border border-white-300 p-2 rounded"
              type="text"
              id="name"
              placeholder="Your Name"
            />
          </fieldset>
          <fieldset>
            <input
              className="w-full   border border-white-300 p-2 rounded"
              type="emial"
              id="email"
              placeholder="Your Email"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="msg">Any Message</label>
            <textarea
              className="w-full border border-gray-400 p-2 rounded"
              id="msg"
            ></textarea>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
