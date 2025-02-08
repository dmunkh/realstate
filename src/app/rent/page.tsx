"use client"; // Required for hooks like useState

import Image from "next/image";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekdays = ["Дав", "Мяг", "Лха", "Пүр", "Баа", "Бям", "Ням"];


const items = [
  {
    id: 1,
    image: "/img/tanan_01.jpg",
    title: "Item One",
    price: "$100",
  },
  {
    id: 2,
    image: "/img/apartment.webp",
    title: "Item Two",
    price: "$200",
  },
];

export default function RentPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(moment()); // Current month & year
  const [selectedDate, setSelectedDate] = useState(moment()); // Selected date

  
  const handleNavigation = useCallback((id: number) => {
    setLoading(true); // Show loading screen
    router.push(`/product/${id}`);
  }, [router]);
  const handleMonthChange = (offset: number) => {
    setCurrentDate((prev) => prev.clone().add(offset, "months"));
  };

  // Generate calendar days
  const generateCalendar = () => {
    const startOfMonth = currentDate.clone().startOf("month");
    const endOfMonth = currentDate.clone().endOf("month");
    const startDate = startOfMonth.clone().startOf("week").isoWeekday(1); // Start on Monday
    const endDate = endOfMonth.clone().endOf("week").isoWeekday(7);
    const days = [];

    let day = startDate.clone();
    while (day.isBefore(endDate, "day")) {
      days.push(day.clone());
      day.add(1, "day");
    }

    return days;
  };

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
              View Details
            </button>
          </div>
        ))}
      </div>
      <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-lg">
      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => handleMonthChange(-1)}>
          <ChevronLeft className="w-5 h-5 cursor-pointer" />
        </button>
        <h3 className="text-lg font-semibold">
          {currentDate.format("YYYY")} {currentDate.format("M-р сар")}
        </h3>
        <button onClick={() => handleMonthChange(1)}>
          <ChevronRight className="w-5 h-5 cursor-pointer" />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center font-semibold text-gray-700">
        {weekdays.map((day, index) => (
          <div key={index} className="py-2">{day}</div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {generateCalendar().map((day, index) => (
          <div
            key={index}
            className={`p-2 text-center rounded-md cursor-pointer ${
              day.month() !== currentDate.month()
                ? "text-gray-400"
                : day.isSame(selectedDate, "day")
                ? "bg-green-500 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setSelectedDate(day)}
          >
            {day.date()}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
