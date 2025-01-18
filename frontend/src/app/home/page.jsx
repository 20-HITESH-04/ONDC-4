import React from "react";
import Slider from "@/components/Home/Slider";
import FeaturedProducts from "@/components/Home/FeauturedProducts";
import TopCategory from "@/components/Home/TopCategory";
import Information from "@/components/Home/Information";
import Statistics from "@/components/Home/Statistics";
import BestSeller from "@/components/Home/BestSeller";
import LatestNews from "@/components/Home/LatestNews";

function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Slider Section */}
      <div className="mb-10">
        <Slider />
      </div>

      {/* Featured Products Section */}
      <section className="mb-10 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Featured Products
        </h2>
        <FeaturedProducts />
      </section>

      {/* Top Category Section */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Top Categories
        </h2>
        <TopCategory />
      </section>

      {/* Information Section */}
      <section className="mb-10 bg-gray-50 p-6 rounded-lg shadow-md">
        <Information />
      </section>

      {/* Statistics Section */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Statistics
        </h2>
        <Statistics />
      </section>

      {/* Best Seller Section */}
      <section className="mb-10 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Best Sellers
        </h2>
        <BestSeller />
      </section>

      {/* Latest News Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Latest News
        </h2>
        <LatestNews />
      </section>
    </div>
  );
}

export default Home;