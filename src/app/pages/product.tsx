import { useRouter } from "next/router";
import Image from "next/image";

type Product = {
  image: string;
  title: string;
  price: string;
  description: string;
};

const products: { [key: string]: Product } = {
  "1": {
    image: "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
    title: "Item One",
    price: "$100",
    description: "This is a detailed description of item one.",
  },
  "2": {
    image: "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
    title: "Item Two",
    price: "$200",
    description: "This is a detailed description of item two.",
  },
  "3": {
    image: "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
    title: "Item Three",
    price: "$300",
    description: "This is a detailed description of item three.",
  },
  // Add more products as needed
};

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the product id from the URL

  if (typeof id !== "string" || !products[id]) {
    return <div>Product not found!</div>; // Display if product not found
  }

  const item = products[id]; // Retrieve the product based on the id

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
};

export default ProductDetailPage;
