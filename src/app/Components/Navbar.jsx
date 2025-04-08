"use client";
import { MessageSquare } from "lucide-react";
import React, { useState } from "react";

function Navbar() {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About us", link: "/about" },
    { name: "Blog", link: "/blog" },
    {
      name: "Extra Salespage",
      link: "/salepage",
    },
  ];

  // State to toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-custom">
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-2 py-4 bg-foreground text-background shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="bg-primary rounded-full p-2">
            <MessageSquare
              strokeWidth={3}
              className="w-6 h-6 text-foreground"
            />
          </span>
          <span className="text-xl font-bold">Happy Coaching</span>
        </div>

        {/* Hamburger Menu (Visible on Mobile) */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Nav Links and Button  */}
        <div className="hidden md:flex items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex flex-row gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.link}
                className="text-background hover:text-primary transition duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Button (for large screen) */}
          <button className="bg-primary  px-4 py-2 rounded-md text-foreground hover:bg-primary-secondary  transition duration-300">
            Get your free guide now
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible only on mobile) */}
      {isOpen && (
        <div className="md:hidden bg-foreground shadow-md p-4">
          <nav className="flex flex-col items-center gap-4  p-4 text-background">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.link}
                className="hover:text-primary hover:b- transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* Button */}
          <div className="flex justify-center mt-4">
            <button className="bg-primary  px-4 py-2 rounded-md hover:bg-primary-secondary  transition duration-300">
              Get your free guide now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
