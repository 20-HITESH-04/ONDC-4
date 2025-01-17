import React from "react";
import BestSellerCard from "./BestSellerCard";

function BestSeller() {
  const products = [
    {
      name: "Green Apple",
      price: "14.99",
      oldPrice: "20.99",
      image: "/images/green-apple.jpg",
    },
    {
      name: "Eggplant",
      price: "14.99",
      oldPrice: "",
      image: "/images/eggplant.jpg",
    },
    {
      name: "Indian Malta",
      price: "14.99",
      oldPrice: "",
      image: "/images/indian-malta.jpg",
    },
    {
      name: "Red Capsicum",
      price: "14.99",
      oldPrice: "20.99",
      image: "/images/red-capsicum.jpg",
    },
    {
      name: "Big Potatoes",
      price: "14.99",
      oldPrice: "",
      image: "/images/big-potatoes.jpg",
    },
    {
      name: "Fresh Cauliflower",
      price: "14.99",
      oldPrice: "",
      image: "/images/fresh-cauliflower.jpg",
    },
  ];

  const categories = [
    "Vegetables",
    "Fruits",
    "Dairy Products",
  ];

  return (
    <div className="p-6">
      {/* Title and View All Link */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Best Seller</h2>
        <a
          href="#"
          className="text-green-500 hover:text-green-600 text-sm font-medium"
        >
          View all →
        </a>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Categories Section */}
        <div className="w-full lg:w-1/4 bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li
                key={index}
                className="text-gray-700 hover:text-green-600 font-medium cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {products.map((product, index) => (
            <BestSellerCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSeller;