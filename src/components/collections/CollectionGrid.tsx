import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export default function CollectionGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 py-10 lg:grid-cols-4">

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
  );
}