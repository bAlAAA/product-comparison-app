import React from "react";

function ProductCard({ product, onToggleCompare, isSelected }) {
  return (
    <div className={`border p-4 rounded ${isSelected ? "bg-blue-100" : ""}`}>
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover"  loading="lazy" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm">{product.brand}</p>
      <p className="font-bold">{product.price}</p>
      <ul className="text-xs mt-2">
        {product.features.map((f, idx) => (
          <li key={idx}>• {f}</li>
        ))}
      </ul>
      <button
        className="mt-2 px-3 py-1 text-sm bg-blue-500 text-white rounded"
        onClick={() => onToggleCompare(product)}
      >
        {isSelected ? "Remove" : "Add to Compare"}
      </button>
    </div>
  );
}

export default ProductCard;
