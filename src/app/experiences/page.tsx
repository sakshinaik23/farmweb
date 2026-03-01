import Hero from "@/components/experiences/Hero";
import Overview from "@/components/experiences/IntroSection";
import ExperienceCards from "@/components/experiences/ExperienceCards";
import DetailSection from "@/components/experiences/DetailSection";
import CTA from "@/components/experiences/CTA";
import { experiences } from "@/data/experiences";

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
          images={item.images}   // ✅ FIXED
          highlights={item.highlights}
          reverse={index % 2 !== 0}
        />
      ))}

      <CTA />
    </main>
  );
}