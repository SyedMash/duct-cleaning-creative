import type { Metadata } from "next";
import { Inter, Manrope, Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
  title: "Airo Fix",
  description: "A duct cleaning service company",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
