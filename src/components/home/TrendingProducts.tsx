import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export default function TrendingProducts() {
  return (
    <section className="bg-[#F5F5DC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        <div className="mb-10 text-center sm:mb-12">

          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
            Trending Now
          </p>


          <h2 className="mt-3 text-3xl font-semibold text-black sm:text-4xl">
            Featured Products
          </h2>


          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-600 sm:text-base">
            Discover our most loved fashion pieces and luxury accessories.
          </p>

        </div>


        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">

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