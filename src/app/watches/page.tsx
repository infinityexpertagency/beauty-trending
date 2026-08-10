import CollectionToolbar from "@/components/collections/CollectionToolbar";
import CollectionGrid from "@/components/collections/CollectionGrid";
import { products } from "@/data/products";

export default function WatchesPage() {
  const categories = ["Watches & Jewellery"];

  const watchProducts = products.filter((product) =>
    categories.includes(product.category)
  );

  return (
    <section className="bg-[#F5F5DC]">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <CollectionToolbar productCount={watchProducts.length} />

        <CollectionGrid categories={categories} />
      </div>
    </section>
  );
}