import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  const items = [
    {
      id: 1,
      image: "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
      title: "Item One",
      price: "$100",
      description: "This is a description of item one.",
    },
    {
      id: 2,
      image: "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
      title: "Item Two",
      price: "$200",
      description: "This is a description of item two.",
    },
    {
      id: 3,
      image: "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
      title: "Item Three",
      price: "$300",
      description: "This is a description of item three.",
    },
    {
      id: 4,
      image: "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
      title: "Item Four",
      price: "$400",
      description: "This is a description of item four.",
    },
    {
      id: 5,
      image: "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
      title: "Item Five",
      price: "$500",
      description: "This is a description of item five.",
    },
    {
      id: 6,
      image: "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
      title: "Item Six",
      price: "$600",
      description: "This is a description of item six.",
    },
    {
      id: 7,
      image: "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
      title: "Item Seven",
      price: "$700",
      description: "This is a description of item seven.",
    },
    {
      id: 8,
      image: "/img/01JJ8YSQP6RZ96NFJAT6CCNSN8.webp",
      title: "Item Eight",
      price: "$800",
      description: "This is a description of item eight.",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-left mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition group"
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
            <p className="text-gray-600 mt-2">{item.description}</p>
            {/* Link to the product detail page */}
            <Link
              href={`/about/product?id=1`}
              
              className="text-blue-500 mt-4 block hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
