import type { Metadata } from "next";

import EventsHero from "@/components/events/EventsHero";
import EventTypesSection from "@/components/events/EventTypesSection";
import EventExperienceSection from "@/components/events/EventExperienceSection";
import EventEnquiryForm from "@/components/events/EventEnquiryForm";
import EventGallerySection from "@/components/events/EventGallerySection";
import EventCTA from "@/components/events/EventCTA";

// ✅ Page-Level SEO for Events
export const metadata: Metadata = {
  title: "Events Vrindavan Farms | Farmhouse in Badlapur, Maharashtra",
  description:
    "Book Vrindavan Farms in Badlapur for weddings, receptions, engagements, haldi, mehendi, birthdays and corporate events. Large green lawn with parking and decoration allowed.",
  keywords: [
    "Wedding Lawn in Badlapur",
    "Event Venue Badlapur",
    "Birthday Party Venue Badlapur",
    "Corporate Event Lawn Maharashtra",
    "Reception Venue Badlapur",
  ],
};

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