import { useState } from "react";

const ButtonTextChange = () => {
  const [buttonText, setButtonText] = useState("Click Me");

  const handleClick = () => {
    setButtonText(!buttonText);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold">Button Text Change</h2>

      <button
        onClick={handleClick}
        className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
      >
        {buttonText ? "Click Me" : "Clicked"}
      </button>
    </div>
  );
};

export default ButtonTextChange;
