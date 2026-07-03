import Container from "@/components/layout/Container";

const capabilities = [
  {
    title: "Cybersecurity",
    description:
      "Security assessments, risk management, Zero Trust, compliance, and cyber resilience.",
  },
  {
    title: "Cloud Engineering",
    description:
      "Cloud architecture, migration, modernization, and infrastructure optimization.",
  },
  {
    title: "DevSecOps",
    description:
      "Secure CI/CD pipelines, automation, Infrastructure as Code, and continuous delivery.",
  },
  {
    title: "Enterprise IT",
    description:
      "Modern IT infrastructure, endpoint management, networking, and systems administration.",
  },
  {
    title: "AI & Automation",
    description:
      "Workflow automation, AI integration, process optimization, and intelligent solutions.",
  },
  {
    title: "Program Management",
    description:
      "Project planning, governance, stakeholder engagement, and operational excellence.",
  },
];

export default function Capabilities() {
  return (
    <section className="py-24">
      <Container>
        <h2 className="text-4xl font-bold text-[var(--navy)]">
          Our Capabilities
        </h2>

        <p className="mt-4 max-w-2xl text-gray-600">
          We provide secure technology and professional services that help
          organizations modernize operations, strengthen cybersecurity, and
          accomplish their missions.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-xl border border-gray-200 p-8 transition hover:border-[var(--blue)] hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-[var(--navy)]">
                {capability.title}
              </h3>

              <p className="mt-3 text-gray-600">{capability.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
