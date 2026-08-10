import Image from "next/image";

const shopLinks = [
  {
    label: "The Women's Edit",
    href: "https://www.beautyandthemountains.store/collections/the-womens-edit",
  },
  {
    label: "The Men's Edit",
    href: "https://www.beautyandthemountains.store/collections/the-mens-edit",
  },
  {
    label: "Women's Shoes",
    href: "https://www.beautyandthemountains.store/collections/womens-shoes",
  },
  {
    label: "Men's Shoes",
    href: "https://www.beautyandthemountains.store/collections/mens-shoes",
  },
  {
    label: "Watches & Jewellery",
    href: "https://www.beautyandthemountains.store/collections/watches-jewellery",
  },
  {
    label: "Bags & Backpacks",
    href: "https://www.beautyandthemountains.store/collections/bags-backpacks",
  },
  {
    label: "Sunglasses",
    href: "https://www.beautyandthemountains.store/collections/sunglasses",
  },
  {
    label: "Belts",
    href: "https://www.beautyandthemountains.store/collections/belts",
  },
];

const customerCareLinks = [
  {
    label: "Shipping",
    href: "https://www.beautyandthemountains.store/policies/shipping-policy",
  },
  {
    label: "Returns",
    href: "https://www.beautyandthemountains.store/policies/refund-policy",
  },
  {
    label: "Contact",
    href: "https://www.beautyandthemountains.store/pages/contact",
  },
  {
    label: "FAQ",
    href: "https://www.beautyandthemountains.store/pages/faq",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
        {/* Main Footer */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Beauty & The Mountains"
              width={180}
              height={60}
              className="h-auto w-[150px] sm:w-[170px]"
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Premium fashion, luxury watches, and accessories designed to
              elevate your everyday style.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-white">
              Shop
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-white">
              Customer Care
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {customerCareLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-white">
              Follow Us
            </h3>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
              Follow Beauty &amp; The Mountains for new arrivals, inspiration,
              and exclusive updates.
            </p>

            <div className="mt-6 flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/beautyandthemountainsstore1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:bg-white hover:text-black"
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
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61591561839648"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:bg-white hover:text-black"
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:bg-white hover:text-black"
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

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-7 sm:mt-16 sm:pt-8">
          <p className="text-center text-xs text-white/40 sm:text-sm">
            © 2026 Beauty &amp; The Mountains. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}