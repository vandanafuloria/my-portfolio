export default function Button({ text, onClick }) {
  return (
    <>
      <button
        className="text-blue-400 border border-gray-300 p-1.5 rounded-2xl"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
