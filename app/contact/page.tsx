import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <Container>
          <h1 className="text-5xl font-bold text-[var(--navy)]">Contact Us</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Whether you're exploring a new technology initiative, seeking a
            trusted delivery partner, or looking to strengthen your
            organization's cybersecurity and digital capabilities, we'd welcome
            the opportunity to connect.
          </p>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                Executive Leadership
              </h2>

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--navy)]">
                    Chief Executive Officer
                  </h3>

                  <p className="mt-1 font-medium text-gray-800">
                    Ayola Mgqolozana
                  </p>

                  <p className="text-gray-600">amgqolozana@samnkosi.com</p>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Provides the strategic leadership and executive direction of
                    SAMNKOSI Technology Group, guiding the company's vision,
                    growth, partnerships, and long-term success.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--navy)]">
                    Chief Operating Officer
                  </h3>

                  <p className="mt-1 font-medium text-gray-800">
                    Sipho Mkhwanazi
                  </p>

                  <p className="text-gray-600">smkhwanazi@samnkosi.com</p>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Oversees operational execution, technology delivery, and
                    organizational performance, ensuring strategic objectives
                    are translated into measurable client outcomes under the
                    leadership and direction of the Chief Executive Officer.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--navy)]">
                    General Enquiries
                  </h3>

                  <p className="text-gray-600">info@samnkosi.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--navy)]">
                    Website
                  </h3>

                  <p className="text-gray-600">www.samnkosi.com</p>
                </div>
              </div>
            </section>

            {/* Contact Form Placeholder */}
            <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                Get in Touch
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We're currently preparing our secure online enquiry portal.
                Until then, please contact our executive team or send your
                enquiry to our general mailbox, and we'll ensure it reaches the
                appropriate team promptly.
              </p>

              <div className="mt-8 rounded-xl bg-[var(--gray)] p-6">
                <p className="font-medium text-[var(--navy)]">
                  Primary Contact
                </p>

                <p className="mt-2 text-gray-700">info@samnkosi.com</p>

                <p className="mt-4 text-sm text-gray-600">
                  We aim to respond to all enquiries within one business day.
                </p>
              </div>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
