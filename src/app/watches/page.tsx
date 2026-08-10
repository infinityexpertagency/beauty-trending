import CollectionHero from "@/components/collections/CollectionHero";
import CollectionToolbar from "@/components/collections/CollectionToolbar";
import CollectionGrid from "@/components/collections/CollectionGrid";

export default function WatchesPage() {
  return (
    <>
      <CollectionHero
        title="Luxury Watches"
        subtitle="Timeless craftsmanship for every occasion."
        image="/images/product-1.jpg"
      />

      <section className="bg-[#F5F5DC]">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <CollectionToolbar />
          <CollectionGrid />
        </div>
      </section>
    </>
  );
}