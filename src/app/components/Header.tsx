"use client"; // This makes Header a Client Component

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";

const Header = ({ onMenuClick }) => {  // ✅ Removed TypeScript annotations
  const { user, setUser } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/login");
  };

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="bg-gray-100 shadow">
      <div className="w-full bg-white border-b-2 border-red-500">
        <div className="mx-auto max-w-[1200px] px-4 pt-3 pb-3 flex justify-between items-center">
          <div className="text-lg font-bold text-black mb-0">
            <Image src="/img/logo03.png" alt="logo" width={160} height={50} className="object-cover rounded-md mb-0" />
          </div>
          <div className="flex items-center space-x-4">
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
                    <Link href="/register" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Зар нэмэх
                    </Link>
                    <Link href="/profile" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-left mx-auto max-w-[1200px] overflow-x-auto space-x-4 p-4">
        <MenuItem onClick={() => onMenuClick("apartment")} src="/img/menu/apartment.png" label="Шинэ орон сууц" />
        <MenuItem onClick={() => onMenuClick("rent_apartment")} src="/img/menu/rent.png" label="Хоногоор орон сууц түрээс" />
        <MenuItem onClick={() => onMenuClick("rent_house")} src="/img/menu/rent1.png" label="Хашаа байшин түрээс" />
        <MenuItem onClick={() => onMenuClick("rent_car")} src="/img/menu/car.png" label="Автомашин" />
      </div>
    </header>
  );
};



// Remove TypeScript annotations here too
const MenuItem = ({ onClick, src, label }) => (
  <div
    onClick={onClick}
    className="cursor-pointer menu-link text-gray-700 hover:text-blue-500"
  >
    <div className="flex-shrink-0 w-24 h-24 p-1 border rounded-lg flex flex-col items-center">
      <div className="mb-2">
        <Image
          src={src}
          alt={label}
          width={32}
          height={32}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-center text-xs text-gray-700">{label}</div>
    </div>
  </div>
);

export default Header;
