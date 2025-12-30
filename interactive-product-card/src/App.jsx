import ProductCard from "./ProductCard";
import PracticalTaskCode from "./PracticalTask/PracticalTaskCode";
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";

function App() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 2999 },
    { id: 2, name: "Smart Watch", price: 4999 },
    { id: 3, name: "Bluetooth Speaker", price: 1999 },
  ];

  // This component is INSIDE the Router, so hooks work here
  function NavigationButton() {
    const navigate = useNavigate();
    const location = useLocation();

    const isOnPracticalTask = location.pathname === "/practicalTask";

    const handleClick = () => {
      if (isOnPracticalTask) {
        navigate("/");
      } else {
        navigate("/practicalTask");
      }
    };

    return (
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow transition transform hover:scale-105"
      >
        {isOnPracticalTask ? "Creative Task" : "Practical Task"}
      </button>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="w-full bg-white shadow-md py-4 px-6 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">My Store</h1>
            
            {/* Now safe to use – inside Router context */}
            <NavigationButton />
          </div>
        </header>

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <main className="flex-1 flex items-center justify-center p-6">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      price={product.price}
                    />
                  ))}
                </div>
              </main>
            }
          />

          {/* Practical Task Page */}
          <Route
            path="/practicalTask"
            element={
              <div className="min-h-screen bg-gray-100 pt-8">
                <PracticalTaskCode />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;