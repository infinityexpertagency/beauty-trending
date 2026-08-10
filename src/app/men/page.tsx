"use client";

import { useState } from "react";
import CollectionToolbar from "@/components/collections/CollectionToolbar";
import CollectionGrid from "@/components/collections/CollectionGrid";
import { products } from "@/data/products";

export default function MenPage() {
  const categories = ["Men's Shoes"];
  const [sort, setSort] = useState("Featured");

  const productCount = products.filter((product) =>
    categories.includes(product.category)
  ).length;

  return (
    <section className="bg-[#F5F5DC]">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <CollectionToolbar
          productCount={productCount}
          onSortChange={setSort}
        />

        <CollectionGrid
          categories={categories}
          sort={sort}
        />
      </div>
    </section>
  );
}