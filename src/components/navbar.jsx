"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 py-5 w-full z-50 bg-background transition-all duration-500 ${
        isScrolled ? "py-2.5 shadow-md" : "py-5"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/assets/images/logos/logo.png"
              alt="logo"
              width={160}
              height={50}
              className="lg:max-w-[160px] max-w-[120px]"
            />
          </Link>
          {/* Toggle Button */}
          <button
            className="text-3xl mt-1 cursor-pointer block lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
          {/* Navigation Menu */}
          <nav
            className={`lg:bg-secondary bg-black-300 lg:rounded-[50px] lg:static absolute left-0 top-16 z-50 w-full lg:w-auto transition-all duration-500 ease-linear ${
              isMenuOpen
                ? "max-h-[300px] opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            } lg:max-h-full lg:opacity-100 lg:visible`}
          >
            <ul className="flex lg:flex-row flex-col">
              {[
                { href: "#how", label: "How It Works" },
                { href: "#services", label: "Services" },
                { href: "#projects", label: "Projects" },
                { href: "#pricing", label: "Pricing" },
                { href: "#faqs", label: "Faqs" },
                { href: "#book", label: "Book Now" },
              ].map((item, index) => (
                <li key={index} className="border-b border-b-black-100 lg:border-b-0">
                  <Link
                    href={item.href}
                    className="text-[#dedede] font-medium font-bricolage px-5 py-2.5 inline-block hover:text-primary transition-all duration-500"
                    onClick={() => setIsMenuOpen(false)} 
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
