"use client";

import { useState } from "react";
import CollectionToolbar from "@/components/collections/CollectionToolbar";
import CollectionGrid from "@/components/collections/CollectionGrid";
import { products } from "@/data/products";

export default function WomenPage() {
  const categories = ["Women's Fashion", "Women's Shoes"];

  const womenProducts = products.filter((product) =>
    categories.includes(product.category)
  );

  const [sort, setSort] = useState("Featured");

  return (
    <section className="bg-[#F5F5DC]">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <CollectionToolbar
          productCount={womenProducts.length}
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