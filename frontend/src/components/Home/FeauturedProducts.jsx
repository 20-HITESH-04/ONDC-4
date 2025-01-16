"use client";

import React from "react";
import ProductCard from "../ProductCard";

function FeaturedProducts() {
  const products = [
    {
      name: "Green Apple",
      price: "$14.99",
      oldPrice: "$20.99",
      discount: "50%",
      rating: 4,
      image: "/green-apple.jpg",
    },
    {
      name: "Chanise Cabbage",
      price: "$14.99",
      rating: 4,
      image: "/chanise-cabbage.jpg",
    },
    {
      name: "Green Capsicum",
      price: "$14.99",
      rating: 4,
      image: "/green-capsicum.jpg",
    },
    {
      name: "Ladies Finger",
      price: "$14.99",
      rating: 4,
      image: "/ladies-finger.jpg",
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Featured Products</h2>
        <a
          href="#"
          className="text-green-500 hover:text-green-600 text-sm font-medium"
        >
          View All →
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
