"use client"; // Required for hooks like useState

import Image from "next/image";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import "react-calendar/dist/Calendar.css";


const items = [
//   {
//     id: 1,
//     image: "/img/tanan_01.jpg",
//     title: "",
//     price: "$100",
//   },
  {
    id: 2,
    image: "/img/apartment.webp",
    title: "Байр",
    price: ".",
  },
];

export default function RentPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const handleNavigation = useCallback((id: number) => {
    setLoading(true); // Show loading screen
    router.push(`/product/${id}`);
  }, [router]);
 

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-xl font-bold">Уншиж байна...</p>
          </div>
        </div>
      )}

      <h1 className="text-xl font-bold flex items-center space-x-2">
        <Image
          src="/img/menu/rent.png"
          alt="Шинэ орон сууц"
          width={32}
          height={32}
          className="w-8 h-8 object-cover"
        />
        <span> Түрээс</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavigation(item.id)} // Click anywhere on the card
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition group cursor-pointer"
          >
            <div className="overflow-hidden rounded-md">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
            <p className="text-blue-500 font-bold mt-2">{item.price}</p>
            <button
              onClick={(e) => e.stopPropagation()} // Prevents button click from triggering card click
              className="text-blue-500 mt-4 block hover:underline"
            >
              Дэлгэрэнгүй
            </button>
          </div>
        ))}
      </div>
    
    </div>
  );
}
