"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const currentPath = usePathname();
  return (
    <nav className="flex gap-4 p-4 max-w-screen-xl flex-wrap items-center bg-black bg-opacity-50 backdrop-blur-lg sticky top-0 w-full mx-auto">
      <Link
        className={`${currentPath === "/" ? "underline" : undefined}`}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={`${currentPath === "/blogs" ? "underline" : undefined}`}
        href={"/blogs"}
      >
        Blogs
      </Link>
      <Link
        className={`${currentPath === "/about" ? "underline" : undefined}`}
        href={"/about"}
      >
        About
      </Link>
    </nav>
  );
}

export default Navbar;
