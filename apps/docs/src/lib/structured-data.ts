export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "react-usekit",
    description: "Essential React Hooks & Utilities for modern web development",
    url: "https://www.react-usekit.com",
    logo: "https://www.react-usekit.com/favicon.svg",
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
    url: "https://www.react-usekit.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.react-usekit.com/docs?search={search_term_string}",
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
    url: "https://www.react-usekit.com",
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
