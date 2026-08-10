"use client";

import { useState } from "react";
import CollectionToolbar from "@/components/collections/CollectionToolbar";
import CollectionGrid from "@/components/collections/CollectionGrid";
import { products } from "@/data/products";

export default function BagsAndBackpacksPage() {
  const categories = ["Bags & Backpacks"];

  const bagProducts = products.filter((product) =>
    categories.includes(product.category)
  );

  const [sort, setSort] = useState("Featured");

  return (
    <section className="bg-[#F5F5DC]">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <CollectionToolbar
          productCount={bagProducts.length}
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