"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Handler to toggle the mobile menu
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close the mobile menu
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="ExploreX Travels Logo" width={50} height={50} priority />
          <span className="ml-2 text-2xl font-bold text-white">ExploreX Travels</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/destinations" text="Destinations" />
          <NavItem href="/contact" text="Contact" />
        </div>

        {/* Enquiry Button */}
        <Link href="/enquiry" className="hidden md:block">
          <span className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-500 transition-all duration-300">
            Enquiry Now
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-t shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            <NavItem href="/" text="Home" onClick={closeMenu} />
            <NavItem href="/about" text="About" onClick={closeMenu} />
            <NavItem href="/destinations" text="Destinations" onClick={closeMenu} />
            <NavItem href="/contact" text="Contact" onClick={closeMenu} />
            <Link href="/enquiry" onClick={closeMenu}>
              <span className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition">
                Enquiry Now
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable NavItem component
interface NavItemProps {
  href: string;
  text: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, text, onClick }) => (
  <Link href={href} onClick={onClick} className="text-white hover:text-gray-200 transition">
    {text}
  </Link>
);

export default Navbar;
//update name