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
import Script from "next/script";

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
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '772180308506240');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* ✅ Noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=772180308506240&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
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
