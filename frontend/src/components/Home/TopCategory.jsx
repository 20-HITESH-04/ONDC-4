"use client";

import React, { useState } from "react";
import CategoryCard from "./CategoryCard";

function TopCategory() {
  const categories = [
    {
      name: "Vegetables",
      count: 165,
      icon: "/icons/vegetables.png",
    },
    {
      name: "Fresh Fruit",
      count: 137,
      icon: "/icons/fresh-fruit.png",
    },
    {
      name: "Fish",
      count: 34,
      icon: "/icons/fish.png",
    },
    {
      name: "Meat",
      count: 165,
      icon: "/icons/meat.png",
    },
    {
      name: "Water and Drinks",
      count: 48,
      icon: "/icons/water-drinks.png",
    },
    {
      name: "Snacks",
      count: 165,
      icon: "/icons/snacks.png",
    },
    {
      name: "Bakery",
      count: 90,
      icon: "/icons/bakery.png",
    },
    {
      name: "Dairy",
      count: 75,
      icon: "/icons/dairy.png",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 6 < categories.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="p-6 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Shop by Top Categories</h2>
        <a
          href="#"
          className="text-green-500 hover:text-green-600 text-sm font-medium"
        >
          View All →
        </a>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {categories.slice(startIndex, startIndex + 6).map((category, index) => (
            <div
              key={index}
              className="transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg bg-white rounded-lg"
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-md p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
          disabled={startIndex === 0}
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-md p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
          disabled={startIndex + 6 >= categories.length}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default TopCategory;
