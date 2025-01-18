import React from "react";

function LatestNews() {
  const news = [
    {
      id: 1,
      date: "18 Nov",
      title: "Curabitur porttitor orci eget neque accumsan venenatis.",
      category: "Food",
      admin: "Admin",
      comments: 55,
      image: "/images/oranges.jpg",
    },
    {
      id: 2,
      date: "23 Jan",
      title: "Curabitur porttitor orci eget neque accumsan venenatis.",
      category: "Food",
      admin: "Admin",
      comments: 55,
      image: "/images/salad.jpg",
    },
    {
      id: 3,
      date: "18 Nov",
      title: "Curabitur porttitor orci eget neque accumsan venenatis.",
      category: "Food",
      admin: "Admin",
      comments: 55,
      image: "/images/veggies.jpg",
    },
  ];

  return (
    <section className="p-6 bg-gray-50">
      <div className="text-center mb-10">
        <h4 className="text-green-500 text-sm uppercase font-semibold">Blog</h4>
        <h2 className="text-3xl font-bold">Latest News</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white text-gray-800 text-center py-1 px-2 rounded-lg font-semibold shadow">
                {item.date}
              </div>
            </div>
            {/* Content Section */}
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="mr-4">{item.category}</span>
                <span className="mr-4">By {item.admin}</span>
                <span>{item.comments} Comments</span>
              </div>
              <h3 className="text-lg font-bold mb-4">{item.title}</h3>
              <a
                href="#"
                className="text-green-500 font-medium hover:underline flex items-center"
              >
                Read More{" "}
                <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestNews;