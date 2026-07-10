import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const leaders = [
  {
    name: "Ayola Mgqolozana",
    title: "Chief Executive Officer",
    description:
      "Provides strategic leadership, business development, and oversees SAMNKOSI's long-term vision, client relationships, and organizational growth.",
  },
  {
    name: "Sipho Mkhwanazi",
    title: "Director of Technology & Engineering",
    description:
      "Leads technology strategy, cloud engineering, DevSecOps, cybersecurity, automation, and the delivery of secure, scalable technical solutions.",
  },
];

export default function LeadershipPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--blue)]">
            Leadership
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[var(--navy)]">
            Leadership Built on Trust, Service, and Technical Excellence
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our leadership team combines strategic vision with technical
            expertise to help clients solve complex challenges and achieve
            mission success.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--navy)] text-xl font-bold text-white">
                  {leader.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[var(--navy)]">
                    {leader.name}
                  </h3>

                  <p className="text-[var(--blue)]">{leader.title}</p>
                </div>
              </div>

              <p className="mt-6 leading-8 text-gray-600">
                {leader.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/leadership">Meet Our Leadership Team</Button>
        </div>
      </Container>
    </section>
  );
}
