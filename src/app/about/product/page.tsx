"use client"; // Mark the component as a client component

import { useState } from "react"; // Import useState
import { useSearchParams } from "next/navigation"; // Use useSearchParams to access query params
import Image from "next/image";

type Product = {
  image: string;
  title: string;
  price: string;
  description: string;
  images: string[]; // Array to hold multiple images
};

const products: { [key: string]: Product } = {
  "1": {
    image: "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
    title: "Item One",
    price: "$100",
    description: "This is a detailed description of item one.",
    images: [
      "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
      "/img/tanan_01.jpg",
      "/img/03JJ8YSQP6RZ96NFJAT6CCNSN8.webp"
    ]
  },
  "2": {
    image: "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
    title: "Item Two",
    price: "$200",
    description: "This is a detailed description of item two.",
    images: [
      "/img/02JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
      "/img/03JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
      "/img/04JJ8YSQP6RZ96NFJAT6CCNSN8.webp"
    ]
  },
  "3": {
    image: "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
    title: "Item Three",
    price: "$300",
    description: "This is a detailed description of item three.",
    images: [
      "/img/03JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
      "/img/04JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
      "/img/05JJ8YSQP6RZ96NFJAT6CCNSN8.webp"
    ]
  }
};

const ProductDetailPage = () => {
  const searchParams = useSearchParams(); // Get the search parameters (query params)
  const id = searchParams.get("id"); // Get the product id from the query params

  // If no product id, return early
  if (!id || !products[id]) {
    return <div>Product not found!</div>;
  }

  const item = products[id]; // Retrieve the product based on the id
  
  // Unconditionally call useState before any logic/return
  const [selectedImage, setSelectedImage] = useState<string>(item.images[0]);

  // Handler to change the selected image
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{item.title}</h1>
      
      {/* Flex container for image and details */}
      <div className="flex gap-8">
        {/* Left side - Image Slider Section */}
        <div className="flex-1">
          {/* Large Image View */}
          <div className="flex justify-center mb-6">
            <Image
              src={selectedImage}
              alt="Selected Product Image"
              width={600}  // Fixed width for big image
              height={400} // Fixed height for big image
              className="object-cover rounded-md"
            />
          </div>

          {/* Thumbnail Image List */}
          <div className="flex gap-4 justify-center">
            {item.images.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer border-2 border-transparent hover:border-gray-300 rounded-md"
                onClick={() => handleImageClick(image)} // Change the displayed image when clicked
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={100} // Fixed width for thumbnail
                  height={66} // Fixed height for thumbnail
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Product Details Section */}
        <div className="flex-1">
          <p className="text-xl text-blue-600 font-semibold">{item.price}</p>
          <p className="text-gray-700 mt-4">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
