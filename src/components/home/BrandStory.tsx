import Image from "next/image";
import Container from "@/components/ui/Container";

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="lg:pr-6">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/50 sm:text-sm">
              Our Story
            </p>

            <h2 className="mt-4 font-heading text-4xl leading-tight text-black sm:text-5xl">
              Crafted for Confidence
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
              At Beauty &amp; The Mountains, we believe fashion is more than
              what you wear—it is how you express yourself. Every collection
              is thoughtfully selected to combine elegance, quality, and
              timeless style for modern living.
            </p>

            <a
              href="https://www.beautyandthemountains.store/pages/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/80"
            >
              Discover Our Story
            </a>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/images/brand-story.jpg"
              alt="Beauty & The Mountains"
              width={700}
              height={800}
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-[1.02] sm:h-[520px] lg:h-[580px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}