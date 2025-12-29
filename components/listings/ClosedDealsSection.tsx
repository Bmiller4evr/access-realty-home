// ABOUTME: Server component wrapper for closed deals map
// ABOUTME: Fetches data and renders map with stats

import { getClosedDeals, formatPrice } from "@/lib/listings";
import ClosedDealsMap from "./ClosedDealsMap";

interface ClosedDealsSectionProps {
  agentMlsId: string;
  agentName: string;
}

export default async function ClosedDealsSection({
  agentMlsId,
  agentName,
}: ClosedDealsSectionProps) {
  const deals = await getClosedDeals(agentMlsId);

  if (deals.length === 0) {
    return null; // Don't render section if no closed deals
  }

  // Calculate stats by side
  const listingDeals = deals.filter((d) => d.side === "listing");
  const buyerDeals = deals.filter((d) => d.side === "buyer");

  const listingVolume = listingDeals.reduce(
    (sum, d) => sum + (d.list_price || 0),
    0
  );
  const buyerVolume = buyerDeals.reduce(
    (sum, d) => sum + (d.list_price || 0),
    0
  );

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold text-muted-foreground tracking-widest mb-2">
            TRACK RECORD
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Closed Deals
          </h2>
          <div className="flex flex-col sm:flex-row sm:gap-6 text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">{listingDeals.length}</span> homes sold • {formatPrice(listingVolume)}
            </p>
            <p>
              <span className="font-semibold text-foreground">{buyerDeals.length}</span> homes bought • {formatPrice(buyerVolume)}
            </p>
          </div>
        </div>

        <ClosedDealsMap deals={deals} agentName={agentName} />
      </div>
    </section>
  );
}
