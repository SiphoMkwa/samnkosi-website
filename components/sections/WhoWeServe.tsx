import Container from "@/components/layout/Container";

const sectors = [
  {
    title: "Federal Government",
    description:
      "Mission-focused technology and professional services supporting federal agencies.",
  },
  {
    title: "State Government",
    description:
      "Helping state agencies modernize infrastructure and improve operational efficiency.",
  },
  {
    title: "Local Government",
    description:
      "Supporting counties, municipalities, and local organizations with secure, scalable technology.",
  },
  {
    title: "Education",
    description:
      "Technology solutions for schools, colleges, universities, and research institutions.",
  },
  {
    title: "Commercial",
    description:
      "Helping businesses strengthen operations through secure IT and digital transformation.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="py-24 bg-[var(--gray)]">
      <Container>
        <h2 className="text-4xl font-bold text-[var(--navy)]">Who We Serve</h2>

        <p className="mt-4 max-w-2xl text-gray-600">
          SAMNKOSI Technology Group partners with organizations across the
          public and private sectors to deliver secure, mission-driven
          technology solutions.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="rounded-xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-[var(--navy)]">
                {sector.title}
              </h3>

              <p className="mt-3 text-gray-600">{sector.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
