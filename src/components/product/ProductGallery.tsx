"use client";

import Image from "next/image";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductGallery({ product }: Props) {
  return (
    <div className="w-full">
      <div className="group overflow-hidden rounded-3xl bg-white shadow-sm">
        <Image
          src={product.image}
          alt={product.title}
          width={700}
          height={875}
          priority
          className="aspect-[4/5] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}