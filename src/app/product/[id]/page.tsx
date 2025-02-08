"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react"; // Import back icon
import moment from "moment";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekdays = ["Да", "Мя", "Лх", "Пү", "Ба", "Бя", "Ня"];

const items = [
  {
    id: 1,
    images: ["/img/apartment.webp"],
    title: "Орон сууц",
    price: ".",
    description: "This is a description of item one.",
  },
  {
    id: 2,
    images: ["/img/apartment.webp"],
    title: "Орон сууц",
    price: ".",
    description: "This is a description of item two.",
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
const [currentDate, setCurrentDate] = useState(moment()); // Current month & year
  const [selectedDate, setSelectedDate] = useState(moment()); // Selected date
  const productId = params.id;

  const products = {
    id: productId,
    title: "Awesome Product",
    description: "This is an amazing product!",
    image: "/img/product.jpg",
  };

  const fullUrl = `https://www.erdenetzuuch.online/product/2`;
  
  // Find the product based on the ID
  const product = items.find((item) => item.id === parseInt(id || "", 10));
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

    const day = startDate.clone();
    while (day.isBefore(endDate, "day")) {
      days.push(day.clone());
      day.add(1, "day");
    }

    return days;
  };
  // If the product is not found, show an error message
  if (!product) {
    return <div>Product not found!</div>;
  }

  // State to manage the currently selected image
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <> <Head>
    <title>{product.title}</title>
    <meta property="og:title" content={products.title} />
    <meta property="og:description" content={products.description} />
    <meta property="og:image" content="https://www.erdenetzuuch.online/img/tanan_01.jpg" />
    <meta property="og:image:secure_url" content="https://www.erdenetzuuch.online/img/tanan_01.jpg" />
    <meta property="og:url" content={fullUrl} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
    <div className="max-w-[1200px] mx-auto px-4 py-8 relative">
      {/* Back Icon */}
      {/* <div className="absolute top-4 left-4">
        <Link href="/" className="text-gray-700 hover:text-gray-900 transition">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div> */}

      <h1 className="text-xl font-bold mb-6 mt-4">{product.title}</h1>

      <div className="flex gap-8">
        {/* Left - Main Image and Image List */}
        <div>
          <Image
            src={selectedImage}
            alt={product.title}
            width={800}
            height={600}
            className="object-cover rounded-md mb-4"
          />
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`w-20 h-20 border rounded-md overflow-hidden cursor-pointer ${
                  selectedImage === image ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right - Product Details */}
        <div>
        <div className="w-[280px] mx-auto bg-white p-4 rounded-lg overflow-x-auto shadow-lg">
     
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
          <p className="text-blue-600 text-xl font-semibold mb-4">
            {product.price}
          </p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
    </>
  );
}
