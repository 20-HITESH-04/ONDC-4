import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <div className="relative bg-gray-100 h-32 py-3 px-6 overflow-hidden">
      {/* Background container with transform */}
      <div 
        className="absolute inset-0 scale-x-[-1]" 
        style={{
          backgroundImage: "url('/images/nav.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'right'
        }}
      />
      
      {/* Navigation content */}
      <nav className="relative text-sm text-gray-600 mx-auto my-auto flex items-center h-full">
        {items.map((item, index) => (
          <span key={index}>
            <a href={item.href} className="text-blue-500 hover:underline">
              {item.label}
            </a>
            {index < items.length - 1 && " > "}
          </span>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumb;