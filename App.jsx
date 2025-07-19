import React, { useState, useEffect } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import CompareView from "./components/CompareView";

function App() {
  const [compareList, setCompareList] = useState(() => {
    const saved = localStorage.getItem("compareList");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("compareList", JSON.stringify(compareList));
  }, [compareList]);

  const toggleCompare = (product) => {
    if (compareList.find((item) => item.id === product.id)) {
      setCompareList(compareList.filter((item) => item.id !== product.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, product]);
    }
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Comparison App</h1>
      <input
        className="border px-2 py-1 mb-4 w-full md:w-1/3"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onToggleCompare={toggleCompare}
            isSelected={compareList.find((p) => p.id === product.id)}
          />
        ))}
      </div>
      {compareList.length >= 2 && (
        <CompareView
          compareList={compareList}
          removeItem={(id) =>
            setCompareList(compareList.filter((p) => p.id !== id))
          }
          clearAll={() => setCompareList([])}
        />
      )}
    </div>
  );
}

export default App;
