import ProductCard from "@/components/ui/ProductCard";
import Container from "@/components/ui/Container";
import { products } from "@/data/products";

export default function TrendingProducts() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Section Header */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/50 sm:text-sm">
            Trending Now
          </p>

          <h2 className="mt-3 font-heading text-4xl leading-tight text-black sm:text-5xl">
            Featured Products
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
            Discover our most loved fashion pieces and luxury accessories,
            carefully selected to elevate your everyday style.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              category={product.category}
              title={product.title}
              price={product.price}
              compareAtPrice={product.compareAtPrice}
              badge={product.badge}
              badgeColor={product.badgeColor}
              shopifyUrl={product.shopifyUrl}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}