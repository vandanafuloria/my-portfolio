export default function Photo({ title, description }) {
  return (
    <div className="achieve bg-gray-800 text-white p-5 rounded-xl shadow-md w-[300px] hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-semibold text-pink-400 mb-2">{title}</h2>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}
