import {
  Truck,
  ShieldCheck,
  Gem,
  RotateCcw,
} from "lucide-react";
import Container from "@/components/ui/Container";

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
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Section Header */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/50 sm:text-sm">
            Why Choose Us
          </p>

          <h2 className="mt-3 font-heading text-4xl leading-tight text-black sm:text-5xl">
            Shopping Made Simple
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
            Everything you need for a smooth and enjoyable shopping experience.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-[1.5rem] border border-black/5 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-[2rem] sm:p-8"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-105">
                  <Icon size={26} strokeWidth={1.7} />
                </div>

                <h3 className="mt-5 font-heading text-2xl text-black">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/60 sm:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}