import { useRouter } from "next/router";
import Image from "next/image";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Ensure the id is a string or number (if available)
  const productId = typeof id === "string" ? parseInt(id) : undefined;

  // Define the product object with a numeric key signature
  const product: { [key: number]: { image: string; title: string; price: string; description: string } } = {
    1: {
      image: "/img/tanan_01.jpg",
      title: "Item One",
      price: "$100",
      description: "This is a detailed description of item one.",
    },
    2: {
      image: "/img/tanan_01.jpg",
      title: "Item Two",
      price: "$200",
      description: "This is a detailed description of item two.",
    },
    // Add more products as needed
  };

  // Use the productId if it's a valid number
  const item = product[productId!]; // We assert non-null here because productId is valid at this point

  if (!item) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{item.title}</h1>
      <div className="flex gap-6">
        {/* Image */}
        <div className="flex-1">
          <Image
            src={item.image}
            alt={item.title}
            width={500}
            height={300}
            className="object-cover rounded-md"
          />
        </div>
        {/* Details */}
        <div className="flex-1">
          <p className="text-xl text-blue-600 font-semibold">{item.price}</p>
          <p className="text-gray-700 mt-4">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
