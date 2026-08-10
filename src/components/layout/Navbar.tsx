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
            alt="Beauty and The Mountains"
            width={180}
            height={50}
            className="h-auto w-[150px] object-contain sm:w-[180px]"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/women"
            className="transition hover:opacity-70"
          >
            Women
          </a>

          <a
            href="/men"
            className="transition hover:opacity-70"
          >
            Men
          </a>

          <a
            href="/watches"
            className="transition hover:opacity-70"
          >
            Watches &amp; Jewellery
          </a>

          <a
            href="/bags&backpacks"
            className="transition hover:opacity-70"
          >
            Bags &amp; Backpacks
          </a>
        </nav>

        {/* Desktop Button */}
        <a
          href="https://www.beautyandthemountains.store/collections/all"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90 md:block"
        >
          Shop Now
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-black/10 bg-[#F5F5DC]/95 px-6 py-6 backdrop-blur md:hidden">
          <nav className="flex flex-col gap-5">
            <a
              href="/women"
              onClick={() => setOpen(false)}
              className="transition hover:opacity-70"
            >
              Women
            </a>

            <a
              href="/men"
              onClick={() => setOpen(false)}
              className="transition hover:opacity-70"
            >
              Men
            </a>

            <a
              href="/watches"
              onClick={() => setOpen(false)}
              className="transition hover:opacity-70"
            >
              Watches &amp; Jewellery
            </a>

            <a
              href="/bags&backpacks"
              onClick={() => setOpen(false)}
              className="transition hover:opacity-70"
            >
              Bags &amp; Backpacks
            </a>

            <a
              href="https://www.beautyandthemountains.store/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-black px-6 py-3 text-center text-white transition hover:opacity-90"
            >
              Shop Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}