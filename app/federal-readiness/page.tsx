import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

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
            compliant, and mission-focused technology services.
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
                Areas of Focus
              </h2>

              <ul className="mt-4 list-disc space-y-3 pl-6 text-gray-600">
                <li>Cybersecurity and Risk Management</li>
                <li>Cloud Engineering</li>
                <li>DevSecOps Practices</li>
                <li>Enterprise IT Modernization</li>
                <li>Program and Project Management</li>
              </ul>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
