import Image from "next/image";
import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Our Story
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-black">
            Crafted for Confidence
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Beauty &amp; The Mountains, we believe fashion is more than what
            you wear—it is how you express yourself. Every collection is
            thoughtfully selected to combine elegance, quality, and timeless
            style for modern living.
          </p>

          <Link
            href="#"
            className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-white transition hover:bg-gray-800"
          >
            Discover Our Story
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/images/brand-story.jpg"
            alt="Beauty & The Mountains"
            width={700}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}