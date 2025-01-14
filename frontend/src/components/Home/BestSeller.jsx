import React from "react";
import BestSellerCard from "./BestSellerCard";

function BestSeller() {
  const categories = [
    {
      title: "Hot Deals",
      products: [
        { name: "Green Apple", price: "$14.99", rating: 4, image: "/images/apple.png" },
        { name: "Indian Malta", price: "$14.99", rating: 5, image: "/images/malta.png" },
      ],
    },
    {
      title: "Best Seller",
      products: [
        { name: "Eggplant", price: "$14.99", rating: 4, image: "/images/eggplant.png" },
        { name: "Red Capsicum", price: "$14.99", rating: 5, image: "/images/capsicum.png" },
      ],
    },
    {
      title: "Top Rated",
      products: [
        { name: "Big Potatoes", price: "$14.99", rating: 4, image: "/images/potatoes.png" },
        { name: "Fresh Cauliflower", price: "$14.99", rating: 4, image: "/images/cauliflower.png" },
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Best Seller Products</h2>
      <div className="grid gap-8">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="text-md font-bold text-gray-700 mb-4">{category.title}</h3>
            <div className="flex flex-col space-y-4">
              {category.products.map((product, index) => (
                <BestSellerCard key={index} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
