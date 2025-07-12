import type { Metadata } from "next";
import { Inter, Manrope, Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Smooth from "@/components/Smooth";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import { Toaster } from "@/components/ui/sonner";
import Preloader from "@/components/PreLoader";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "200",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: "variable",
});

const firaSans = Fira_Sans({
  variable: "--font-fira_sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "AIRO FIX | Professional Duct Cleaning",
  description:
    "Breathe easier with eco-friendly, precision duct cleaning by AIRO FIX. Certified technicians. Real results.",
  keywords: [
    "duct cleaning",
    "air quality",
    "eco-friendly",
    "dryer vent cleaning",
    "residential duct service",
  ],
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "AIRO FIX – Clean Air Starts Here",
    description: "We clean ducts like no one else. Discover the difference.",
    url: "https://www.airofixhomesolution.com",
    siteName: "AIRO FIX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.airofixhomesolution.com/images/og-image.jpg",
        alt: "AIRO FIX",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.airofixhomesolution.com/book",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${manrope.variable} ${firaSans.variable} bg-brand-black text-brand-offwhite antialiased`}
      >
        <Smooth>
          <Navbar />
          <Preloader />
          {children}
          <GoogleAnalytics gaId="G-GPWQS979EH" />
          <Toaster />
          <ScrollTop />
          <Footer />
        </Smooth>
      </body>
    </html>
  );
}
