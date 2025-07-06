import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    verification: {
      google: "ECDucOQdERyOKZRKFJg2lfebeUMOyRJ_7AajhOTGvgo",
    },
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://react-usekit.vercel.app",
      images: [],
      siteName: "react-usekit",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "",
      ...override.twitter,
    },
    alternates: {
      ...override.alternates,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development" || !process.env.VERCEL_URL
    ? new URL("http://localhost:3000")
    : new URL(`https://${process.env.VERCEL_URL}`);
