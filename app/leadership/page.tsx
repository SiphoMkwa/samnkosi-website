import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

const leaders = [
  {
    name: "Ayola Mgqolozana",
    title: "Chief Executive Officer",
    bio: "Ayola provides the strategic leadership and executive direction of SAMNKOSI Technology Group. As Chief Executive Officer, he defines the company's vision, cultivates strategic partnerships, and guides its long-term growth. He leads the organization with a focus on innovation, client success, and operational excellence.",
    email: "amgqolozana@samnkosi.com",
  },
  {
    name: "Sipho Mkhwanazi",
    title: "Chief Operating Officer",
    bio: "Sipho oversees the operational execution of the company's strategic objectives. Working under the leadership and direction of the Chief Executive Officer, he is responsible for technology delivery, operational management, process optimization, and organizational performance.",
    email: "smkhwanazi@samnkosi.com",
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
