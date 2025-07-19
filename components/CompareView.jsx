import React from "react";

function CompareView({ compareList, removeItem, clearAll }) {
  const featureKeys = ["Brand", "Price", "Features"];

  return (
    <div className="mt-8 border-t pt-4">
      <h2 className="flex justify-between text-xl font-semibold mb-2">Comparison
        <div className=" mb-2">
          <button className="text-sm text-red-600" onClick={clearAll}>
            Clear All
          </button>
        </div>
      </h2>

      <div className="overflow-x-auto">
        <table className="table-auto border w-full text-left">
          <thead>
            <tr>
              <th className="border p-2">Attribute</th>
              {compareList.map((item) => (
                <th className="border p-2 relative" key={item.id}>
                  <button
                    className="absolute top-1 right-2 text-xs text-red-500"
                    onClick={() => removeItem(item.id)}
                  >
                    ✕
                  </button>
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Brand</td>
              {compareList.map((item) => (
                <td className="border p-2" key={item.id}>{item.brand}</td>
              ))}
            </tr>
            <tr>
              <td className="border p-2">Price</td>
              {compareList.map((item) => (
                <td className="border p-2" key={item.id}>{item.price}</td>
              ))}
            </tr>
            <tr>
              <td className="border p-2">Features</td>
              {compareList.map((item) => (
                <td className="border p-2 text-xs" key={item.id}>
                  {item.features.join(", ")}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompareView;
