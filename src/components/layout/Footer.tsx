export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <p className="text-sm text-black/70">
          © {new Date().getFullYear()} Beauty & The Mountains.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}