const Breadcrumb = ({ items }) => {
    return (
      <div className="bg-gray-100 py-3 px-6">
        <nav className="text-sm text-gray-600">
          {items.map((item, index) => (
            <span key={index}>
              <a href={item.href} className="text-blue-500 hover:underline">{item.label}</a>
              {index < items.length - 1 && ' > '}
            </span>
          ))}
        </nav>
      </div>
    );
  };
  
  export default Breadcrumb;  