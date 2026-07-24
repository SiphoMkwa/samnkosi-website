import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SAMNKOSI Technology Group collects, uses, and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

const lastUpdated = "July 24, 2026";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <Container>
          <h1 className="text-5xl font-bold text-[var(--navy)]">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm font-medium text-gray-500">
            Last updated: {lastUpdated}
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            This Privacy Policy explains how {company.name}
            {" "}LLC (&quot;SAMNKOSI,&quot; &quot;we,&quot; &quot;us,&quot;
            or &quot;our&quot;) collects, uses, and protects information when
            you visit {company.website}
            {" "}(the &quot;Site&quot;).
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                1. Information We Collect
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We collect information in the following ways:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-gray-600">
                <li>
                  <span className="font-medium text-gray-800">
                    Information you provide directly:
                  </span>{" "}
                  when you submit our contact form, we collect your name,
                  email address, organization (optional), and the content of
                  your message.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Automatically collected information:
                  </span>{" "}
                  our hosting and infrastructure providers may log standard
                  technical data such as IP address, browser type, and pages
                  visited, for security and operational purposes. The Site
                  does not currently use cookies or third-party analytics or
                  advertising trackers.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                2. How We Use Your Information
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We use the information you provide to:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-gray-600">
                <li>Respond to your inquiry or request;</li>
                <li>
                  Route your message to the appropriate member of our team;
                </li>
                <li>
                  Maintain records of business communications and inquiries;
                  and
                </li>
                <li>
                  Comply with legal obligations, including those tied to our
                  status as a government contractor.
                </li>
              </ul>

              <p className="mt-4 leading-7 text-gray-600">
                We do not sell, rent, or trade your personal information to
                third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                3. Third-Party Service Providers
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We use third-party service providers to operate the Site and
                deliver contact form submissions to our team, including
                email delivery infrastructure and website hosting providers.
                These providers process information solely on our behalf and
                are not authorized to use it for their own purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                4. Data Retention
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We retain contact form submissions and related correspondence
                for as long as reasonably necessary to respond to your
                inquiry, maintain business records, and meet legal or
                contractual recordkeeping obligations, after which it is
                deleted or anonymized.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                5. Data Security
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We take reasonable administrative and technical measures to
                protect information submitted through the Site. However, no
                method of transmission over the internet is completely
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                6. Children&apos;s Privacy
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                This Site is intended for a business and government audience
                and is not directed to individuals under the age of 13. We
                do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                7. Your Choices &amp; Rights
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                You may request access to, correction of, or deletion of
                personal information you have submitted to us by contacting{" "}
                <a
                  href={`mailto:${company.emails.general}`}
                  className="font-medium text-[var(--blue)] hover:underline"
                >
                  {company.emails.general}
                </a>
                . We will respond to reasonable requests consistent with our
                legal and recordkeeping obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                8. Changes to This Policy
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We may update this Privacy Policy from time to time. The
                &quot;Last updated&quot; date at the top of this page
                reflects the most recent revision. We encourage you to review
                this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                9. Contact Us
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Questions about this Privacy Policy can be directed to{" "}
                <a
                  href={`mailto:${company.emails.general}`}
                  className="font-medium text-[var(--blue)] hover:underline"
                >
                  {company.emails.general}
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
