import type { Metadata } from "next";
import "./globals.css";

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
    "South Africa",
  ],

  authors: [
    {
      name: "SAMNKOSI Technology Group",
    },
  ],

  creator: "SAMNKOSI Technology Group",

  publisher: "SAMNKOSI Technology Group",

  openGraph: {
    title: "SAMNKOSI Technology Group",
    description: "Engineering Trust. Delivering Mission Success.",

    url: "https://samnkosi.com",

    siteName: "SAMNKOSI Technology Group",

    locale: "en_US",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
