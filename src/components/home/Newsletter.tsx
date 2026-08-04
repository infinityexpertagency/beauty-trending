export default function Newsletter() {
  return (
    <section className="bg-[#F5F5DC] py-16 sm:py-24">

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">


        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
          Stay Updated
        </p>


        <h2 className="mt-4 text-3xl font-semibold text-black sm:text-4xl">
          Join Our Fashion Community
        </h2>


        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          Be the first to discover new arrivals, exclusive collections,
          and special offers from Beauty &amp; The Mountains.
        </p>



        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:gap-4">


          <input
            type="email"
            placeholder="Enter your email address"
            className="h-12 flex-1 rounded-full border border-black/20 bg-white px-6 text-sm outline-none transition focus:border-black"
          />


          <button
            type="submit"
            className="h-12 rounded-full bg-black px-8 text-sm text-white transition hover:bg-gray-800"
          >
            Subscribe
          </button>


        </form>


      </div>

    </section>
  );
}