"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", path: "/", title: "About me" },
  { name: "Resume", path: "/resume", title: "My Resume" },
  { name: "Showcase", path: "/showcase", title: "My recent works" },
];

const getTitle = (path: string) => {
  for (const navLink of navLinks) {
    if (path === navLink.path) {
      return navLink.title;
    }
  }
  return "404";
}

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="rounded-lg shadow-lg mb-2 w-full bg-gray-900 border-b border-blue-600 shadow-md hidden md:block">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h2 className="text-2xl font-bold text-blue-400">{getTitle(pathname)}</h2>
        {/* Desktop Menu */}
        <ul className="flex space-x-6">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className={`px-4 py-2 rounded-md transition border border-transparent ${pathname === path
                  ? "border-blue-600 text-blue-400 font-semibold"
                  : "text-gray-300 hover:border-blue-600 hover:text-blue-400"
                  }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
