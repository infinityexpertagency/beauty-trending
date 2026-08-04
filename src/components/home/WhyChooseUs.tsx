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
    description: "Fast and reliable delivery to customers around the globe.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description: "Your payments are protected with trusted payment methods.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "Carefully selected fashion and accessories you'll love.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Simple return process for a worry-free shopping experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F5F5DC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-semibold">
            Shopping Made Simple
          </h2>

          <p className="mt-4 text-gray-600">
            Everything you need for a smooth and enjoyable shopping experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <Icon
                  className="mx-auto mb-6"
                  size={40}
                />

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600">
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