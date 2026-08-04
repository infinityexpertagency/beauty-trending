import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export default function TrendingProducts() {
  return (
    <section className="bg-[#F5F5DC] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Trending Now
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-black">
            Featured Products
          </h2>

          <p className="mt-4 text-gray-600">
            Discover our most loved fashion pieces and luxury accessories.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}