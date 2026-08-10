"use client";

import Container from "@/components/ui/Container";

export default function Newsletter() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white/70 px-6 py-12 text-center shadow-sm backdrop-blur-sm sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* Eyebrow */}
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/50 sm:text-sm">
            Stay Updated
          </p>

          {/* Heading */}
          <h2 className="mt-4 font-heading text-4xl leading-tight text-black sm:text-5xl">
            Join Our Fashion Community
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
            Be the first to discover new arrivals, exclusive collections,
            and special offers from Beauty &amp; The Mountains.
          </p>

          {/* Newsletter Form */}
          <form
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:gap-3"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
              className="h-12 flex-1 rounded-full border border-black/15 bg-white px-5 text-sm text-black outline-none transition placeholder:text-black/40 focus:border-black focus:ring-1 focus:ring-black sm:h-13 sm:px-6"
            />

            <button
              type="submit"
              className="h-12 rounded-full bg-black px-8 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/80 sm:h-13"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-xs text-black/40">
            By subscribing, you agree to receive updates and promotional
            emails from us.
          </p>
        </div>
      </Container>
    </section>
  );
}