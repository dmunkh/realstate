"use client"; // Required for hooks like useState

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import Apartment from "../app/components/new_apartment"
// import RentApartment from "../app/components/rent_aparment"
// import { useRouter } from "next/navigation";
// import Header from "../app/context/Header"
import { CheckCircle, Facebook  } from "lucide-react";
// const items = [
//   {
//     id: 1,
//     image: "/img/tanan_01.jpg",
//     title: "Item One",
//     price: "$100",
//   },
//   {
//     id: 2,
//     image: "/img/apartment.webp",
//     title: "Item Two",
//     price: "$200",
//   },
// ];
export default function HomePage() {
  // const [selectedComponent, setSelectedComponent] = useState("apartment");

  // Function to change the component
  // const handleMenuClick = (component: string) => {
  //   setSelectedComponent(component);
  // };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-0">
      <div className="flex flex-col bg-green-100 border border-green-400 text-green-700 mt-10 mb-96 px-4 py-3 rounded-lg shadow-md">
      <div className="flex items-center">
        <CheckCircle className="w-6 h-6 mr-2 text-green-700" />
        <span className="font-semibold text-sm">
          Эрдэнэт зууч зарын нэгдсэн сайт нь таны бүх төрлийн зарыг хүлээн авна.
          Бидэнтэй хамтарч ажиллахыг хүсвэл холбогдох утас: 95590090
        </span>
      </div>

      {/* Facebook Link */}
      <div className="flex items-center mt-2">
        <Facebook className="w-5 h-5 text-blue-600 mr-2" />
        <a
          href="https://www.facebook.com/profile.php?id=61568206667360"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          Facebook хаяг: Эрдэнэт Зууч
        </a>
      </div>
    </div>
      {/* Pass handleMenuClick to Header */}
      {/* <Header  /> */}

      {/* {selectedComponent === "apartment" && <Apartment />}
      {selectedComponent === "rent_apartment" && <RentApartment />} */}
      {/* {selectedComponent === "rent_house" && <RentHouse />}
      {selectedComponent === "rent_car" && <RentCar />} */}
    </div>
  );
}
