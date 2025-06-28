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
  const title = "react-usekit - Essential React Hooks & Utilities";
  const description =
    "The essential collection of 8 React hooks and 8 utility functions every developer needs. Production-ready, zero dependencies, TypeScript first. Copy, paste, own your code.";
  const url = "https://react-usekit.vercel.app";
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "react-usekit";

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
      "React",
      "hooks",
      "utilities",
      "TypeScript",
      "JavaScript",
      "frontend",
      "development",
      "production-ready",
      "zero-dependencies",
      "copy-paste",
      "useLocalStorage",
      "useAsync",
      "useDebounce",
      "React components",
      "developer tools",
      "UI library",
      "utility functions",
      "custom hooks",
    ],
    authors: [{ name: "react-usekit", url }],
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
          alt: "react-usekit - Essential React Hooks & Utilities",
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
