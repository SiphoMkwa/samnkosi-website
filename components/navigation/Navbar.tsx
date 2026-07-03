import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-[var(--navy)]"
          >
            SAMNKOSI
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/capabilities">Capabilities</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
