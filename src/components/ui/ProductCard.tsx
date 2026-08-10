"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  image: string;
  category: string;
  title: string;
  price: string;
  compareAtPrice: string;
  badge: string;
  badgeColor: string;
  shopifyUrl: string;
};

const badgeStyles = {
  red: "bg-red-600 text-white",
  black: "bg-black text-white",
  gold: "bg-yellow-500 text-black",
  green: "bg-green-700 text-white",
};

export default function ProductCard({
  image,
  category,
  title,
  price,
  compareAtPrice,
  badge,
  badgeColor,
  shopifyUrl
}: ProductCardProps) {
  return (
    <motion.div
      className="group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-[#F5F5DC]">
        <Image
          src={image}
          alt={title}
          width={500}
          height={600}
          className="h-[350px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span
          className={`absolute left-4 top-4 rounded-full px-4 py-2 text-xs font-semibold ${
            badgeStyles[badgeColor as keyof typeof badgeStyles]
          }`}
        >
          {badge}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          {category}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-black">
          {title}
        </h3>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-lg font-bold text-black">
            {price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            {compareAtPrice}
          </span>
        </div>

        <a
  href={shopifyUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-block text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
>
  View Product →
</a>
      </div>
    </motion.div>
  );
}