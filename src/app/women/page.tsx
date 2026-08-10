import CollectionToolbar from "@/components/collections/CollectionToolbar";
import CollectionGrid from "@/components/collections/CollectionGrid";
import { products } from "@/data/products";

export default function WomenPage() {
  const categories = ["Women's Fashion", "Women's Shoes"];

  const womenProducts = products.filter((product) =>
    categories.includes(product.category)
  );

  return (
    <section className="bg-[#F5F5DC]">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <CollectionToolbar productCount={womenProducts.length} />

        <CollectionGrid categories={categories} />
      </div>
    </section>
  );
}