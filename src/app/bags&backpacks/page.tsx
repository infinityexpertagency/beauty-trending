import CollectionHero from "@/components/collections/CollectionHero";
import CollectionToolbar from "@/components/collections/CollectionToolbar";
import CollectionGrid from "@/components/collections/CollectionGrid";

export default function AccessoriesPage() {
  return (
    <>
      <CollectionHero
        title="Bags & Backpacks"
        subtitle="Complete your look with carefully curated accessories."
        image="/images/bags&backpacks.jpg"
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