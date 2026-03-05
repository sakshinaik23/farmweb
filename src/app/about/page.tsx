import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import SignatureExperiences from "@/components/about/SignatureExperiences";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import FarmStats from "@/components/about/FarmStats";
import FarmTestimonials from "@/components/about/FarmTestimonials";
import FarmCTA from "@/components/about/FarmCTA";
import InstagramGallery from "@/components/about/InstagramGallery";

// ✅ Page-Level SEO
export const metadata: Metadata = {
  title: "About Vrindavan Farms | Farmhouse in Badlapur, Maharashtra",
  description:
    "Discover the story of Vrindavan Farms – a serene farmhouse getaway in Badlapur offering premium stays, wedding lawn, delicious homemade food and unforgettable celebrations.",
  keywords: [
    "About Vrindavan Farms",
    "Farmhouse in Badlapur",
    "Nature Stay Maharashtra",
    "Wedding Lawn Badlapur",
    "Farm Stay Near Mumbai",
  ],
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <SignatureExperiences />
      <WhyChooseUs />
      <FarmStats />
      <FarmTestimonials />
      <FarmCTA />
      <InstagramGallery />
    </>
  );
}