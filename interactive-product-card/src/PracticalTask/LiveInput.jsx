import { useState } from "react";

const LiveInput = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-md ">
      <h2 className="text-xl font-semibold">Live Input Display</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <p className="text-gray-700">
        You typed: <span className="font-semibold">{text}</span>
      </p>
    </div>
  );
};

export default LiveInput;
