import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import { Playfair_Display, Montserrat } from "next/font/google";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}