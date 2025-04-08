"use client";
import { MessageSquare } from "lucide-react";
import React, { useState } from "react";
import Button from "../lib/button";

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
    <div className="font-custom px-2">
      {/* Navbar Container */}
      <div className="flex items-center justify-between  py-4 bg-background text-foreground shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2 group">
          <span className="bg-primary rounded-full p-2">
            <MessageSquare
              strokeWidth={3}
              className="w-6 h-6 text-background group-hover:text-foreground transition duration-200"
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
                className="text-foreground hover:text-primary transition duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Button (for large screen) */}
          <button className="bg-primary  px-4 py-2 rounded-md text-background hover:bg-primary-secondary  transition duration-300">
            Get your free guide now
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible only on mobile) */}
      {isOpen && (
        <div className="md:hidden bg-background shadow-md p-4">
          <nav className="flex flex-col items-center gap-4  p-4 text-foreground">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.link}
                className="hover:text-primary  transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* Button */}
          <div className="flex justify-center mt-4">
            <Button></Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
