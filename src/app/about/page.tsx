import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import SignatureExperiences from "@/components/about/SignatureExperiences";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import FarmStats from "@/components/about/FarmStats";
import FarmTestimonials from "@/components/about/FarmTestimonials";

import FarmCTA from "@/components/about/FarmCTA";
import InstagramGallery from "@/components/about/InstagramGallery";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <SignatureExperiences/>
      <WhyChooseUs/>
      <FarmStats/>
      <FarmTestimonials/>
   
      <FarmCTA/>
      <InstagramGallery/>
    </>
  );
}