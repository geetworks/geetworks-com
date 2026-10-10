import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Geetworks — We Build Software That Ships",
  description:
    "Geetworks is a software development company crafting stunning websites, mobile apps, and cloud products. Web development, mobile apps, UI/UX design, cloud & DevOps, AI/ML solutions.",
  keywords: [
    "software development company",
    "web development",
    "mobile app development",
    "UI UX design",
    "cloud devops",
    "AI ML solutions",
    "Geetworks",
  ],
  authors: [{ name: "Geetworks" }],
  openGraph: {
    title: "Geetworks — We Build Software That Ships",
    description:
      "Stunning websites, mobile apps, and cloud products — designed, engineered, and shipped by Geetworks.",
    url: "https://geetworks.com",
    siteName: "Geetworks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geetworks — We Build Software That Ships",
    description:
      "Stunning websites, mobile apps, and cloud products — designed, engineered, and shipped by Geetworks.",
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
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
