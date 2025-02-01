import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { UserProvider } from "../app/context/UserContext";
import Header from "../app/components/Header"; // Import Header
import "./globals.css";

// Import Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Page Metadata
export const metadata: Metadata = {
  title: "Real Estate App",
  description: "Find and rent real estate properties easily.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   // Get user from context
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
   
     

        {/* Main Content */}
        <main className="mx-auto max-w-[1200px] px-4">
          <UserProvider>   <Header /> {/* ✅ Now the Header runs on the client */}{children}</UserProvider>
        </main>

        {/* Footer Section */}
        <footer className="bg-red-500 text-white py-8 mt-8">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Contact Us */}
              <div>
                <h1 className="text-lg  mb-2"> Холбоо барих:</h1>
                <p>Email: support@realestate.com</p>
                <p>Утас: 9559-0090</p>
                <p>Хаяг: 123 Real Estate St, City, Country</p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
                  <li><Link href="/about" className="hover:text-gray-400">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link></li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="https://facebook.com" target="_blank">
                    <Image src="/img/social/facebook.png" alt="Facebook" width={24} height={24} />
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    <Image src="/img/social/twitter.png" alt="Twitter" width={24} height={24} />
                  </Link>
                  <Link href="https://instagram.com" target="_blank">
                    <Image src="/img/social/instagram.png" alt="Instagram" width={24} height={24} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm mt-6 border-t border-gray- pt-4">
              © {new Date().getFullYear()} Орхон аймаг
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

// Reusable MenuItem Component
const MenuItem = ({ href, src, label }: { href: string; src: string; label: string }) => (
  <Link href={href} className="menu-link text-gray-700 hover:text-blue-500">
    <div className="flex-shrink-0 w-24 h-24 p-1 border rounded-lg flex flex-col items-center">
      <div className="mb-2">
        <Image src={src} alt={label} width={32} height={32} className="object-cover w-full h-full" />
      </div>
      <div className="text-center text-xs text-gray-700">{label}</div>
    </div>
  </Link>
);
