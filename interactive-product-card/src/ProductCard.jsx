import { useState } from "react";

const ProductCard = ({ name, price }) => {
  const [count, setCount] = useState(0);
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setCount(count + 1);
    setButtonText("Added");
    setIsAdded(true);
  };

  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>

      <p className="text-lg text-gray-600">₹{price}</p>

      <button
        onClick={handleAddToCart}
        disabled={isAdded}
        className={`px-4 py-2 rounded-xl text-white transition
          ${
            isAdded
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }
        `}
      >
        {buttonText}
      </button>

      <p className="text-sm text-gray-500">
        Items in cart: <span className="font-semibold">{count}</span>
      </p>
    </div>
  );
};

export default ProductCard;
