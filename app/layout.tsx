import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { project, siteUrl } from "@/lib/data";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${project.name} | Premium 3BHK Flats — ${project.developer}`,
    template: `%s | ${project.name}`,
  },
  description: `${project.tagline} at ${project.location.area}. ${project.status.label}. Sizes: 1543, 1641, 1694 & 1726 sq.ft. ${project.financing.tagline}.`,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: project.name,
    title: `${project.name} | Premium 3BHK Flats`,
    description: project.tagline,
    images: [
      {
        url: "/images/elevation/elevation-1.jpeg",
        width: 1200,
        height: 630,
        alt: `${project.name} building elevation`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
