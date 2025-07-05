import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://react-usekit.vercel.app";
  const lastModified = new Date();

  // Hook pages
  const hooks = [
    "use-boolean",
    "use-click-outside",
    "use-debounce-value",
    "use-debounce-fun",
    "use-event-listener",
    "use-interval",
    "use-is-mobile",
    "use-isomorphic-layout-effect",
    "use-local-storage",
    "use-timeout",
  ];

  // Utility pages
  const utils = [
    "capitalize",
    "deep-clone",
    "format-currency",
    "format-date",
    "generate-id",
    "is-empty",
    "is-url-valid",
    "slugify",
    "truncate-text",
  ];

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Hook pages
  const hookPages = hooks.map((hook) => ({
    url: `${baseUrl}/docs/hooks/${hook}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Utility pages
  const utilPages = utils.map((util) => ({
    url: `${baseUrl}/docs/utils/${util}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...hookPages, ...utilPages];
}
