import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-[#F5F5DC]">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center gap-12 px-6 py-16 md:flex-row">

        {/* Left Content */}
        <div className="flex-1">

          <p className="mb-4 uppercase tracking-[0.3em] text-sm text-black/60">
            Premium Fashion & Accessories
          </p>

          <h1 className="font-heading text-5xl leading-tight md:text-7xl">
            Discover
            <br />
            Timeless Style
            <br />
            & Trending Fashion
          </h1>

          <p className="mt-8 max-w-xl text-lg text-black/70">
            Discover carefully curated fashion, luxury watches and
            accessories designed to elevate your everyday wardrobe.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>
              Shop Trending
            </Button>

            <Button variant="secondary">
              Explore Collection
            </Button>
          </div>

          {/* Trust badges */}

          <div className="mt-12 flex flex-wrap gap-6 text-sm">

            <span>✓ Premium Quality</span>

            <span>✓ Secure Checkout</span>

            <span>✓ Worldwide Shipping</span>

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
            className="rounded-[40px] object-cover shadow-2xl"
          />

          {/* Floating Card */}

          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl">

            <p className="text-xs uppercase tracking-widest text-black/60">
              Trending
            </p>

            <h3 className="mt-2 text-xl font-semibold">
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