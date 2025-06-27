export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "react-usekit",
    description: "Essential React Hooks & Utilities for modern web development",
    url: "https://react-usekit.vercel.app",
    logo: "https://react-usekit.vercel.app/favicon.svg",
    sameAs: [
      "https://github.com/brijeshkumaryadav16/react-usekit",
      "https://www.npmjs.com/package/react-usekit",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "react-usekit",
    description: "Essential React Hooks & Utilities",
    url: "https://www.react-usekit.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.react-usekit.vercel.app/docs?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateSoftwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "react-usekit",
    description:
      "The essential collection of 8 React hooks and 8 utility functions every developer needs. Production-ready, zero dependencies, TypeScript first.",
    url: "https://www.react-usekit.vercel.app",
    downloadUrl: "https://www.npmjs.com/package/react-usekit",
    softwareVersion: "1.0.0", // Update with actual version
    programmingLanguage: ["TypeScript", "JavaScript"],
    operatingSystem: "Any",
    applicationCategory: "DeveloperApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "react-usekit",
    },
    keywords:
      "React, hooks, utilities, TypeScript, JavaScript, frontend, development",
  };
}
