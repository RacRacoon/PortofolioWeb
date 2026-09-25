import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Orbitron, Bebas_Neue } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-wide",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const bebas = Bebas_Neue({
  variable: "--font-label",
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sultan Syafiq Rakan — Portfolio",
  description:
    "Portfolio Sultan Syafiq Rakan — Embedded Systems, IoT, dan Machine Learning.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${orbitron.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
