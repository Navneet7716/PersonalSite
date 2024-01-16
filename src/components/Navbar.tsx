"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const currentPath = usePathname();
  return (
    <nav className="flex z-10 w-screen gap-4 p-4 justify-center flex-wrap items-center bg-white  dark:bg-black bg-opacity-50 backdrop-blur-lg sticky top-0 mx-auto">
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
