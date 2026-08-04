import Image from "next/image";
import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="bg-white py-16 sm:py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">


        {/* Text */}

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
            Our Story
          </p>


          <h2 className="mt-4 text-3xl font-semibold text-black sm:text-4xl">
            Crafted for Confidence
          </h2>


          <p className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            At Beauty &amp; The Mountains, we believe fashion is more than what
            you wear—it is how you express yourself. Every collection is
            thoughtfully selected to combine elegance, quality, and timeless
            style for modern living.
          </p>


          <Link
            href="#"
            className="mt-7 inline-flex rounded-full bg-black px-6 py-3 text-sm text-white transition hover:bg-gray-800 sm:mt-8"
          >
            Discover Our Story
          </Link>

        </div>



        {/* Image */}

        <div className="overflow-hidden rounded-3xl">

          <Image
            src="/images/brand-story.jpg"
            alt="Beauty & The Mountains"
            width={700}
            height={800}
            className="h-[420px] w-full object-cover sm:h-[550px]"
          />

        </div>


      </div>

    </section>
  );
}