// ABOUTME: Redirect page for Direct List yard sign QR codes
// ABOUTME: Serves OG tags for social sharing, then redirects to /direct-list with UTM tracking

import { Metadata } from "next";
import RedirectClient from "./redirect-client";

export const metadata: Metadata = {
  title: "Direct List by Access Realty",
  description: "Get full MLS exposure while avoiding full MLS fees, without sacrificing dedicated support to sell smarter.",
  openGraph: {
    title: "Direct List by Access Realty",
    description: "Get full MLS exposure while avoiding full MLS fees, without sacrificing dedicated support to sell smarter.",
    images: [
      {
        url: "https://access.realty/direct-list-logo.png",
        width: 2500,
        height: 659,
        alt: "Direct List",
      },
    ],
    type: "website",
    url: "https://access.realty/dl",
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct List by Access Realty",
    description: "Get full MLS exposure while avoiding full MLS fees, without sacrificing dedicated support to sell smarter.",
    images: ["https://access.realty/direct-list-logo.png"],
  },
};

export default function DirectListRedirect() {
  return <RedirectClient />;
}
