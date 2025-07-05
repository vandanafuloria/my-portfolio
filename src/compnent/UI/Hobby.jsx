export default function Hobby({ icon, text }) {
  return (
    <>
      <div className="border border-gray-800 py-2 px-4 text-white">
        <span>{icon}</span> <span>{text}</span>
      </div>
    </>
  );
}
