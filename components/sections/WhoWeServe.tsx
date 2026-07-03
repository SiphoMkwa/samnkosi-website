import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { Landmark, Building2, Building, School, Briefcase } from "lucide-react";

const sectors = [
  {
    title: "Federal Government",
    description:
      "Mission-focused technology and professional services supporting federal agencies.",
    icon: Landmark,
  },
  {
    title: "State Government",
    description:
      "Helping state agencies modernize infrastructure and improve operational efficiency.",
    icon: Building2,
  },
  {
    title: "Local Government",
    description:
      "Supporting counties, municipalities, and local organizations with secure, scalable technology.",
    icon: Building,
  },
  {
    title: "Education",
    description:
      "Technology solutions for schools, colleges, universities, and research institutions.",
    icon: School,
  },
  {
    title: "Commercial",
    description:
      "Helping businesses strengthen operations through secure IT and digital transformation.",
    icon: Briefcase,
  },
];

export default function WhoWeServe() {
  return (
    <section className="bg-[var(--gray)] py-24">
      <Container>
        <SectionHeader
          eyebrow="Who We Serve"
          title="Supporting Organizations Across Every Level"
          description="SAMNKOSI Technology Group partners with organizations across the public and private sectors to deliver secure, mission-driven technology solutions."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <Card key={sector.title}>
                <div className="mb-6 inline-flex rounded-xl bg-[var(--gray)] p-3">
                  <Icon className="text-[var(--blue)]" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-[var(--navy)]">
                  {sector.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {sector.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
