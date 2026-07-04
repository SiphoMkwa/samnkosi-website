import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

const capabilities = [
  {
    title: "Cybersecurity",
    description:
      "Risk management, Zero Trust, security assessments, compliance, and cyber resilience.",
  },
  {
    title: "Cloud Engineering",
    description:
      "Cloud architecture, migration, modernization, and infrastructure optimization.",
  },
  {
    title: "DevSecOps",
    description:
      "Secure CI/CD pipelines, Infrastructure as Code, automation, and continuous delivery.",
  },
  {
    title: "Enterprise IT",
    description:
      "Networking, systems administration, endpoint management, and IT modernization.",
  },
  {
    title: "AI & Automation",
    description:
      "Workflow automation, AI integration, and intelligent business solutions.",
  },
  {
    title: "Program Management",
    description:
      "Project governance, stakeholder engagement, planning, and operational excellence.",
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <Container>
          <h1 className="text-5xl font-bold text-[var(--navy)]">
            Our Capabilities
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We deliver secure, scalable, and mission-focused technology
            solutions that help organizations modernize their operations and
            achieve measurable outcomes.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="rounded-xl border border-gray-200 p-8 shadow-sm transition hover:border-[var(--blue)] hover:shadow-md"
              >
                <h2 className="text-2xl font-semibold text-[var(--navy)]">
                  {capability.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
