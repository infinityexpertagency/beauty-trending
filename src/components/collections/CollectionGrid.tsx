import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

interface CollectionGridProps {
  categories: string[];
  sort: string;
}

export default function CollectionGrid({
  categories,
  sort,
}: CollectionGridProps) {
  const filteredProducts = products.filter((product) =>
    categories.includes(product.category)
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "Price: Low to High":
        return (
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
        );

      case "Price: High to Low":
        return (
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
        );

      case "Newest":
        return b.id - a.id;

      case "Best Selling":
        return b.id - a.id;

      case "Featured":
      default:
        return a.id - b.id;
    }
  });

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {sortedProducts.map((product) => (
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