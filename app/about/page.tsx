import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

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
            SAMNKOSI Technology Group is a technology consulting and engineering
            company focused on delivering secure, scalable, and mission-driven
            solutions for government, education, and commercial organizations.
          </p>

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                Our Mission
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                To engineer trust through secure technology, operational
                excellence, and innovative solutions that help our clients
                achieve their missions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                Our Vision
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                To become a trusted technology partner recognized for integrity,
                technical excellence, and lasting impact across the public and
                private sectors.
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
