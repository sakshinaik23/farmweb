import AboutHero from "@/components/stay/AboutHero";
import StayIntro from "@/components/stay/StayIntro";
import StayRooms from "@/components/stay/StayRooms";
import StayIncludes from "@/components/stay/StayIncludes";
import StayGuidelines from "@/components/stay/StayGuidelines";
import StayPackagesSnapshot from "@/components/stay/StayPackagesSnapshot";
import StayBookingCTA from "@/components/stay/StayBookingCTA";

export default function HomePage() {
  return (
    <>
    <AboutHero/>
    <StayIntro/>
    <StayRooms/>
    <StayIncludes/>
    <StayGuidelines/>
    <StayPackagesSnapshot/>
    <StayBookingCTA/>
    </>
  );
}