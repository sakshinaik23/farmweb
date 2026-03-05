import type { Metadata } from "next";

import PackagesHero from "@/components/packages/PackagesHero";
import PackageGrid from "@/components/packages/PackageGrid";
import AmenitiesSection from "@/components/packages/AmenitiesSection";
import PoliciesSection from "@/components/packages/PoliciesSection";
import PackagesCTA from "@/components/packages/PackagesCTA";

// ✅ Page-Level SEO
export const metadata: Metadata = {
  title: "Packages Vrindavan Farms | Farmhouse in Badlapur, Maharashtra",
  description:
    "Explore affordable farm stay packages at Vrindavan Farms in Badlapur including group stay, couple package and day picnic with breakfast, lunch, hi-tea and dinner included.",
  keywords: [
    "Farm Stay Packages Badlapur",
    "Day Picnic Package Badlapur",
    "Group Farmhouse Package",
    "Couple Farm Stay Package Maharashtra",
    "Vrindavan Farms Pricing",
  ],
};

export default function PackagesPage() {
  return (
    <main>
      <PackagesHero />
      <PackageGrid />
      <AmenitiesSection />
      <PoliciesSection />
      <PackagesCTA />
    </main>
  );
}