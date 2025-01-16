import React from "react";

function BestSellerCard({ product }) {
  return (
    <div className="border rounded-md p-2 bg-white shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-16 h-16 object-cover mx-auto mb-2 rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
      <p className="text-xs text-gray-500 mt-1">{product.price}</p>
      <div className="flex justify-center mt-1">
        <span className="text-yellow-400 text-xs">{'★'.repeat(product.rating)}</span>
        <span className="text-gray-300 text-xs">{'☆'.repeat(5 - product.rating)}</span>
      </div>
    </div>
  );
}

export default BestSellerCard;
