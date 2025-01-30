"use client";

import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();
  const { user } = useUser();
  console.log(user);

  // Dummy user list (Replace with API later)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Top Bar with Add Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Registered Users </h1>
        <button
        onClick={() => router.push("/register/add")}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        + Add
      </button>
      </div>

      {/* User List */}
      <div className="bg-white p-4 rounded-lg shadow">
        <ul>
          {users.map((user) => (
            <li key={user.id} className="py-2 border-b last:border-b-0">
              <span className="font-semibold">{user.name}</span> - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
