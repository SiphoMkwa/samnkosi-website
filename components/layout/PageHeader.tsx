type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="border-b bg-[var(--gray)]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-5xl font-bold text-[var(--navy)]">{title}</h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          {description}
        </p>
      </div>
    </section>
  );
}
