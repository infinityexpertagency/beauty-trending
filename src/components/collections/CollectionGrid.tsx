import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

interface CollectionGridProps {
  categories: string[];
}

export default function CollectionGrid({
  categories,
}: CollectionGridProps) {
  const filteredProducts = products.filter((product) =>
    categories.includes(product.category)
  );

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {filteredProducts.map((product) => (
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
  );
}