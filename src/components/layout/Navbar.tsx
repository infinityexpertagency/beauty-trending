import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F5F5DC]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Beauty & The Mountains"
            width={170}
            height={55}
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          <a href="#" className="hover:opacity-70 transition">
            Women
          </a>

          <a href="#" className="hover:opacity-70 transition">
            Men
          </a>

          <a href="#" className="hover:opacity-70 transition">
            Watches
          </a>

          <a href="#" className="hover:opacity-70 transition">
            Accessories
          </a>
        </nav>

        <button className="rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90">
          Shop Now
        </button>

      </div>
    </header>
  );
}