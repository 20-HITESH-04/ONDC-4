import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left: Project Name and Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.jpg" // Replace with your logo file path
            alt="Logo"
            width={40}
            height={40}
          />
          <Link href="/">
            <span className="text-xl font-bold text-gray-800">GrandBazzar</span>
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-grow mx-4 lg:max-w-lg">
          <div className="relative">
            <button className="absolute top-1/2 left-2 transform -translate-y-1/2">
              <Image
                src="/search.png" // Replace with your search icon file path
                alt="Search"
                width={20}
                height={20}
              />
            </button>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-20 rounded border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="absolute top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Search
            </button>
          </div>
        </div>

        {/* Right: Language Dropdown and Sign In/Sign Up */}
        <div className="flex items-center space-x-4">
          <select className="text-sm border-gray-300 rounded px-2 py-1">
            <option>Eng</option>
            <option>Esp</option>
            <option>Fra</option>
          </select>
          <Link href="/login">
            <span className="text-sm text-green-500 hover:text-green-700">Sign In </span>
            <span className="text-sm text-green-500">/</span>
            <span className="text-sm text-green-500 hover:text-green-700"> Sign Up</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;