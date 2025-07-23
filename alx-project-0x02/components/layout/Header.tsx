// components/layout/Header.tsx

import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex gap-6">
      <Link href="/home" className="hover:text-blue-400">
        Home
      </Link>
      <Link href="/about" className="hover:text-blue-400">
        About
      </Link>
      <Link href="/posts" className="hover:text-blue-400">
        Posts
      </Link>
    </header>
  );
}
