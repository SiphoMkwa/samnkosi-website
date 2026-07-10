import Link from "next/link";
import { LinkedInIcon, XIcon, GitHubIcon } from "@/components/icons/SocialIcons";
import Container from "@/components/layout/Container";
import Brand from "@/components/layout/Brand";
import { company } from "@/config/company";
import { navigation } from "@/config/navigation";
import { social } from "@/config/social";

const socialLinks = [
  { href: social.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: social.x, label: "X", icon: XIcon },
  { href: social.github, label: "GitHub", icon: GitHubIcon },
].filter((link) => link.href);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--navy)] text-white">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-3">
          {/* Company */}
          <div>
            <Brand />

            <p className="mt-6 max-w-sm leading-7 text-gray-300">
              {company.tagline}
            </p>

            <p className="mt-6 text-sm leading-7 text-gray-400">
              Secure technology solutions supporting federal, state, local
              government, educational institutions, and commercial
              organizations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-6 space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>
                <a
                  href={`mailto:${company.emails.general}`}
                  className="transition hover:text-white"
                >
                  {company.emails.general}
                </a>
              </li>

              <li>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {company.website}
                </a>
              </li>
            </ul>

            {socialLinks.length > 0 && (
              <div className="mt-6 flex gap-4">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-gray-300 transition hover:text-white"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-sm text-gray-400">
          © {year} {company.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
