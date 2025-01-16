import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectOptions } from "../../data";

const Header = () => {
  const isLoggedIn = false;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 flex flex-col">
      {/* Top Container */}
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4 md:px-6 lg:px-8">
        {/* Left: Logo and Project Name */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.jpg" // Replace with your logo file path
            alt="Logo"
            width={40}
            height={40}
          />
          <Link href="/">
            <span className="text-lg md:text-xl font-bold text-gray-800">GrandBazzar</span>
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-grow mx-4 max-w-full md:max-w-lg">
          <div className="relative">
            <button className="absolute top-1/2 left-3 transform -translate-y-1/2">
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
              className="w-full pl-10 pr-28 rounded border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
              Search
            </button>
          </div>
        </div>

        {/* Right: Sign In/Sign Up */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <span className="text-sm text-green-500 hover:text-green-700">Sign In</span>
            <span className="text-sm text-green-500 mx-1">/</span>
            <span className="text-sm text-green-500 hover:text-green-700">Sign Up</span>
          </Link>
        </div>
      </div>

      {/* Bottom Container: Dropdowns */}
      <div className="container mx-auto flex flex-wrap justify-start md:justify-center space-x-2 md:space-x-4 py-3 px-4 md:px-6 lg:px-8">
        {selectOptions.map((dropdown) => (
          <Select key={dropdown.id}>
            <SelectTrigger className="w-[120px] md:w-[150px]">
              <SelectValue placeholder={dropdown.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {dropdown.items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
      </div>

      {/* Mobile: Sign In/Sign Up */}
      <div className="md:hidden flex justify-end px-4 py-2">
        <Link href="/login">
          <span className="text-sm text-green-500 hover:text-green-700">Sign In</span>
          <span className="text-sm text-green-500 mx-1">/</span>
          <span className="text-sm text-green-500 hover:text-green-700">Sign Up</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
