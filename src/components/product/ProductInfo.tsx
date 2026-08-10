import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductInfo({ product }: Props) {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-xs uppercase tracking-[0.3em] text-black/50 sm:text-sm">
        {product.category}
      </p>

      <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
        {product.title}
      </h1>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="text-3xl font-bold">
          {product.price}
        </span>

        {product.compareAtPrice && (
          <span className="text-xl text-black/40 line-through">
            {product.compareAtPrice}
          </span>
        )}
      </div>

      {product.badge && (
        <span
          className="mt-6 w-fit rounded-full px-4 py-2 text-sm font-medium text-white"
          style={{ backgroundColor: product.badgeColor }}
        >
          {product.badge}
        </span>
      )}

      <p className="mt-8 text-base leading-7 text-black/70 sm:text-lg sm:leading-8">
        {product.description}
      </p>

      <div className="mt-9">
        <a
          href={product.shopifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-800 sm:w-auto"
        >
          Shop This Product
        </a>
      </div>

      <div className="mt-8 border-t border-black/10 pt-6">
        <div className="grid gap-4 text-sm text-black/60 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-black">
              Secure Checkout
            </p>
            <p className="mt-1">
              Safe and trusted payment.
            </p>
          </div>

          <div>
            <p className="font-semibold text-black">
              Worldwide Shipping
            </p>
            <p className="mt-1">
              Delivery available worldwide.
            </p>
          </div>

          <div>
            <p className="font-semibold text-black">
              Easy Returns
            </p>
            <p className="mt-1">
              Simple return process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}