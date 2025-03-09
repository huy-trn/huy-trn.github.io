"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-gray-900 border-b border-blue-600 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white border-b-2 border-blue-600 pb-1">
          Tran Quoc Huy
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className={`px-4 py-2 rounded-md border border-transparent transition ${
                  pathname === path
                    ? "border-blue-600 text-blue-400 font-semibold"
                    : "text-gray-300 hover:border-blue-600 hover:text-blue-400"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-2 py-3 border-t border-blue-600 bg-gray-800 shadow">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className={`block px-4 py-2 text-gray-300 border border-transparent rounded-md transition ${
                  pathname === path
                    ? "border-blue-600 text-blue-400 font-semibold"
                    : "hover:border-blue-600 hover:text-blue-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
