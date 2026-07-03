type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-14 ${
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--blue)]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-[var(--navy)] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
      )}
    </div>
  );
}
