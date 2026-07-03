import Container from "@/components/layout/Container";

const pillars = [
  {
    title: "Mission First",
    description:
      "Every engagement begins with understanding your mission, objectives, and operational challenges before recommending technology.",
  },
  {
    title: "Security by Design",
    description:
      "Cybersecurity, compliance, resilience, and risk management are integrated into every solution from the start.",
  },
  {
    title: "Trusted Partnerships",
    description:
      "We build long-term relationships through transparency, accountability, and reliable delivery across federal, state, local, education, and commercial sectors.",
  },
];

export default function WhySamnkosi() {
  return (
    <section className="bg-[var(--navy)] py-24 text-white">
      <Container>
        <h2 className="text-4xl font-bold">Why Partner With SAMNKOSI</h2>

        <p className="mt-4 max-w-3xl text-gray-300">
          We combine disciplined execution with innovative technology to help
          organizations achieve mission success with confidence.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-white/20 p-8"
            >
              <h3 className="text-2xl font-semibold">{pillar.title}</h3>

              <p className="mt-4 text-gray-300">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
