export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "react-usekit",
    description:
      "Instantly scaffold production-ready React hooks and utilities into your project with a single command. No dependencies, no boilerplate—just proven, reusable code.",
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
    alternateName: "react usekit",
    description:
      "Instantly scaffold production-ready React hooks and utilities into your project with a single command. No dependencies, no boilerplate—just proven, reusable code.",
    url: "https://react-usekit.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://react-usekit.vercel.app/docs?search={search_term_string}",
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
    alternateName: "react usekit CLI",
    description:
      "Instantly scaffold production-ready React hooks and utilities into your project with a single command. No dependencies, no boilerplate—just proven, reusable code.",
    url: "https://react-usekit.vercel.app",
    downloadUrl: "https://www.npmjs.com/package/react-usekit",
    softwareVersion: "1.0.0-alpha.11",
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
      name: "react-usekit team",
    },
    keywords:
      "react-usekit, react usekit, React CLI, React hooks, React utilities, useLocalStorage, useDebounce, TypeScript, JavaScript, CLI tool",
  };
}
