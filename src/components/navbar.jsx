"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FreelanxxLogoHeader from "../../public/assets/images/freelanx_common_assets/logo_header.png";

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
      className={`fixed top-0 py-5 w-full z-50 bg-transparent transition-all duration-500 ${isScrolled ? "py-2.5 shadow-md bg-gradient-to-b from-[#00455F] to-[#00A5E3]" : "py-5"
        }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={FreelanxxLogoHeader}
              alt="logo"
              width={160}
              height={50}
              className="lg:max-w-[160px] max-w-[120px]"
              priority
            />
          </Link>
          <button
            className="text-3xl mt-1 cursor-pointer block lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className= {isMenuOpen ? "ri-close-line text-white" : "ri-menu-line text-white"}></i>
          </button>
          <nav
            className={`lg:bg-[secondary] bg-white lg:rounded-[50px] shadow-xl lg:static absolute left-0 top-16 z-50 w-full lg:w-auto transition-all duration-500 ease-linear ${isMenuOpen
                ? "max-h-[300px] opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
              } lg:max-h-full lg:opacity-100 lg:visible`}
          >
            <ul className="flex lg:flex-row flex-col p-1">
              {[
                { href: "#how", label: "Beranda" },
                { href: "#services", label: "Layanan" },
                { href: "#projects", label: "Portfolio" },
                { href: "#pricing", label: "Harga" },
                { href: "#faqs", label: "FAQs" },
                { href: "#book", label: "Konsultasi Sekarang", special: true },
              ].map((item, index) => (
                <li key={index} className="border-b border-b-black-100 lg:border-b-0">
                  <Link
                    href={item.href}
                    className={`px-5 py-2.5 text-sm lg:px-5 lg:py-2.5 lg:text-base inline-block font-medium font-bricolage transition-all duration-500 ${item.special
                      ? "bg-orange-500 text-white rounded-full hover:bg-orange-600 shadow-md"
                      : "text-black hover:text-primary"
                  }`}
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
