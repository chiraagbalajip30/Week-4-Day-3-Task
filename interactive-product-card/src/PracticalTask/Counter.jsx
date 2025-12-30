import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto flex flex-col items-center justify-centerbg-white shadow-xl rounded-xl gap-4 p-6 bg-white ">
      <h1 className="text-3xl font-bold">Counter App</h1>
      <p className="text-4xl font-bold">{count}</p>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={increment}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 rounded-lg text-white "
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
