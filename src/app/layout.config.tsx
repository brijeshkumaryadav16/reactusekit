import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <div className="flex items-center space-x-2">
      <h1 className="font-bold text-fd-primary text-xl">react-usekit</h1>
      <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
        Beta
      </span>
    </div>,
  },
  links: [],
  githubUrl: "https://github.com/brijeshkumaryadav16/react-usekit",
};
