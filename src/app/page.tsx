"use client"; // Required for hooks like useState

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import Apartment from "../app/components/new_apartment"
// import RentApartment from "../app/components/rent_aparment"
// import { useRouter } from "next/navigation";
// import Header from "../app/context/Header"

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
      {/* Pass handleMenuClick to Header */}
      {/* <Header  /> */}

      {/* {selectedComponent === "apartment" && <Apartment />}
      {selectedComponent === "rent_apartment" && <RentApartment />} */}
      {/* {selectedComponent === "rent_house" && <RentHouse />}
      {selectedComponent === "rent_car" && <RentCar />} */}
    </div>
  );
}
