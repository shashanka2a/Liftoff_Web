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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://liftoff-web.vercel.app'),
  title: {
    default: "Liftoff - Premium SaaS Design & Development Agency",
    template: "%s | Liftoff"
  },
  description: "Transform your bold ideas into production-ready products. Liftoff delivers exceptional SaaS design, UI/UX, and development services that users love and investors notice. From concept to launch in weeks.",
  keywords: [
    "SaaS design",
    "UI/UX design",
    "Product design",
    "Web design",
    "Brand identity",
    "Design system",
    "Startup design",
    "SaaS development",
    "Design agency",
    "Product launch",
    "User experience",
    "Interface design"
  ],
  authors: [{ name: "Liftoff", url: "https://liftoff-web.vercel.app" }],
  creator: "Liftoff",
  publisher: "Liftoff",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://liftoff-web.vercel.app',
    siteName: "Liftoff",
    title: "Liftoff - Premium SaaS Design & Development Agency",
    description: "Transform your bold ideas into production-ready products. From concept to launch in weeks, not months.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Liftoff - Premium SaaS Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftoff - Premium SaaS Design & Development Agency",
    description: "Transform your bold ideas into production-ready products. From concept to launch in weeks.",
    images: ["/og-image.png"],
    creator: "@liftoff",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://liftoff-web.vercel.app',
  },
  category: "Design Agency",
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

