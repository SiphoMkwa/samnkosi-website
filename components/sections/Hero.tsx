import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--blue)]">
          Public Sector Technology Partner
        </p>

        <h1 className="mt-6 text-5xl font-bold leading-tight text-[var(--navy)] md:text-7xl">
          Engineering Trust.
          <br />
          Delivering Mission Success.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          Secure technology, cybersecurity, cloud engineering, and professional
          services supporting federal, state, local government, educational
          institutions, and commercial organizations.
        </p>

        <div className="mt-10 flex gap-4">
          <Button>Explore Capabilities</Button>

          <Button variant="secondary">Contact Us</Button>
        </div>
      </Container>
    </section>
  );
}
