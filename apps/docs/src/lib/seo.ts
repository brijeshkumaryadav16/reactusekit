import type { Metadata } from "next";

export function generateFaviconMetadata(): Metadata["icons"] {
  return {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/favicon.svg", color: "#3b82f6" }],
  };
}

export function generateSEOMetadata(): Metadata {
  const title = "react-usekit - Production-Ready React Hooks & Utilities CLI";
  const description =
    "Instantly scaffold production-ready React hooks and utilities into your project with a single command. No dependencies, no boilerplate—just proven, reusable code.";
  const url = "https://react-usekit.vercel.app";
  const siteName = "react-usekit";

  return {
    metadataBase: new URL(url),
    title: {
      template: "%s | react-usekit",
      default: title,
    },
    description,
    verification: {
      google: "ECDucOQdERyOKZRKFJg2lfebeUMOyRJ_7AajhOTGvgo",
    },
    keywords: [
      "react-usekit",
      "react usekit",
      "React CLI",
      "React hooks CLI",
      "React utilities CLI",
      "React hooks generator",
      "React hooks",
      "React utilities",
      "useLocalStorage",
      "useDebounce",
      "useClickOutside",
      "TypeScript hooks",
      "JavaScript hooks",
      "React development tools",
      "React productivity",
      "copy paste React hooks",
      "React hook library",
      "React utility functions",
      "frontend development",
      "zero dependencies",
      "production ready hooks",
      "React scaffolding",
      "React boilerplate",
      "custom React hooks",
    ],
    authors: [{ name: "react-usekit team", url }],
    creator: "react-usekit",
    publisher: "react-usekit",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "react-usekit - Production-Ready React Hooks & Utilities CLI",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
      creator: "@reactusekit", // Update with your actual Twitter handle
    },
    icons: generateFaviconMetadata(),
    manifest: "/manifest.json",
    other: {
      "google-site-verification": "your-google-verification-code", // Add your actual verification code
    },
  };
}
