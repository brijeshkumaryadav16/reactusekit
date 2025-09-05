import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { baseUrl, createMetadata } from "@/lib/metadata";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata({
  title: {
    default: "ReactUseKit",
    template: "%s | ReactUseKit",
  },
  description:
    "React Hooks & Helpers Collection - Copy, Paste, or Install with shadcn CLI",
  metadataBase: baseUrl,
  alternates: {
    canonical: "/",
  },
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
