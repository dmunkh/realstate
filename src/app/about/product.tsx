import { useRouter } from "next/router";
import Image from "next/image";

const items = [
  {
    id: 1,
    image: "/img/tanan_01.jpg",
    title: "Item One",
    price: "$100",
    description: "This is a description of item one.",
  },
  {
    id: 2,
    image: "/img/tanan_01.jpg",
    title: "Item Two",
    price: "$200",
    description: "This is a description of item two.",
  },
];

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // Ensure `id` is a string
  if (!id || Array.isArray(id)) {
    return <div>Invalid product ID</div>;
  }

  // Convert `id` to a number and find the product
  const product = items.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
      <div className="flex gap-8">
        {/* Left - Product Image */}
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="object-cover rounded-md"
        />
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
