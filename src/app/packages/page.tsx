import PackagesHero from "@/components/packages/PackagesHero";
import PackageGrid from "@/components/packages/PackageGrid";
import AmenitiesSection from "@/components/packages/AmenitiesSection";
import PoliciesSection from "@/components/packages/PoliciesSection";
import PackagesCTA from "@/components/packages/PackagesCTA";

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