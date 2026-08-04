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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Customer Love
          </p>

          <h2 className="mt-3 text-4xl font-semibold">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-600">
            Real experiences from customers who love our collections.
          </p>
        </div>


        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl bg-[#F5F5DC] p-8 transition hover:-translate-y-2"
            >

              <div className="text-yellow-500">
                ★★★★★
              </div>


              <p className="mt-5 leading-7 text-gray-700">
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