import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  image: string;
};

export default function CollectionHero({
  title,
  subtitle,
  image,
}: Props) {
  return (
    <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="text-white">
          <p className="mb-3 uppercase tracking-[0.3em] text-sm">
            Beauty & The Mountains
          </p>

          <h1 className="text-5xl font-semibold md:text-6xl">
            {title}
          </h1>

          <p className="mt-5 max-w-xl text-lg text-white/90">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}