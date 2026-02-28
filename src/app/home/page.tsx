import HeroSlider from "@/components/home/HeroSlider";
import ExperiencesSection from "@/components/home/ExperiencesSection";
import AboutVrindavan from "@/components/home/AboutVrindavan";
import ExplorStyle from "@/components/home/ExplorStyle";
import InstagramGallery from "@/components/about/InstagramGallery";
import ContactForm from "@/components/home/ContactForm";



export default function HomePage() {
  return (
     <>
      <HeroSlider />
      <ExperiencesSection />
      <AboutVrindavan/>
      <ExplorStyle/>
      <InstagramGallery/>
      <ContactForm/>
    
    </>
  );
}