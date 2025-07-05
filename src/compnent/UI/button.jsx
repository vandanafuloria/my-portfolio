export default function Button({ text, onClick, bg }) {
  console.log(bg);
  return (
    <>
      <button
        className={`${
          bg ? "bg-pink-500 text-white" : "bg-black-300 text-black"
        } p-1.5 rounded-2xl`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
