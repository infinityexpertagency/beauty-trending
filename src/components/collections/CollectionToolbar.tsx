"use client";

interface CollectionToolbarProps {
  productCount: number;
  onSortChange: (sort: string) => void;
}

export default function CollectionToolbar({
  productCount,
  onSortChange,
}: CollectionToolbarProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-black/60">
        Showing {productCount} Products
      </p>

      <select
        className="w-full rounded-full border border-black/20 bg-white px-5 py-3 text-sm outline-none sm:w-auto"
        defaultValue="Featured"
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="Featured">Featured</option>
        <option value="Newest">Newest</option>
        <option value="Best Selling">Best Selling</option>
        <option value="Price: Low to High">Price: Low to High</option>
        <option value="Price: High to Low">Price: High to Low</option>
      </select>
    </div>
  );
}