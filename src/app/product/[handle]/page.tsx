import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";

type Props = {
  params: Promise<{
    handle: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;

  const product = products.find(
    (item) => item.handle === handle
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F5F5DC]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2">

  <ProductGallery product={product} />

  <ProductInfo product={product} />

</div>
    </main>
  );
}