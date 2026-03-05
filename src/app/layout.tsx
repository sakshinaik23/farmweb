import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Preloader from "@/components/Preloader";

import { Playfair_Display, Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";


const playfair = Playfair_Display({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});


export const metadata: Metadata = {
  title: "Vrindavan Farms | Nature Stay & Celebration Lawn in Badlapur",
  description:
    "Vrindavan Farms is a peaceful farmhouse getaway in Badlapur, Maharashtra offering premium stay, wedding lawn, birthday parties, corporate events, day picnic and authentic homemade food.",
  keywords: [
    "Vrindavan Farms",
    "Farmhouse in Badlapur",
    "Wedding Lawn Badlapur",
    "Nature Stay Badlapur",
    "Birthday Party Venue Badlapur",
    "Day Picnic Badlapur",
    "Farm Stay Maharashtra",
  ],
  authors: [{ name: "Vrindavan Farms" }],
  creator: "Vrindavan Farms",
  metadataBase: new URL("https://vrindavanfarm.netlify.app"),

  openGraph: {
    title: "Vrindavan Farms | Nature Stay & Celebration Destination",
    description:
      "Escape the city and enjoy peaceful farmhouse stay, wedding lawn, birthday parties and corporate events at Vrindavan Farms, Badlapur.",
    url: "https://vrindavanfarm.com",
    siteName: "Vrindavan Farms",
    images: [
      {
        url: "/images/cta-bg.webp", 
        width: 1200,
        height: 630,
        alt: "Vrindavan Farms Badlapur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vrindavan Farms | Nature Stay & Wedding Lawn",
    description:
      "Premium farm stay and wedding lawn in Badlapur, Maharashtra.",
    images: ["/images/cta-bg.webp"],
  },

  
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${playfair.variable}
          ${montserrat.variable}
          ${jakarta.variable}
          bg-[#f4f1ea]
          flex
          flex-col
          min-h-screen
          font-[var(--font-montserrat)]
        `}
      >
        <Preloader>
          <Navbar />

          <main className="flex-grow">{children}</main>

          <Footer />
        </Preloader>
      </body>
    </html>
  );
}