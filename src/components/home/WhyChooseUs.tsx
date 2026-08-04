import {
  Truck,
  ShieldCheck,
  Gem,
  RotateCcw,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Worldwide Shipping",
    description:
      "Fast and reliable delivery to customers around the globe.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description:
      "Your payments are protected with trusted payment methods.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description:
      "Carefully selected fashion and accessories you'll love.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description:
      "Simple return process for a worry-free shopping experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F5F5DC] py-16 sm:py-24">

      <div className="mx-auto max-w-7xl px-5 sm:px-6">


        <div className="mb-10 text-center sm:mb-14">

          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
            Why Choose Us
          </p>


          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Shopping Made Simple
          </h2>


          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-600 sm:text-base">
            Everything you need for a smooth and enjoyable shopping experience.
          </p>

        </div>



        <div className="grid gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="rounded-3xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg sm:p-8"
              >

                <Icon
                  className="mx-auto mb-5"
                  size={36}
                />


                <h3 className="text-lg font-semibold sm:text-xl">
                  {feature.title}
                </h3>


                <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base">
                  {feature.description}
                </p>


              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}