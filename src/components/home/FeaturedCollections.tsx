import Image from "next/image";
import Link from "next/link";

export default function FeaturedCollections() {
  return (
    <section className="bg-[#F5F5DC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Collections
          </p>

          <h2 className="mt-3 text-4xl font-semibold">
            Shop By Collection
          </h2>

          <p className="mt-4 text-gray-600">
            Explore timeless pieces curated for every occasion.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Women's Collection */}
          <Link
            href="#"
            className="group relative overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/collection-women.jpg"
              alt="Women's Collection"
              width={900}
              height={700}
              className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-sm uppercase tracking-widest">
                Women
              </p>

              <h3 className="mt-2 text-4xl font-semibold">
                Women's Collection
              </h3>

              <span className="mt-5 inline-block border-b border-white pb-1">
                Discover Now →
              </span>
            </div>
          </Link>

          {/* Men's Collection */}
          <Link
            href="#"
            className="group relative overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/collection-men.jpg"
              alt="Men's Collection"
              width={900}
              height={700}
              className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-sm uppercase tracking-widest">
                Men
              </p>

              <h3 className="mt-2 text-4xl font-semibold">
                Men's Collection
              </h3>

              <span className="mt-5 inline-block border-b border-white pb-1">
                Discover Now →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}