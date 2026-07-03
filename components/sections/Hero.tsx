import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { hero } from "@/content/hero";

export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--blue)]">
          {hero.eyebrow}
        </p>

        <h1 className="mt-6 text-5xl font-bold leading-tight text-[var(--navy)] md:text-7xl">
          {hero.title}
          <br />
          {hero.subtitle}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          {hero.description}
        </p>

        <div className="mt-10 flex gap-4">
          <Button>{hero.primaryButton}</Button>

          <Button variant="secondary">{hero.secondaryButton}</Button>
        </div>
      </Container>
    </section>
  );
}
