type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-black/60">
          {eyebrow}
        </p>
      )}

      <h2 className="font-heading text-4xl md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-black/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}