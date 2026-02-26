import HeroSlider from "@/components/home/HeroSlider";
import ExperiencesSection from "@/components/home/ExperiencesSection";
import AboutVrindavan from "@/components/home/AboutVrindavan";

import ExplorStyle from "@/components/home/ExplorStyle";
import GalleryCTA from "@/components/home/GalleryCTA";


export default function Home() {
  return (
     <>
      <HeroSlider />
      <ExperiencesSection />
      <AboutVrindavan/>
      <ExplorStyle/>
      <GalleryCTA/>
    
    </>
  );
}