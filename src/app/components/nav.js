'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"; // Next 13+

// navbar
export default function Navbar() {
    const pathname = usePathname();
    console.log(pathname)
    return (
      <nav className="flex justify-center space-x-8 py-6">
        <Link
          href="/"
          className={pathname === "/" ? "text-primary-main font-bold" : "text-black hover:underline"}
        >
          About
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          href="/portfolio"
          className={pathname === "/portfolio" ? "text-primary-main font-bold" : "text-black hover:underline"}
        >
          Portfolio
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          href="/contact"
          className={pathname === "/contact" ? "text-primary-main font-bold" : "text-black hover:underline"}
        >
          Contact
        </Link>
      </nav>
    );
  }