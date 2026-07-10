import Image from "next/image";
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
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--blue)]">
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-[var(--navy)] md:text-7xl">
              {hero.title}
              <br />
              {hero.subtitle}
            </h1>

            <p className="mt-8 text-xl leading-9 text-gray-600">
              Secure technology solutions helping federal, state, local
              government, educational institutions, and commercial organizations
              modernize, secure, and transform their operations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/capabilities">{hero.primaryButton}</Button>

              <Button href="/contact" variant="secondary">
                {hero.secondaryButton}
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-5">
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

          {/* Right Side */}
          <div className="hidden lg:flex justify-center">
            <Image
              src="/graphics/hero-network.svg"
              alt="Secure technology network"
              width={520}
              height={520}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
