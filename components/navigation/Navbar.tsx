import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-[var(--navy)]">
              SAMNKOSI
            </span>

            <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Technology Group
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/capabilities"
              className="transition hover:text-[var(--blue)]"
            >
              Capabilities
            </Link>

            <Link
              href="/industries"
              className="transition hover:text-[var(--blue)]"
            >
              Industries
            </Link>

            <Link href="/about" className="transition hover:text-[var(--blue)]">
              About
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-[var(--blue)]"
            >
              Contact
            </Link>

            <Button>Contact Us</Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
