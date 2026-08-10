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
    <section className="bg-[#F5F5DC] py-24">
      <Container>
        <SectionTitle
          eyebrow="Explore"
          title="Shop By Category"
          subtitle="Discover carefully selected pieces designed for every style."
        />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={500}
                height={600}
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-end bg-black/20 p-6 transition group-hover:bg-black/30">
                <h3 className="text-2xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}