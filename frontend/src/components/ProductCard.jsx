"use client";

import React from "react";
import Image from "next/image";
import { Heart, Share2 } from "lucide-react";

function ProductCard({
  product = {
    name: "Green Apple",
    price: "$14.99",
    oldPrice: "$20.99",
    discount: "50%",
    rating: 4,
    image: "/green-apple.jpg",
  },
}) {
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <span className="text-yellow-400">
        {"★".repeat(fullStars)}
        {"☆".repeat(emptyStars)}
      </span>
    );
  };

  return (
    <div className="relative max-w-xs p-4 border rounded-lg shadow-md bg-white group hover:shadow-lg hover:translate-y-[-5px] transition-transform duration-200">
      {/* Badge */}
      {product.discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Sale {product.discount}
        </div>
      )}

      {/* Product Image */}
      <div className="relative w-full h-40 mb-4">
        <Image
          src={product.image || "/default-product.jpg"} // Default image fallback
          alt={product.name || "Product"}
          fill
          style={{ objectFit: "contain" }}
          className="rounded"
        />
      </div>

      {/* Product Details */}
      <div>
        <h3 className="text-sm font-medium text-gray-700">
          {product.name || "Product Name"}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-800">
            {product.price || "$0.00"}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {product.oldPrice}
            </span>
          )}
        </div>
        {/* Rating */}
        <div className="flex items-center mt-1">
          {renderRating(product.rating || 0)}
        </div>
      </div>

      {/* Hover Icons */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
          aria-label="Like"
        >
          <Heart size={18} />
        </button>
        <button
          className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
          aria-label="Share"
        >
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;