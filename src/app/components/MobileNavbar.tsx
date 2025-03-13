"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Mail } from "lucide-react"; // Using Lucide Icons

const navLinks = [
  { name: "About", path: "/", icon: <Home size={24} /> },
  { name: "Resume", path: "/resume", icon: <User size={24} /> },
  { name: "Showcase", path: "/showcase", icon: <Briefcase size={24} /> },
  { name: "Contact", path: "/#contact", icon: <Mail size={24} /> }
];

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-gray-900 border-t border-blue-600 shadow-md">
      <ul className="flex justify-around py-3">
        {navLinks.map(({ name, path, icon }) => (
          <li key={name}>
            <Link
              href={path}
              className={`flex flex-col items-center text-gray-300 hover:text-blue-400 transition ${
                pathname === path ? "text-blue-400" : ""
              }`}
            >
              {icon}
              <span className="text-sm">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
