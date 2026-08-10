import CollectionHero from "@/components/collections/CollectionHero";
import CollectionToolbar from "@/components/collections/CollectionToolbar";
import CollectionGrid from "@/components/collections/CollectionGrid";

export default function WomenPage() {
  return (
    <>
      <CollectionHero
        title="Women's Collection"
        subtitle="Discover elegant fashion designed for every occasion."
        image="/images/collection-women.jpg"
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