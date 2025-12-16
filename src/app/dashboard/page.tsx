'use client';

import { getToken } from "@/lib/auth";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  sub: number;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

export default function DashboardHome() {
  const token = getToken();
  let username = "Guest";

  if (token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token); // ✅ now works
      if (decoded.username) username = decoded.username;
    } catch (e) {
      console.error("Token decoding failed:", e);
    }
  }

  return (
    <div className="min-h-screen p-6 bg-green-100 text-green-900">
      <h2 className="text-2xl font-semibold mb-4">Welcome, {username}</h2>
      {token && (
        <div>
          <p className="mb-2">Your Bearer Token:</p>
          <pre className="p-2 bg-green-200 text-xs break-all">{token}</pre>
        </div>
      )}
    </div>
  );
}
