'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"; // Next 13+

// navbar
export default function Navbar() {
    const pathname = usePathname();
    console.log(pathname)
    return (
      <nav className="flex justify-center items-center space-x-8 py-6 mb-8 animate-boom-nav">
        <Link
          href="/"
          className={pathname === "/" ? "text-primary-main text-base" : "text-primary-gray-700 text-base"}
        >
          About
        </Link>
        <div className="w-px h-[10px] bg-gray-200" />
        <Link
          href="/portfolio"
          className={pathname === "/portfolio" ? "text-primary-main text-base" : "text-primary-gray-700 text-base"}
        >
          Portfolio
        </Link>
        <div className="w-px h-[10px] bg-gray-200" />
        <Link
          href="/contact"
          className={pathname === "/contact" ? "text-primary-main text-base" : "text-primary-gray-700 text-base"}
        >
          Contact
        </Link>
      </nav>
    );
  }