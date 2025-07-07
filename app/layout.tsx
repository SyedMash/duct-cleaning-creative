import type { Metadata } from "next";
import { Inter, Manrope, Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Smooth from "@/components/Smooth";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import { Toaster } from "@/components/ui/sonner";
import GlobalLoader from "@/components/GlobalLoader";
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
  title: "Airo Fix | Home",
  description: "Breathe in the Difference",
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
