"use client"; // Ensures this component runs on the client

import Link from "next/link";
import { useUser } from "../context/UserContext"; // Import the user context
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

const Header = () => {
  const { user, setUser } = useUser(); // Get user from context
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
  const router = useRouter(); // Initialize the router
  const handleLogout = () => {
    setUser(null); // Clear user context
    localStorage.removeItem("user"); // Remove from local storage
    router.push("/login"); // Redirect after login

  };
  const handleLinkClick = () => {
    setDropdownOpen(false); // Close dropdown when a link is clicked
  };
  return (
    <header className="bg-gray-100 shadow">
    {/* Top Header Bar */}
    <div className="w-full bg-red-500">
      <div className="mx-auto max-w-[1200px] px-4 pt-3 pb-3 flex justify-between items-center">
        <div className="text-lg font-bold text-white">Real Estate</div>

        <div className="flex items-center space-x-4">
         

          {/* User Dropdown */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded"
              >
                {user.name} ⏷
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border">
                  <Link
                    href="/register" onClick={handleLinkClick} // Close dropdown when clicked
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Зар нэмэх
                  </Link>
                  <Link
                    href="/profile" onClick={handleLinkClick} // Close dropdown when clicked
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>

    {/* Navigation Menu */}
    <div className="flex items-center justify-left mx-auto max-w-[1200px] overflow-x-auto space-x-4 p-4">
      <MenuItem href="/" src="/img/menu/apartment.png" label="Шинэ орон сууц" />
      <MenuItem href="/rent-apartment" src="/img/menu/rent.png" label="Хоногоор орон сууц түрээс" />
      <MenuItem href="/rent-house" src="/img/menu/rent1.png" label="Хашаа байшин түрээс" />
      <MenuItem href="/rent-car" src="/img/menu/car.png" label="Автомашин" />
    </div>
  </header>
  );
};
const MenuItem = ({ href, src, label }: { href: string; src: string; label: string }) => (
    <Link href={href} className="menu-link text-gray-700 hover:text-blue-500">
      <div className="flex-shrink-0 w-24 h-24 p-1 border rounded-lg flex flex-col items-center">
        <div className="mb-2">
          <Image src={src} alt={label} width={32} height={32} className="object-cover w-full h-full" />
        </div>
        <div className="text-center text-xs text-gray-700">{label}</div>
      </div>
    </Link>
  );
export default Header;
