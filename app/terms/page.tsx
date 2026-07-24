import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service governing use of the SAMNKOSI Technology Group website.",
  alternates: { canonical: "/terms" },
};

const lastUpdated = "July 24, 2026";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <Container>
          <h1 className="text-5xl font-bold text-[var(--navy)]">
            Terms of Service
          </h1>

          <p className="mt-4 text-sm font-medium text-gray-500">
            Last updated: {lastUpdated}
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            These Terms of Service (&quot;Terms&quot;) govern your access to
            and use of the website located at{" "}
            {company.website} (the &quot;Site&quot;), operated by{" "}
            {company.name}
            {" "}LLC (&quot;SAMNKOSI,&quot; &quot;we,&quot; &quot;us,&quot;
            or &quot;our&quot;). By accessing or using the Site, you agree to
            be bound by these Terms.
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                1. Use of This Website
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                This Site is provided to share information about SAMNKOSI
                Technology Group&apos;s capabilities, leadership, and
                services, and to allow visitors to contact us. You agree to
                use the Site only for lawful purposes and in a manner that
                does not infringe the rights of, or restrict or inhibit the
                use of the Site by, any third party. You may not attempt to
                gain unauthorized access to the Site, its servers, or any
                systems connected to it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                2. Intellectual Property Rights
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Unless otherwise noted, all content on this Site — including
                text, graphics, logos, and images — is the property of
                SAMNKOSI Technology Group or its licensors and is protected
                by applicable intellectual property laws. You may view and
                print pages from the Site for personal, non-commercial
                reference, but you may not reproduce, distribute, or create
                derivative works from any content without our prior written
                consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                3. No Professional or Contractual Advice
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Content on this Site is provided for general informational
                purposes only and does not constitute legal, financial,
                technical, or professional advice, nor does it create any
                contractual relationship or obligation between you and
                SAMNKOSI. Any engagement for services is governed exclusively
                by a separate, signed agreement between SAMNKOSI and the
                applicable client or government entity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                4. Third-Party Links
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                This Site may contain links to third-party websites,
                including social media platforms. These links are provided
                for convenience only. We do not control and are not
                responsible for the content, privacy practices, or
                availability of any linked third-party site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                5. Contact Form Submissions
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                When you submit an inquiry through our contact form, you
                confirm that the information you provide is accurate and
                that you have the right to share it with us. Please do not
                submit classified, proprietary, or otherwise confidential
                information through the Site. See our{" "}
                <a
                  href="/privacy"
                  className="font-medium text-[var(--blue)] hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                for details on how submitted information is handled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                6. Disclaimer of Warranties
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                The Site is provided on an &quot;as is&quot; and &quot;as
                available&quot; basis, without warranties of any kind, either
                express or implied, including but not limited to warranties
                of merchantability, fitness for a particular purpose, or
                non-infringement. We do not warrant that the Site will be
                uninterrupted, error-free, or free of harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                7. Limitation of Liability
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                To the fullest extent permitted by applicable law, SAMNKOSI
                Technology Group shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or
                any loss of profits or data, arising out of or in connection
                with your use of, or inability to use, the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                8. Governing Law
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                These Terms are governed by and construed in accordance with
                the laws of the State of Maryland, without regard to its
                conflict of laws principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                9. Changes to These Terms
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We may update these Terms from time to time. The
                &quot;Last updated&quot; date at the top of this page
                reflects the most recent revision. Continued use of the Site
                after changes are posted constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                10. Contact Us
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Questions about these Terms can be directed to{" "}
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
