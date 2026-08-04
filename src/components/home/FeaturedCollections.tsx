import Image from "next/image";
import Link from "next/link";

export default function FeaturedCollections() {
  return (
    <section className="bg-[#F5F5DC] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        <div className="mb-10 text-center sm:mb-14">

          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
            Collections
          </p>


          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Shop By Collection
          </h2>


          <p className="mt-4 text-sm text-gray-600 sm:text-base">
            Explore timeless pieces curated for every occasion.
          </p>

        </div>



        <div className="grid gap-5 md:grid-cols-2 md:gap-8">


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
              className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[450px] md:h-[550px]"
            />


            <div className="absolute inset-0 bg-black/25" />


            <div className="absolute bottom-6 left-6 text-white sm:bottom-10 sm:left-10">

              <p className="text-xs uppercase tracking-widest sm:text-sm">
                Women
              </p>


              <h3 className="mt-2 text-2xl font-semibold sm:text-4xl">
                Women's Collection
              </h3>


              <span className="mt-4 inline-block border-b border-white pb-1 text-sm">
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
              className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[450px] md:h-[550px]"
            />


            <div className="absolute inset-0 bg-black/25" />


            <div className="absolute bottom-6 left-6 text-white sm:bottom-10 sm:left-10">

              <p className="text-xs uppercase tracking-widest sm:text-sm">
                Men
              </p>


              <h3 className="mt-2 text-2xl font-semibold sm:text-4xl">
                Men's Collection
              </h3>


              <span className="mt-4 inline-block border-b border-white pb-1 text-sm">
                Discover Now →
              </span>

            </div>

          </Link>


        </div>

      </div>
    </section>
  );
}