// ABOUTME: Homepage for Access Realty marketing site
// ABOUTME: Serves as the main landing page with hero, testimonials, and CTAs

import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FlipCards from "@/components/FlipCards";
import Benefits from "@/components/Benefits";
import FinalCTA from "@/components/FinalCTA";
import ListingsCarousel from "@/components/listings/ListingsCarousel";

// Revalidate listings every hour
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <ListingsCarousel
        title="Our Current Listings"
        subtitle="Browse homes represented by Access Realty"
      />
      <FlipCards />
      <Benefits />
      <FinalCTA />
    </>
  );
}
