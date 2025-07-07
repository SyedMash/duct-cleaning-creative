import type { Metadata } from "next";
import { Inter, Manrope, Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Smooth from "@/components/Smooth";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import { Toaster } from "@/components/ui/sonner";
import Preloader from "@/components/PreLoader";

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
  title: "Professional Duct Cleaning | AIRO FIX",
  description:
    "Breathe easier with eco-friendly, precision duct cleaning by AIRO FIX. Certified technicians. Real results.",
  keywords: [
    "duct cleaning",
    "air quality",
    "eco-friendly",
    "dryer vent cleaning",
    "residential duct service",
  ],
  openGraph: {
    title: "AIRO FIX – Clean Air Starts Here",
    description: "We clean ducts like no one else. Discover the difference.",
    images: ["/og-image.jpg"], // 1200x630 preferred
  },
  alternates: {
    canonical: "https://www.airofixductclean.com/book",
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
          <Toaster />
          <ScrollTop />
          <Footer />
        </Smooth>
      </body>
    </html>
  );
}
