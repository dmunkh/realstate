"use client"; // Mark this file as a client component

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const items = [
  {
    id: 1,
    images: ["/img/tanan_01.jpg", "/img/tanan_02.jpg", "/img/tanan_03.jpg"],
    title: "Item One",
    price: "$100",
    description: "This is a description of item one.",
  },
  {
    id: 2,
    images: ["/img/tanan_01.jpg", "/img/tanan_02.jpg", "/img/tanan_03.jpg"],
    title: "Item Two",
    price: "$200",
    description: "This is a description of item two.",
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  // Find the product based on the ID
  const product = items.find((item) => item.id === parseInt(id || "", 10));

  // If the product is not found, show an error message
  if (!product) {
    return <div>Product not found!</div>;
  }

  // State to manage the currently selected image
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
      <div className="flex gap-8">
        {/* Left - Main Image and Image List */}
        <div>
          {/* Main Image */}
          <Image
            src={selectedImage}
            alt={product.title}
            width={400}
            height={300}
            className="object-cover rounded-md mb-4"
          />

          {/* Image List */}
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)} // Set the selected image on click
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
          <p className="text-blue-600 text-xl font-semibold mb-4">
            {product.price}
          </p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
