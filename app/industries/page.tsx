import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

const industries = [
  {
    title: "Federal Government",
    description:
      "Supporting federal agencies with secure, mission-focused technology solutions.",
  },
  {
    title: "State Government",
    description:
      "Helping state organizations modernize infrastructure and improve service delivery.",
  },
  {
    title: "Local Government",
    description:
      "Providing reliable technology services for municipalities and local authorities.",
  },
  {
    title: "Education",
    description:
      "Empowering schools, colleges, universities, and research institutions with secure technology.",
  },
  {
    title: "Commercial",
    description:
      "Helping businesses improve operations through cloud, cybersecurity, and digital transformation.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <Container>
          <h1 className="text-5xl font-bold text-[var(--navy)]">
            Industries We Serve
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            SAMNKOSI Technology Group partners with organizations across the
            public and private sectors, delivering secure, scalable technology
            solutions tailored to each industry&apos;s unique mission.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-xl border border-gray-200 p-8 shadow-sm transition hover:border-[var(--blue)] hover:shadow-md"
              >
                <h2 className="text-2xl font-semibold text-[var(--navy)]">
                  {industry.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {industry.description}
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
