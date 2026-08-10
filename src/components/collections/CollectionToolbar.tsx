export default function CollectionToolbar() {
  return (
    <div className="flex flex-col gap-4 border-b border-black/10 py-6 sm:flex-row sm:items-center sm:justify-between">

      <p className="text-sm text-black/60">
        Showing 24 Products
      </p>

      <select
        className="rounded-full border border-black/20 bg-white px-5 py-3 text-sm outline-none"
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