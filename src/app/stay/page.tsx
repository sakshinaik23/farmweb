import type { Metadata } from "next";

import AboutHero from "@/components/stay/AboutHero";
import StayIntro from "@/components/stay/StayIntro";
import StayRooms from "@/components/stay/StayRooms";
import StayIncludes from "@/components/stay/StayIncludes";
import StayGuidelines from "@/components/stay/StayGuidelines";
import StayPackagesSnapshot from "@/components/stay/StayPackagesSnapshot";
import StayBookingCTA from "@/components/stay/StayBookingCTA";

// ✅ Page-Level SEO
export const metadata: Metadata = {
  title: "Stay Vrindavan Farms | Farmhouse in Badlapur, Maharashtra",
  description:
    "Stay in our 5 premium farmhouse rooms at Vrindavan Farms in Badlapur. Clean attached washrooms, peaceful greenery, comfortable family stay and group accommodation.",
  keywords: [
    "Farm Stay Rooms Badlapur",
    "Premium Rooms in Badlapur",
    "Family Stay Badlapur",
    "Farmhouse Stay Near Mumbai",
    "Vrindavan Farms Rooms",
  ],
};

export default function StayPage() {
  return (
    <>
      <AboutHero />
      <StayIntro />
      <StayRooms />
      <StayIncludes />
      <StayGuidelines />
      <StayPackagesSnapshot />
      <StayBookingCTA />
    </>
  );
}