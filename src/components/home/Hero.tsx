import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 lg:pr-6">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-black/60 sm:text-sm">
            Premium Fashion & Accessories
          </p>

          <h1 className="font-heading text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Discover
            <br />
            Timeless Style
            <br />
            <span className="text-black/80">& Trending Fashion</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
            Discover carefully curated fashion, luxury watches, shoes, bags,
            and accessories designed to elevate your everyday wardrobe.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href="https://www.beautyandthemountains.store/collections/all"
              variant="primary"
            >
              Shop Trending
            </Button>

            <Button
              href="https://www.beautyandthemountains.store/collections/the-womens-edit"
              variant="secondary"
            >
              Explore Collection
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-black/10 pt-6 text-xs uppercase tracking-wide text-black/60 sm:text-sm">
            <span>✓ Premium Quality</span>
            <span>✓ Secure Checkout</span>
            <span>✓ Worldwide Shipping</span>
          </div>
        </div>

        ```tsx
{/* Right Image */}
<div className="w-full flex-1">
  <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
    <Image
      src="/images/hero.jpg"
      alt="Premium fashion and accessories"
      width={700}
      height={850}
      priority
      className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
    />
  </div>

  {/* Floating Card */}
  <div className="relative z-10 -mt-2 ml-4 mr-4 rounded-2xl border border-black/5 bg-white/95 p-5 shadow-xl backdrop-blur-sm sm:ml-6 sm:mr-6 sm:p-6 lg:absolute lg:bottom-6 lg:left-6 lg:mt-0 lg:mr-0 lg:max-w-[270px]">
    <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-black/50">
      Trending Now
    </p>

    <h3 className="mt-2 font-heading text-2xl">
      New Collection
    </h3>

    <p className="mt-2 text-sm leading-6 text-black/60">
      Luxury pieces selected for this season.
    </p>

    <a
      href="https://www.beautyandthemountains.store/collections/all"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider underline underline-offset-4 transition-opacity hover:opacity-60"
    >
      Explore →
    </a>
  </div>
</div>
```

      </div>
    </section>
  );
}