import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { naicsCodes } from "@/config/naics";

export const metadata: Metadata = {
  title: "Federal Readiness",
  description:
    "SAMNKOSI Technology Group's federal contracting readiness, core NAICS codes, and areas of focus spanning cybersecurity, cloud engineering, and professional services.",
  alternates: { canonical: "/federal-readiness" },
};

export default function FederalReadinessPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <Container>
          <h1 className="text-5xl font-bold text-[var(--navy)]">
            Federal Readiness
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            SAMNKOSI Technology Group is building the capabilities, processes,
            and governance required to support government clients with secure,
            compliant, and mission-focused technology and professional
            services.
          </p>

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                Our Commitment
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We are committed to establishing the operational, technical, and
                security foundations necessary to support public sector
                organizations while adhering to recognized industry standards
                and best practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                Areas of Focus &amp; NAICS Codes
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Our core capabilities are anchored in secure technology, with
                additional NAICS registrations that allow us to pursue a
                broader range of federal, state, and local contract
                opportunities as we grow.
              </p>

              <div className="mt-8 space-y-6">
                {naicsCodes.map((item) => (
                  <div
                    key={item.code}
                    className="rounded-xl border border-gray-200 p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-[var(--navy)]">
                        {item.focus}
                      </h3>

                      <span className="inline-flex items-center rounded-full bg-[var(--gray)] px-3 py-1 text-sm font-semibold text-[var(--blue)]">
                        NAICS {item.code}
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-medium text-gray-500">
                      {item.label}
                    </p>

                    <p className="mt-3 leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
