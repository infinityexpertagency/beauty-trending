"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F5F5DC]/95 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Beauty & The Mountains"
            width={150}
            height={50}
            priority
            className="w-[130px] sm:w-[150px]"
          />
        </a>


        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          <a href="#" className="transition hover:opacity-70">
            Women
          </a>

          <a href="#" className="transition hover:opacity-70">
            Men
          </a>

          <a href="#" className="transition hover:opacity-70">
            Watches
          </a>

          <a href="#" className="transition hover:opacity-70">
            Accessories
          </a>
        </nav>


        {/* Desktop Button */}
        <button className="hidden rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90 md:block">
          Shop Now
        </button>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-black/10 bg-[#F5F5DC] px-6 py-6 md:hidden">

          <nav className="flex flex-col gap-5">

            <a href="#">
              Women
            </a>

            <a href="#">
              Men
            </a>

            <a href="#">
              Watches
            </a>

            <a href="#">
              Accessories
            </a>

            <button className="mt-3 rounded-full bg-black px-6 py-3 text-white">
              Shop Now
            </button>

          </nav>

        </div>
      )}

    </header>
  );
}