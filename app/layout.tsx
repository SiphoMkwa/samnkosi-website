import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { company } from "@/config/company";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samnkosi.com"),

  title: {
    default: "SAMNKOSI Technology Group",
    template: "%s | SAMNKOSI Technology Group",
  },

  description:
    "SAMNKOSI Technology Group delivers secure technology, cybersecurity, cloud engineering, DevSecOps, enterprise IT, and professional services for government, education, and commercial organizations.",

  keywords: [
    "Cybersecurity",
    "Cloud Engineering",
    "DevSecOps",
    "Enterprise IT",
    "Artificial Intelligence",
    "Automation",
    "Federal Contractor",
    "Technology Consulting",
    "SAMNKOSI",
    "Maryland",
  ],

  authors: [
    {
      name: "SAMNKOSI Technology Group",
    },
  ],

  creator: "SAMNKOSI Technology Group",

  publisher: "SAMNKOSI Technology Group",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "SAMNKOSI Technology Group",
    description: "Engineering Trust. Delivering Mission Success.",

    url: "https://samnkosi.com",

    siteName: "SAMNKOSI Technology Group",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SAMNKOSI Technology Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SAMNKOSI Technology Group",
    description: "Engineering Trust. Delivering Mission Success.",
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SAMNKOSI Technology Group",
  alternateName: "SAMNKOSI",
  url: "https://samnkosi.com",
  logo: "https://samnkosi.com/logos/icon.png",
  description:
    "SAMNKOSI Technology Group is a Maryland based government contractor delivering secure technology, cybersecurity, cloud engineering, and professional services for federal, state, local, and commercial organizations.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "MD",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phone.href,
    contactType: "customer service",
    email: company.emails.general,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
