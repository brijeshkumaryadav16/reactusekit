import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="react-usekit Logo"
          className="text-primary"
          viewBox="0 0 24 24"
        >
          {/* React-inspired logo with hooks/toolbox concept */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Outer container/toolbox */}
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />

          {/* Hook symbols inside */}
          <path
            d="M7 9c0-1.1.9-2 2-2s2 .9 2 2v4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M13 9c0-1.1.9-2 2-2s2 .9 2 2v4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Small dots representing utilities */}
          <circle cx="8" cy="16" r="1" fill="currentColor" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
          <circle cx="16" cy="16" r="1" fill="currentColor" />
        </svg>
        <span className="font-bold">react-usekit</span>
      </>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
    },
    {
      text: 'GitHub',
      url: 'https://github.com/brijeshkumaryadav/react-usekit',
      external: true,
    },
  ],
};
