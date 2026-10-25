import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thoth Sparkz — Intelligence That Sparks Transformation",
  description:
    "Thoth Sparkz is a brand, digital and growth agency. We build brands, digital experiences and growth systems that move businesses forward.",
  keywords: ["branding", "digital", "growth marketing", "transformation", "Thoth Sparkz"],
  openGraph: {
    title: "Thoth Sparkz — Intelligence That Sparks Transformation",
    description: "We build brands, digital experiences and growth systems that move businesses forward.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sora.variable}>
      <body>{children}</body>
    </html>
  );
}
