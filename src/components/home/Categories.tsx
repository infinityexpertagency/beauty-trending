import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const categories = [
  {
    name: "Women",
    image: "/images/women.jpg",
  },
  {
    name: "Men",
    image: "/images/men.jpg",
  },
  {
    name: "Watches",
    image: "/images/watches.jpg",
  },
  {
    name: "Accessories",
    image: "/images/accessories.jpg",
  },
];

export default function Categories() {
  return (
    <section className="bg-white py-20">

      <Container>

        <SectionTitle
          eyebrow="Explore"
          title="Shop By Category"
          subtitle="Discover carefully selected pieces designed for every style."
        />


        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-3xl"
            >

              <Image
                src={category.image}
                alt={category.name}
                width={500}
                height={600}
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
              />


              <div className="absolute inset-0 flex items-end bg-black/20 p-6">

                <h3 className="text-2xl font-semibold text-white">
                  {category.name}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
}