import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <h1 className="text-xl font-bold">ReactUseKit</h1>,
  },
  links: [],
  githubUrl: "https://github.com/brijeshkumaryadav16/reactusekit",
}
