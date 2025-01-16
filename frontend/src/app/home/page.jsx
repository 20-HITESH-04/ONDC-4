import React from "react";
import Slider from "@/components/Home/Slider";
import FeaturedProducts from "@/components/Home/FeauturedProducts";
import TopCategory from "@/components/Home/TopCategory";
import Information from "@/components/Home/Information";
import Statistics from "@/components/Home/Statistics";
import BestSeller from "@/components/Home/BestSeller";

function Home() {
  return (
    <div className="container mx-auto p-4">
      <Slider />
      <div className="mt-5 bg-gray-100">
        <FeaturedProducts />
      </div>
      <div className="mt-5 bg-gray-100">
        <TopCategory />
      </div>
      <Information/>
      <Statistics/>
      <BestSeller/>
    </div>
  );
}

export default Home;
