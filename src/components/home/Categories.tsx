import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const categories = [
  {
    name: "Women",
    image: "/images/women.jpg",
    href: "https://www.beautyandthemountains.store/collections/the-womens-edit",
  },
  {
    name: "Men",
    image: "/images/men.jpg",
    href: "https://www.beautyandthemountains.store/collections/the-mens-edit",
  },
  {
    name: "Watches & Jewellery",
    image: "/images/watches&jewellery.jpg",
    href: "https://www.beautyandthemountains.store/collections/watches-jewellery",
  },
  {
    name: "Bags & Backpacks",
    image: "/images/bags&backpacks.jpg",
    href: "https://www.beautyandthemountains.store/collections/bags-backpacks",
  },
];

export default function Categories() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Explore"
          title="Shop By Category"
          subtitle="Discover carefully selected pieces designed for every style."
        />

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={500}
                height={600}
                className="h-[260px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[320px] lg:h-[380px]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-all duration-500 group-hover:from-black/70" />

              {/* Category Name */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
                <div className="flex items-end justify-between gap-3">
                  <h3 className="font-heading text-xl font-medium text-white sm:text-2xl lg:text-3xl">
                    {category.name}
                  </h3>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-lg text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}