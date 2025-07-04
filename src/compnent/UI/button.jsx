export default function Button({ text, onClick, bg }) {
  console.log(bg);
  return (
    <>
      <button
        className={`${
          bg ? "bg-yellow-300" : "bg-black-300"
        } text-blue-400 border border-gray-300 p-1.5 rounded-2xl`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
