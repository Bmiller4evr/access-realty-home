// ABOUTME: Staff pages layout with simplified header
// ABOUTME: Uses StaffHeader (no Solutions/How It Works nav links)
// ABOUTME: Includes Calendly widget scripts for scheduling

import Script from "next/script";
import StaffHeader from "@/components/StaffHeader";
import Footer from "@/components/Footer";

export default function StaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Calendly Widget */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <StaffHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
