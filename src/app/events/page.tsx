import EventsHero from "@/components/events/EventsHero";
import EventTypesSection from "@/components/events/EventTypesSection";
import EventExperienceSection from "@/components/events/EventExperienceSection";
import EventEnquiryForm from "@/components/events/EventEnquiryForm";
import EventGallerySection from "@/components/events/EventGallerySection";
import EventCTA from "@/components/events/EventCTA";

export default function EventsPage() {
  return (
    <main>
      <EventsHero />
      <EventTypesSection />
      <EventExperienceSection />
      <EventGallerySection />
      <EventEnquiryForm /> 
      <EventCTA />
    </main>
  );
}