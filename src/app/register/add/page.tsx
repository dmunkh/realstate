"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react"; // Import back icon

export default function AddUserPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Registered:", { name, email });

    // Redirect to /register after submitting
    router.push("/register");
  };

  return (
    <div className="flex items-top justify-center min-h-screen pt-1">
      <div className="w-full max-w-[1200px] bg-white p-8 rounded-lg shadow-md relative">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()} 
          className="absolute top-4 left-4 flex items-center text-gray-700 hover:text-blue-500 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add User
        </h1>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-600 font-medium">Name</label>
            <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        className="w-full border p-2"
        placeholder="Enter text here..."
      />
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
          >
            Register User
          </button>
        </form>
      </div>
    </div>
  );
}
