interface CollectionToolbarProps {
  productCount: number;
}

export default function CollectionToolbar({
  productCount,
}: CollectionToolbarProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-black/60">
        Showing {productCount} Products
      </p>

      <select
        className="w-full rounded-full border border-black/20 bg-white px-5 py-3 text-sm outline-none sm:w-auto"
        defaultValue="Featured"
      >
        <option>Featured</option>
        <option>Newest</option>
        <option>Best Selling</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
  );
}