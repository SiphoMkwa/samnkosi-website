import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { leadership } from "@/config/leadership";
import { company } from "@/config/company";

const leaders = [
  {
    ...leadership[0],
    bio: "Ayola provides the strategic leadership and executive direction of SAMNKOSI Technology Group. As Chief Executive Officer, he defines the company's vision, cultivates strategic partnerships, and guides its long-term growth. He leads the organization with a focus on innovation, client success, and operational excellence.",
    email: company.emails.ceo,
  },
  {
    ...leadership[1],
    bio: "Sipho leads technology strategy and engineering delivery for SAMNKOSI Technology Group, spanning cloud architecture, DevSecOps, cybersecurity, and automation. He is responsible for translating the company's strategic objectives into secure, scalable technical solutions for clients.",
    email: company.emails.engineering,
  },
];

export default function LeadershipPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <Container>
          <h1 className="text-5xl font-bold text-[var(--navy)]">
            Executive Leadership
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Our leadership team combines strategic vision with operational
            excellence to deliver secure, innovative, and mission-driven
            technology solutions.
          </p>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--navy)] text-3xl font-bold text-white">
                  {leader.name.charAt(0)}
                </div>

                <h2 className="text-2xl font-bold text-[var(--navy)]">
                  {leader.name}
                </h2>

                <p className="mt-2 font-semibold text-[var(--blue)]">
                  {leader.title}
                </p>

                <p className="mt-6 leading-7 text-gray-600">{leader.bio}</p>

                <p className="mt-6 font-medium text-[var(--navy)]">
                  {leader.email}
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
