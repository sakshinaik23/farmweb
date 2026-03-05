import type { Metadata } from "next";

import Hero from "@/components/experiences/Hero";
import Overview from "@/components/experiences/IntroSection";
import ExperienceCards from "@/components/experiences/ExperienceCards";
import DetailSection from "@/components/experiences/DetailSection";
import CTA from "@/components/experiences/CTA";
import { experiences } from "@/data/experiences";

// ✅ Page-Level SEO
export const metadata: Metadata = {
  title: "Experiences Vrindavan Farms | Farmhouse in Badlapur, Maharashtra",
  description:
    "Enjoy unforgettable farm stay experiences at Vrindavan Farms in Badlapur including swimming pool, rain dance, indoor & outdoor games, day picnic and nature activities.",
  keywords: [
    "Farm Stay Experiences Badlapur",
    "Swimming Pool in Badlapur",
    "Rain Dance Badlapur",
    "Day Picnic Badlapur",
    "Nature Activities Maharashtra",
  ],
};

export default function ExperiencesPage() {
  return (
    <main className="bg-white text-gray-800">
      <Hero />
      <Overview />

      {/* Featured Grid */}
      <ExperienceCards items={experiences} />

      {/* Detailed Visual Sections */}
      {experiences.map((item, index) => (
        <DetailSection
          key={item.id}
          title={item.title}
          desc={item.desc}
          images={item.images}
          highlights={item.highlights}
          reverse={index % 2 !== 0}
        />
      ))}

      <CTA />
    </main>
  );
}