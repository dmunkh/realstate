import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our mission and values on this page.</p>

      {/* Link to product page */}
      <Link href="/about/product/1">Go to Product 1</Link>
    </div>
  );
};

export default AboutPage;