import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.react-usekit.com';
  const lastModified = new Date();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/installation`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/hooks`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/utilities`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/examples`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Hook pages
  const hooks = [
    'use-local-storage',
    'use-async',
    'use-click-outside',
    'use-debounce',
    'use-event-listener',
    'use-interval',
    'use-toggle',
    'use-window-size',
  ];

  const hookPages = hooks.map(hook => ({
    url: `${baseUrl}/docs/hooks/${hook}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Utility pages
  const utilities = [
    'capitalize',
    'truncate-text',
    'format-currency',
    'format-date',
    'is-empty',
    'deep-clone',
    'slugify',
    'generate-id',
  ];

  const utilityPages = utilities.map(utility => ({
    url: `${baseUrl}/docs/utilities/${utility}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...hookPages, ...utilityPages];
}
