import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { capabilities } from "@/config/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Cybersecurity, cloud engineering, DevSecOps, and enterprise IT modernization capabilities from SAMNKOSI Technology Group, built for federal, state, local, and commercial clients.",
  alternates: { canonical: "/capabilities" },
};

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
