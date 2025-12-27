// ABOUTME: Grid layout for listings with "Load More" pagination
// ABOUTME: Client component that handles loading additional pages

"use client";

import { useState, useTransition } from "react";
import ListingCard from "./ListingCard";
import type { MlsListing } from "@/types/mls";

interface ListingsGridProps {
  initialListings: MlsListing[];
  initialTotal: number;
  initialHasMore: boolean;
  loadMoreAction: (offset: number) => Promise<{
    listings: MlsListing[];
    hasMore: boolean;
  }>;
}

export default function ListingsGrid({
  initialListings,
  initialTotal,
  initialHasMore,
  loadMoreAction,
}: ListingsGridProps) {
  const [listings, setListings] = useState(initialListings);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isPending, startTransition] = useTransition();

  const handleLoadMore = () => {
    startTransition(async () => {
      const result = await loadMoreAction(listings.length);
      setListings((prev) => [...prev, ...result.listings]);
      setHasMore(result.hasMore);
    });
  };

  return (
    <div>
      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-6">
        Showing {listings.length} of {initialTotal} homes
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={handleLoadMore}
            disabled={isPending}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Loading...
              </>
            ) : (
              "Load More Homes"
            )}
          </button>
        </div>
      )}

      {/* Empty state */}
      {listings.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">
            No homes found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
