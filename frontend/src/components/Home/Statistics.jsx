import React from "react";

function Statistics() {
  const stats = [
    { value: "37+", label: "Years of Hard Work" },
    { value: "500k+", label: "Happy Customer" },
    { value: "28", label: "Qualified Team Member" },
    { value: "750k+", label: "Monthly Orders" },
  ];

  return (
    <section className="bg-cover bg-center py-12" style={{ backgroundImage: "url('/SliderImage1.jpg')" }}>
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-50 rounded-lg p-6 shadow-md hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-4xl font-bold text-green-500">{stat.value}</h3>
              <p className="mt-2 text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;