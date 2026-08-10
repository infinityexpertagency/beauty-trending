"use client";

import Image from "next/image";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductGallery({ product }: Props) {
  return (
    <div>
      <Image
        src={product.image}
        alt={product.title}
        width={700}
        height={800}
        className="w-full rounded-3xl object-cover"
        priority
      />
    </div>
  );
}