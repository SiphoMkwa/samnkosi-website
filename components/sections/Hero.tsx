import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { hero } from "@/content/hero";
import {
  ShieldCheck,
  Cloud,
  Workflow,
  Server,
  Bot,
  BriefcaseBusiness,
} from "lucide-react";

const services = [
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Engineering",
    icon: Cloud,
  },
  {
    title: "DevSecOps",
    icon: Workflow,
  },
  {
    title: "Enterprise IT",
    icon: Server,
  },
  {
    title: "AI & Automation",
    icon: Bot,
  },
  {
    title: "Program Management",
    icon: BriefcaseBusiness,
  },
];

export default function Hero() {
  return (
    <section className="py-28">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--blue)]">
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-[var(--navy)] md:text-7xl">
            {hero.title}
            <br />
            {hero.subtitle}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            Secure technology solutions helping federal, state, local
            government, educational institutions, and commercial organizations
            modernize, secure, and transform their operations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>Explore Capabilities</Button>

            <Button variant="secondary">Contact Us</Button>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div key={service.title} className="flex items-center gap-3">
                  <Icon className="text-[var(--blue)]" size={20} />

                  <span className="font-medium">{service.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
