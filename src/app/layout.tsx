import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SaaS Landing Page Design",
  description: "Premium SaaS landing page design with modern UI/UX",
  keywords: ["SaaS", "Landing Page", "Design", "UI/UX", "Web Design"],
  authors: [{ name: "Liftoff Web" }],
  openGraph: {
    title: "SaaS Landing Page Design",
    description: "Premium SaaS landing page design with modern UI/UX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Landing Page Design",
    description: "Premium SaaS landing page design with modern UI/UX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={inter.variable}>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
  );
}

