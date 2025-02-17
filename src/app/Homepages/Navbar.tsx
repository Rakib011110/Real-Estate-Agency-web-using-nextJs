"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto h-16 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center bg-white w-10 h-10"></div>
        <ul className="hidden  md:flex space-x-6 text-white text-lg">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#properties">Properties</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="flex items-center">
          <Button className="hidden  md:block bg-[#FF5A3C]  text-white px-4 py-2">
            <div className="flex">
              <p>ES</p>{" "}
              <p className="text-2xl">
                <ChevronDown className="text-[#E7272D]  font-semibold" />
              </p>
            </div>
          </Button>

          {isOpen ? (
            <X
              className="text-white md:hidden ml-4 cursor-pointer"
              size={28}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Menu
              className="text-white md:hidden ml-4 cursor-pointer"
              size={28}
              onClick={() => setIsOpen(true)}
            />
          )}

          <div className="md:hidden flex mx-3 font- mt-1 text-xl text-white">
            <p>ES</p>{" "}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-6 md:hidden">
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#properties" onClick={() => setIsOpen(false)}>
            Properties
          </a>
          <a href="#blog" onClick={() => setIsOpen(false)}>
            Blog
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
