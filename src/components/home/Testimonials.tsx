const testimonials = [
  {
    name: "Sarah M.",
    role: "Verified Customer",
    review:
      "The quality exceeded my expectations. The watch I purchased looks even better in person.",
  },
  {
    name: "James R.",
    role: "Verified Customer",
    review:
      "Beautiful products, smooth checkout, and fast delivery. I will definitely shop again.",
  },
  {
    name: "Emma L.",
    role: "Verified Customer",
    review:
      "I love the attention to detail. Everything feels premium and carefully selected.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-24">

      <div className="mx-auto max-w-7xl px-5 sm:px-6">


        <div className="mb-10 text-center sm:mb-14">

          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
            Customer Love
          </p>


          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            What Our Customers Say
          </h2>


          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-600 sm:text-base">
            Real experiences from customers who love our collections.
          </p>

        </div>



        <div className="grid gap-5 md:grid-cols-3 sm:gap-8">

          {testimonials.map((testimonial) => (

            <div
              key={testimonial.name}
              className="rounded-3xl bg-[#F5F5DC] p-6 transition hover:-translate-y-2 hover:shadow-lg sm:p-8"
            >


              <div className="text-lg tracking-wider text-yellow-500">
                ★★★★★
              </div>


              <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
                "{testimonial.review}"
              </p>


              <div className="mt-6">

                <h3 className="font-semibold">
                  {testimonial.name}
                </h3>


                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>

              </div>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
}