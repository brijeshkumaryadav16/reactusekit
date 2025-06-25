import { Command } from "commander";
import {
  appendFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import process from "process";
import prompts from "prompts";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATE_DIR = path.resolve(__dirname, "templates");

export const init = new Command()
  .name("init")
  .description("Initialize a new project with hooks or utils")
  .action(async () => {
    try {
      // Step 1: Prompt for type: hooks or utils
      const { type } = await prompts({
        name: "type",
        type: "select",
        message: "What would you like to add?",
        choices: [
          { title: "hooks", value: "hooks" },
          { title: "utils", value: "utils" },
        ],
        initial: 0,
      });

      if (!type) {
        console.log("\n👋 Operation cancelled by user.");
        process.exit(0);
      }

      // Step 2: Prompt user for language
      const { language } = await prompts({
        name: "language",
        type: "select",
        message: "Choose language:",
        choices: [
          { title: "TypeScript", value: "TypeScript" },
          { title: "JavaScript", value: "JavaScript" },
        ],
        initial: 0,
      });

      if (!language) {
        console.log("\n👋 Operation cancelled by user.");
        process.exit(0);
      }

      const langExt = language === "TypeScript" ? "ts" : "js";
      const templateFolder = path.resolve(`${TEMPLATE_DIR}/${type}`);

      if (!existsSync(templateFolder)) {
        console.error(`❌ No templates found in ${templateFolder}`);
        process.exit(1);
      }

      // Step 3: File Placement Path (ask once)
      const defaultPath = type === "hooks" ? "src/hooks" : "src/lib";
      const { customPath } = await prompts({
        name: "customPath",
        type: "text",
        message: `Enter relative directory to place files (default: ${defaultPath}):`,
        initial: defaultPath,
        validate: (input: string) => {
          if (input.trim() === "") return true;
          if (path.isAbsolute(input))
            return "❌ Please enter a *relative* path.";
          return true;
        },
      });

      const finalPath =
        typeof customPath === "string" && customPath.trim() !== ""
          ? customPath.trim()
          : defaultPath;
      const resolvedDir = path.resolve(finalPath);

      // Ensure the directory exists
      if (!existsSync(resolvedDir)) mkdirSync(resolvedDir, { recursive: true });

      // Read available template files
      const allFiles = readdirSync(templateFolder)
        .filter((file) => file.endsWith(`.${langExt}`))
        .map((file) => path.basename(file, `.${langExt}`));

      if (allFiles.length === 0) {
        console.error(`❌ No .${langExt} templates found in ${type}`);
        process.exit(1);
      }

      // Step 4: Multi-select prompt for templates
      const { selectedItems } = await prompts({
        name: "selectedItems",
        type: "multiselect",
        message: `Select ${type} to add:`,
        choices: allFiles.map((f, i) => ({
          title: f,
          value: i,
        })),
        min: 1,
        hint: "- Space to select. Enter to submit",
      });

      if (!selectedItems || selectedItems.length === 0) {
        console.error("You must select at least one item.");
        process.exit(1);
      }

      // Step 5: Process selected items
      for (const idx of selectedItems) {
        const name = allFiles[idx];
        const templatePath = path.join(templateFolder, `${name}.${langExt}`);
        const content = readFileSync(templatePath, "utf-8");

        const fileName =
          type === "hooks" ? `${name}.${langExt}` : `utils.${langExt}`;
        const fullPath = path.join(resolvedDir, fileName);

        if (type === "hooks") {
          if (existsSync(fullPath)) {
            console.warn(
              `⚠️ Skipped: ${path.relative(
                process.cwd(),
                fullPath
              )} already exists.`
            );
            continue;
          }

          writeFileSync(fullPath, content);
          console.log(
            `✅ Hook '${name}' added to ${path.relative(
              process.cwd(),
              fullPath
            )}`
          );
        }

        if (type === "utils") {
          if (!existsSync(fullPath)) writeFileSync(fullPath, "");
          appendFileSync(fullPath, `\n// ---- ${name} ----\n${content}\n`);
          console.log(
            `✅ Utility '${name}' appended to ${path.relative(
              process.cwd(),
              fullPath
            )}`
          );
        }
      }
    } catch (error) {
      console.error(
        "❌ An error occurred:",
        error instanceof Error ? error.message : String(error)
      );
      process.exit(1);
    }
  });
