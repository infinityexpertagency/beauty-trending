export default function Hero() {
  return (
    <section className="bg-[#F5F5DC]">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-sm uppercase tracking-[0.3em]">
          Premium Fashion & Accessories
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Discover Timeless Style &
          <br />
          Trending Fashion
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-black/70">
          Curated fashion, luxury watches and accessories designed to
          elevate your everyday look.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button className="rounded-full bg-black px-8 py-4 text-white">
            Shop Trending
          </button>

          <button className="rounded-full border border-black px-8 py-4">
            Explore Collections
          </button>

        </div>

      </div>
    </section>
  );
}