import fs from "node:fs/promises";
import path from "node:path";
import { highlight } from "fumadocs-core/highlight";
import * as Base from "fumadocs-ui/components/codeblock";
import { Icons } from "./icon";

interface CodePreviewProps {
  registryFilePath: string;
  location: string;
}

export default async function CodePreview(props: CodePreviewProps) {
  const { registryFilePath, location } = props;
  try {
    const filePath = path.join(
      process.cwd(),
      "src/registry/new-york",
      registryFilePath,
    );
    const file = await fs.readFile(filePath, "utf-8");

    const rendered = await highlight(file, {
      lang: "ts",
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      meta: {
        title: "New York Registry",
      },
    });

    return (
      <Base.CodeBlock title={location} lang="ts" icon={<Icons.ts />}>
        <Base.Pre>{rendered}</Base.Pre>
      </Base.CodeBlock>
    );
  } catch (error) {
    console.error(
      `Error loading file: ${registryFilePath}. ${error instanceof Error ? error.message : String(error)}`,
    );
    return (
      <Base.CodeBlock title={location} lang="ts" icon={<Icons.ts />}>
        <Base.Pre>
          Error: Could not load the file. Please check if the path is correct.
        </Base.Pre>
      </Base.CodeBlock>
    );
  }
}
