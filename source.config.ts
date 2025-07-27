import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    remarkCodeTabOptions: {
      parseMdx: true,
    },
    remarkNpmOptions: {
      packageManagers: [
        {
          name: "pnpm",
          command: (command) => {
            return command.replace(/^npm install /, "pnpm dlx ");
          },
        },
        {
          name: "npm",
          command: (command) => {
            return command.replace(/^npm install /, "npx ");
          },
        },
        {
          name: "yarn",
          command: (command) => {
            return command.replace(/^npm install /, "yarn ");
          },
        },
        {
          name: "bun",
          command: (command) => {
            return command.replace(/^npm install /, "bunx --bun ");
          },
        },
      ],
      persist: {
        id: "package-manager",
      },
    },
  },
});
