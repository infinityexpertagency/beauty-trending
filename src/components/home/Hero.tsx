import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-[#F5F5DC]">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center gap-12 px-6 py-16 md:flex-row">

        {/* Left Content */}
        <div className="flex-1">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-black/60">
            Premium Fashion & Accessories
          </p>

          <h1 className="font-heading text-4xl leading-tight sm:text-5xl md:text-7xl">
            Discover
            <br />
            Timeless Style
            <br />
            & Trending Fashion
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-black/70 sm:text-lg">
            Discover carefully curated fashion, luxury watches and accessories
            designed to elevate your everyday wardrobe.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

  <Button href="https://www.beautyandthemountains.store/collections/all">
    Shop Trending
  </Button>

  <Button
    href="https://www.beautyandthemountains.store/collections/the-womens-edit"
    variant="secondary"
  >
    Explore Collection
  </Button>

</div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-6">

            <span>
              ✓ Premium Quality
            </span>

            <span>
              ✓ Secure Checkout
            </span>

            <span>
              ✓ Worldwide Shipping
            </span>

          </div>

        </div>

        {/* Right Image */}
        <div className="relative flex-1">

          <Image
            src="/images/hero.jpg"
            alt="Luxury Fashion"
            width={700}
            height={850}
            priority
            className="rounded-[32px] object-cover shadow-2xl"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-5 left-4 max-w-[260px] rounded-2xl bg-white p-5 shadow-xl sm:left-6">

            <p className="text-xs uppercase tracking-widest text-black/60">
              Trending
            </p>

            <h3 className="mt-2 text-lg font-semibold">
              New Collection
            </h3>

            <p className="mt-2 text-sm text-black/60">
              Luxury pieces selected for this season.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}