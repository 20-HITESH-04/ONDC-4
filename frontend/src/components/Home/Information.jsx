import React from "react";

function Information() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-16 flex flex-wrap items-center">
        {/* Left: Images */}
        <div className="w-full lg:w-1/2 flex flex-wrap gap-4 justify-center">
          <div className="w-40 h-40 bg-cover rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/farmer.jpg" // Replace with your first image path
              alt="Farmer holding apples"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-40 h-40 bg-cover rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/orchard.jpg" // Replace with your second image path
              alt="Man picking apples"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-3xl font-bold text-gray-800">
            100% Trusted <span className="text-green-500">Organic Food Store</span>
          </h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center">
              <span className="text-green-500 text-lg mr-2">✔</span>
              <p className="text-gray-600">
                Healthy & natural food for lovers of healthy food.
              </p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-lg mr-2">✔</span>
              <p className="text-gray-600">
                Every day fresh and quality products for you.
              </p>
            </li>
          </ul>
          <button className="mt-6 bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition-colors">
            Shop Now →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Information;
