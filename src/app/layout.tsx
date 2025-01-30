import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { UserProvider } from "../app/context/UserContext";
import "./globals.css";
// import { useUser } from "../app/context/UserContext";

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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header Section */}
        <header className="bg-gray-100 shadow">
          {/* Full-Width Background */}
          <div className="w-full bg-gray-200">
            {/* Centered Header Container */}
            <div className="mx-auto max-w-[1200px] px-4 pt-3">
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b-4 border-black-600">
                {/* Left Section - Logo / Title */}
                <div className="text-lg font-bold text-gray-700">Real Estate</div>

                {/* Right - Login Button */}
                <div>
             
                  <Link
                    href="/login"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition"
                  >
                    Login
                  </Link>
                </div>
              </div>

              {/* Navigation Menu - Scrollable Icons */}
              <div className="flex overflow-x-auto space-x-4 p-4">
                {/* New Apartment */}
                <Link href="/" className="menu-link text-gray-700 hover:text-blue-500">
                  <div className="flex-shrink-0 w-24 p-1 border rounded-lg flex flex-col items-center">
                    <div className="mb-2">
                      <Image
                        src="/img/menu/apartment.png"
                        alt="New Apartment"
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-center text-xs text-gray-700">Шинэ орон сууц</div>
                  </div>
                </Link>

                {/* Rent Apartment */}
                <Link href="/rent-apartment" className="menu-link text-gray-700 hover:text-blue-500">
                  <div className="flex-shrink-0 w-24 p-1 border rounded-lg flex flex-col items-center">
                    <div className="mb-2">
                      <Image
                        src="/img/menu/rent.png"
                        alt="Rent Apartment"
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-center text-xs text-gray-700">Хоногоор орон сууц түрээс</div>
                  </div>
                </Link>

                {/* Rent House */}
                <Link href="/rent-house" className="menu-link text-gray-700 hover:text-blue-500">
                  <div className="flex-shrink-0 w-28 p-1 border rounded-lg flex flex-col items-center">
                    <div className="mb-2">
                      <Image
                        src="/img/menu/rent1.png"
                        alt="Rent House"
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-center text-xs text-gray-700">Хашаа байшин түрээс</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content - Wrapped in UserProvider for Global State */}
        <main className="mx-auto max-w-[1200px] px-4">
          <UserProvider>{children}</UserProvider>
        </main>
      </body>
    </html>
  );
}
