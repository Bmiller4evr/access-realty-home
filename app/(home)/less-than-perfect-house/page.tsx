// ABOUTME: Hybrid page for sellers with homes needing repairs/updates
// ABOUTME: Highlights Cash, 2 Payment, Price Launch, Uplist, and Seller Finance solutions

import Link from "next/link";
import { HiWrenchScrewdriver, HiCheck, HiArrowRight } from "react-icons/hi2";

const solutions = [
  {
    name: "Cash Offer",
    description: "Skip repairs entirely. We buy homes in any condition — foundation issues, roof problems, outdated everything.",
    href: "https://metroplexhomebuyers.com",
    external: true,
  },
  {
    name: "2 Payment",
    description: "Sell as-is with a large upfront payment and additional payments over time. No repairs required.",
    href: "/solutions/2-payment",
    external: false,
  },
  {
    name: "Price Launch",
    description: "Strategic pricing that accounts for condition. Attract investors and buyers looking for value opportunities.",
    href: "/solutions/price-launch",
    external: false,
  },
  {
    name: "Uplist",
    description: "Let our renovation team handle updates before listing. We front the costs — you pay from sale proceeds.",
    href: "/solutions/uplist",
    external: false,
  },
  {
    name: "Seller Finance",
    description: "Sell as-is to buyers who may not qualify for traditional financing. Receive monthly payments with interest.",
    href: "/solutions/seller-finance",
    external: false,
  },
];

const conditions = [
  "Outdated kitchens or bathrooms",
  "Roof or foundation issues",
  "Deferred maintenance",
  "Cosmetic wear and tear",
  "Inherited properties",
  "Tenant damage",
];

export default function LessThanPerfectHousePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary/20 mb-6">
              <HiWrenchScrewdriver className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              House Less Than Perfect?
            </h1>
            <p className="text-xl text-muted-foreground">
              Whether your home needs minor updates or major repairs, we have options that work.
              You don&apos;t have to fix everything yourself — or fix anything at all.
            </p>
          </div>
        </div>
      </section>

      {/* Common Conditions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">
              We Work With Homes That Have:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {conditions.map((condition) => (
                <div key={condition} className="flex items-center gap-2 text-muted-foreground">
                  <HiCheck className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Your Options
            </h2>

            <div className="space-y-4">
              {solutions.map((solution) => (
                <div
                  key={solution.name}
                  className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-primary mb-1">{solution.name}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>

                  {solution.external ? (
                    <a
                      href={solution.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors whitespace-nowrap"
                    >
                      Learn More
                      <HiArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href={solution.href}
                      className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors whitespace-nowrap"
                    >
                      Learn More
                      <HiArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Not Sure Which Option Fits?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Answer a few questions about your property and goals, and we&apos;ll recommend the best path forward.
          </p>
          <Link
            href="/selling-plan"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary-light transition-colors"
          >
            Find Your Selling Plan
            <HiArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
