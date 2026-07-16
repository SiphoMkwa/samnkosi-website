import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SAMNKOSI Technology Group is a Maryland based government contractor delivering secure technology, cybersecurity, and cloud engineering, with growing capabilities in program management and professional services.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <Container>
          <h1 className="text-5xl font-bold text-[var(--navy)]">
            About SAMNKOSI
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            {company.about}
          </p>

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                Our Mission
              </h2>

              <p className="mt-4 text-gray-600 leading-7">{company.mission}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                Our Vision
              </h2>

              <p className="mt-4 text-gray-600 leading-7">{company.vision}</p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
