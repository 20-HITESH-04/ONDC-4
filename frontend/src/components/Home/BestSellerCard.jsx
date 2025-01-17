import React from "react";

function BestSellerCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300 ease-in-out">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-green-500 font-medium">${product.price}</p>
      <p className="text-sm text-gray-500 line-through">${product.oldPrice}</p>
      <div className="flex items-center mt-2 space-x-2">
        <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
          🛒
        </button>
        <button className="bg-gray-100 p-2 rounded hover:bg-gray-200">
          ❤️
        </button>
      </div>
    </div>
  );
}

export default BestSellerCard;