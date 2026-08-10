import CollectionHero from "@/components/collections/CollectionHero";
import CollectionToolbar from "@/components/collections/CollectionToolbar";
import CollectionGrid from "@/components/collections/CollectionGrid";

export default function MenPage() {
  return (
    <>
      <CollectionHero
        title="Men's Collection"
        subtitle="Classic and modern fashion designed for today's gentleman."
        image="/images/collection-men.jpg"
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