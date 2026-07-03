import Link from "next/link";
import Container from "@/components/layout/Container";
import { company } from "@/config/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--navy)] text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-3">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold">{company.shortName}</h3>

            <p className="mt-4 text-gray-300 leading-7">{company.tagline}</p>

            <p className="mt-6 text-gray-400 text-sm">
              Secure technology solutions supporting federal, state, local
              government, educational institutions, and commercial
              organizations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg">Quick Links</h4>

            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/capabilities">Capabilities</Link>
              </li>
              <li>
                <Link href="/industries">Industries</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg">Contact</h4>

            <ul className="mt-5 space-y-3">
              <li>{company.emails.general}</li>
              <li>{company.website}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-sm text-gray-400">
          © {year} {company.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
