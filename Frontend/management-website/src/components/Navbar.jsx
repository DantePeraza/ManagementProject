"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleGalleryClick = (e) => {
    e.preventDefault();
  
    if (pathname === "/") {
      const gallerySection = document.getElementById("gallery");
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#gallery";
    }
  };
  

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        pathname === "/"
          ? isScrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
          : "bg-white shadow-md"
      }`}
    >
      <ul className="list-none flex flex-row space-x-4 w-full justify-around text-center items-center py-4">
        <li>
          <a
            href="/"
            className={`text-lg ${
              pathname === "/" && !isScrolled ? "text-white" : "text-black"
            }`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            onClick={handleGalleryClick}
            className={`text-lg ${
              pathname === "/" && !isScrolled ? "text-white" : "text-black"
            }`}
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="/rentals"
            className={`text-lg ${
              pathname === "/" && !isScrolled ? "text-white" : "text-black"
            }`}
          >
            For Rent
          </a>
        </li>
        <li>
          <a
            href="/residents"
            className={`text-lg ${
              pathname === "/" && !isScrolled ? "text-white" : "text-black"
            }`}
          >
            Residents
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={`text-lg ${
              pathname === "/" && !isScrolled ? "text-white" : "text-black"
            }`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className={`text-lg ${
              pathname === "/" && !isScrolled ? "text-white" : "text-black"
            }`}
          >
            Contact
          </a>
        </li>
        <li>
          <a href="/payment">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign in
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
