"use client";

import React from "react";

function CategoryCard({ category }) {
  return (
    <div className="flex flex-col items-center justify-center w-36 h-40 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border">
      {/* Icon */}
      <div className="w-12 h-12 mb-2">
        <img
          src={category.icon || "/default-icon.png"} // Fallback icon
          alt={category.name || "Category"}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Name */}
      <h3 className="text-sm font-semibold text-gray-800 text-center">
        {category.name || "Category"}
      </h3>

      {/* Product Count */}
      <p className="text-xs text-gray-500 text-center">
        {category.count || "0"} Products
      </p>
    </div>
  );
}

export default CategoryCard;