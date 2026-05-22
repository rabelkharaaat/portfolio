import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// ── Fonts (loaded via next/font for zero layout shift) ──
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// ── SEO / Open Graph metadata (customize per deployment) ──
const SITE_URL = "https://mohamedafkir.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mohamed Afkir — Web Designer & Ecommerce Developer",
  description:
    "Building digital experiences for ambitious businesses. AI-powered design & marketing for Dubai SMBs.",
  keywords: [
    "web designer",
    "ecommerce developer",
    "Shopify",
    "Dubai",
    "AI marketing",
    "Mohamed Afkir",
  ],
  authors: [{ name: "Mohamed Afkir" }],
  creator: "Mohamed Afkir",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Mohamed Afkir — Web Designer & Ecommerce Developer",
    description:
      "Building digital experiences for ambitious businesses. AI-powered design & marketing for Dubai SMBs.",
    siteName: "Mohamed Afkir",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Afkir — Web Designer & Ecommerce Developer",
    description:
      "Building digital experiences for ambitious businesses. AI-powered design & marketing for Dubai SMBs.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-base font-sans text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
