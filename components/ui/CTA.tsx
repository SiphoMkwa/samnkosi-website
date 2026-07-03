import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

type CTAProps = {
  title: string;
  description: string;
  primaryText?: string;
  secondaryText?: string;
};

export default function CTA({
  title,
  description,
  primaryText = "Contact Us",
  secondaryText = "Learn More",
}: CTAProps) {
  return (
    <section className="bg-[var(--navy)] py-24 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold md:text-5xl">{title}</h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">{description}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button>{primaryText}</Button>

            <Button variant="secondary">{secondaryText}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
