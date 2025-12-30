import { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-semibold">Toggle Text</h1>

      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-lg"
        onClick={toggleText}
      >
        {isVisible ? "Hide Text" : "Show Text"}{" "}
      </button>

      {isVisible && (
        <p className="text-gray-700 text-center">
          🎉 This text is now visible!
        </p>
      )}
    </div>
  );
};

export default ToggleText;
