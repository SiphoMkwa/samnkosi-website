import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
