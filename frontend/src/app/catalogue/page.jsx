import React from "react";
import ProductCard from "@/components/ProductCard";

function catalogue() {
  const products = [
    {
      name: "Red Chili",
      price: "$14.99",
      image: "/images/red-chili.png",
    },
    {
      name: "Big Potatoes",
      price: "$14.99",
      image: "/images/potatoes.png",
    },
    {
      name: "Chamise Cabbage",
      price: "$14.99",
      image: "/images/cabbage.png",
    },
    {
      name: "Ladies Finger",
      price: "$14.99 $20.99",
      outOfStock: true,
      image: "/images/ladies-finger.png",
    },
    {
      name: "Red Tomato",
      price: "$14.99",
      image: "/images/tomato.png",
    },
    {
      name: "Fresh Cauliflower",
      price: "$14.99",
      image: "/images/cauliflower.png",
    },
    {
      name: "Eggplant",
      price: "$14.99",
      image: "/images/eggplant.png",
    },
    {
      name: "Green Apple",
      price: "$14.99",
      discount: "Sale 50%",
      image: "/images/apple.png",
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Catalogue</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default catalogue;
