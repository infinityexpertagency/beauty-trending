import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductInfo({ product }: Props) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-black/60">
        {product.category}
      </p>

      <h1 className="mt-3 text-5xl font-semibold">
        {product.title}
      </h1>

      <div className="mt-6 flex items-center gap-4">
        <span className="text-3xl font-bold">
          {product.price}
        </span>

        <span className="text-xl text-black/40 line-through">
          {product.compareAtPrice}
        </span>
      </div>

      <span
        className="mt-6 inline-block rounded-full px-4 py-2 text-sm font-medium text-white"
        style={{ backgroundColor: product.badgeColor }}
      >
        {product.badge}
      </span>

      <p className="mt-8 text-lg leading-8 text-black/70">
        {product.description}
      </p>
    </div>
  );
}