"use client";
import { useUser } from "../context/UserContext"; // Fix context file name
import { useRouter } from "next/navigation";
import { useState } from "react";
import PhoneLogin from "../components/login_firebase";

export default function LoginPage() {
  const userContext = useUser(); // Ensure useUser is not null
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!userContext) {
    throw new Error("useUser must be used within a UserProvider");
  }

  const { setUser } = userContext; // Get setUser after checking userContext

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Fix: Ensure 'e' is passed correctly

    // Simulating API login (Replace with real API call)
    const fakeUser = { name: "Munkh", email };

    setUser(fakeUser); // Save user globally
    localStorage.setItem("user", JSON.stringify(fakeUser)); // Optional: Store in localStorage

    router.push("/register"); // Redirect after login
  };

  return (
    <div className="flex items-top justify-center pt-3">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Login
        </h2>
        <PhoneLogin />
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
