import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";

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
    <FadeIn>
      <section className="py-24">
        <Container>
          <SectionHeader
            eyebrow="Capabilities"
            title="Our Capabilities"
            description="We provide secure technology and professional services that help organizations modernize operations, strengthen cybersecurity, and accomplish their missions."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <Card key={capability.title}>
                <h3 className="text-xl font-semibold text-[var(--navy)]">
                  {capability.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {capability.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </FadeIn>
  );
}
