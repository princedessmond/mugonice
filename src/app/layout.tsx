import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mugonice.com"),
  title: {
    default: "MugoNice | AI, Creative & Growth",
    template: "%s | MugoNice",
  },
  description:
    "MugoNice combines AI automation, standout web experiences, performance marketing, and brand strategy to help ambitious businesses grow smarter.",
  keywords: [
    "AI automation agency",
    "web design agency",
    "performance marketing",
    "brand strategy",
    "AI agents for business",
    "MugoNice",
  ],
  authors: [{ name: "MugoNice" }],
  creator: "MugoNice",
  publisher: "MugoNice",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "MugoNice",
    title: "MugoNice | Turn Bold Ideas Into Intelligent Growth",
    description:
      "AI automation, standout web experiences, performance marketing, and brand systems for ambitious businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MugoNice | AI, Creative & Growth",
    description:
      "Turn bold ideas into intelligent growth with AI, creative, and performance working as one.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070709",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
