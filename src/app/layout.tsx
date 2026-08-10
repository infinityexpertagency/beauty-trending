import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.beautyandthemountains.store"),

  title: {
    default: "Beauty & The Mountains | Premium Fashion & Accessories",
    template: "%s | Beauty & The Mountains",
  },

  description:
    "Discover premium fashion, luxury watches, shoes, bags, and accessories at Beauty & The Mountains.",

  alternates: {
    canonical: "https://www.beautyandthemountains.store",
  },

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: "Beauty & The Mountains | Premium Fashion & Accessories",
    description:
      "Discover premium fashion, luxury watches, shoes, bags, and accessories at Beauty & The Mountains.",
    url: "https://www.beautyandthemountains.store",
    siteName: "Beauty & The Mountains",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Beauty & The Mountains - Premium Fashion & Accessories",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Beauty & The Mountains | Premium Fashion & Accessories",
    description:
      "Discover premium fashion, luxury watches, shoes, bags, and accessories at Beauty & The Mountains.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} bg-[#F5F5DC] text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}