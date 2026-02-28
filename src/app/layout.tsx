import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import { Playfair_Display, Montserrat, Plus_Jakarta_Sans } from "next/font/google";

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
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}