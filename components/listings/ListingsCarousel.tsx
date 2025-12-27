// ABOUTME: Horizontal carousel of listing cards with Airbnb/Zillow-inspired UX
// ABOUTME: Server component that fetches listings, wraps with client navigation

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import ListingCard from "./ListingCard";
import CarouselNav from "./CarouselNav";
import { getListings, ACCESS_REALTY_OFFICE_MLS_IDS } from "@/lib/listings";
import type { ListingsFilter } from "@/types/mls";

interface ListingsCarouselProps {
  title?: string;
  subtitle?: string;
  officeIds?: string[];
  agentKey?: string;
  limit?: number;
  showViewAll?: boolean;
  viewAllHref?: string;
}

export default async function ListingsCarousel({
  title = "Our Current Listings",
  subtitle,
  officeIds = ACCESS_REALTY_OFFICE_MLS_IDS,
  agentKey,
  limit = 12,
  showViewAll = true,
  viewAllHref = "/homes-for-sale",
}: ListingsCarouselProps) {
  const filter: ListingsFilter = {
    officeIds,
    agentKey,
    status: "Active",
  };

  const { listings, total } = await getListings(filter, limit, 0);

  if (listings.length === 0) {
    return null; // Don't render section if no listings
  }

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground mt-2 text-lg">{subtitle}</p>
            )}
            <p className="text-sm text-muted-foreground mt-1">
              {total} {total === 1 ? "home" : "homes"} available
            </p>
          </div>

          {/* Desktop View All */}
          {showViewAll && (
            <Link
              href={viewAllHref}
              className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-colors"
            >
              View all homes
              <HiArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {/* Carousel with client-side navigation */}
        <CarouselNav>
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] snap-start"
            >
              <ListingCard listing={listing} />
            </div>
          ))}
        </CarouselNav>

        {/* Mobile View All */}
        {showViewAll && (
          <div className="md:hidden mt-8 text-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              View all homes
              <HiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
