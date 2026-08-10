import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">


        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">


          {/* Brand */}

          <div>

            <Image
              src="/images/logo.png"
              alt="Beauty & The Mountains"
              width={180}
              height={60}
            />


            <p className="mt-5 text-sm leading-7 text-white/60">
              Premium fashion, luxury watches, and accessories
              designed to elevate your everyday style.
            </p>

          </div>




          {/* Shop */}
<div>
  <h3 className="mb-5 font-semibold">
    Shop
  </h3>

  <ul className="space-y-3 text-sm text-white/60">

    <li>
      <a
        href="https://www.beautyandthemountains.store/collections/the-womens-edit"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        The Women's Edit
      </a>
    </li>

    <li>
      <a
        href="https://www.beautyandthemountains.store/collections/the-mens-edit"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        The Men's Edit
      </a>
    </li>

    <li>
      <a
        href="https://www.beautyandthemountains.store/collections/womens-shoes"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        Women's Shoes
      </a>
    </li>

    <li>
      <a
        href="https://www.beautyandthemountains.store/collections/mens-shoes"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        Men's Shoes
      </a>
    </li>

    <li>
      <a
        href="https://www.beautyandthemountains.store/collections/watches-jewellery"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        Watches & Jewellery
      </a>
    </li>

    <li>
      <a
        href="https://www.beautyandthemountains.store/collections/bags-backpacks"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        Bags & Backpacks
      </a>
    </li>

    <li>
      <a
        href="https://www.beautyandthemountains.store/collections/sunglasses"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        Sunglasses
      </a>
    </li>

    <li>
      <a
        href="https://www.beautyandthemountains.store/collections/belts"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        Belts
      </a>
    </li>

  </ul>
</div>



          {/* Customer Care */}
<div>
  <h3 className="mb-5 font-semibold">
    Customer Care
  </h3>

  <ul className="space-y-3 text-sm text-white/60">

    <li>
      <a
        href="https://www.beautyandthemountains.store/policies/shipping-policy"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        Shipping
      </a>
    </li>

    <li>
      <a
        href="https://www.beautyandthemountains.store/policies/refund-policy"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        Returns
      </a>
    </li>

    <li>
      <a
        href="https://www.beautyandthemountains.store/pages/contact"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        Contact
      </a>
    </li>

    <li>
      <a
        href="https://www.beautyandthemountains.store/pages/faq"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        FAQ
      </a>
    </li>

  </ul>
</div>



          {/* Social */}
<div>
  <h3 className="mb-5 font-semibold">
    Follow Us
  </h3>

  <div className="flex items-center gap-4">

    {/* Instagram */}
    <a
      href="https://www.instagram.com/beautyandthemountainsstore1/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/profile.php?id=61591561839648"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.75V3.94c-.3-.04-1.33-.13-2.53-.13-2.5 0-4.22 1.53-4.22 4.34V10H7.25v3H10v8h3.5Z" />
      </svg>
    </a>

    {/* TikTok */}
    <a
      href="https://www.tiktok.com/@shopbeautyandmountains"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M16.7 3c.3 1.8 1.3 3 3.1 3.2v3.1c-1.7-.1-3.1-.6-4.3-1.5v6.7c0 3.4-2.5 5.5-5.5 5.5A5.5 5.5 0 1 1 12 9.3v3.2a2.3 2.3 0 1 0 .3 2v-11.5h4.4Z" />
      </svg>
    </a>

  </div>
</div>


        </div>




        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/50 sm:mt-16">

          <p>
            © 2026 Beauty &amp; The Mountains. All rights reserved.
          </p>

        </div>


      </div>

    </footer>
  );
}