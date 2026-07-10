import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import { capabilities } from "@/config/capabilities";

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
