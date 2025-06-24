import { Command } from "commander";
import inquirer from "inquirer";
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
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATE_DIR = path.resolve(__dirname, "templates");

export const addCommand = new Command("add")
  .description("Add a hook or utility to your project")
  .action(async (name, options) => {
    // ✅ Prompt for type: hooks or utils
    const { type } = await inquirer.prompt([
      {
        type: "list",
        name: "type",
        message: "What would you like to add?",
        choices: ["hooks", "utils"],
      },
    ]);

    // 🧠 Prompt user for language
    const { language } = await inquirer.prompt([
      {
        type: "list",
        name: "language",
        message: "Choose language:",
        choices: ["TypeScript", "JavaScript"],
        default: "TypeScript",
      },
    ]);

    const langExt = language === "TypeScript" ? "ts" : "js";

    // const templatePath = path.resolve(
    //   `${TEMPLATE_DIR}/${type}/${name}.${langExt}`
    // );
    const templateFolder = path.resolve(`${TEMPLATE_DIR}/${type}`);

    if (!existsSync(templateFolder)) {
      console.error(`❌ No templates found in ${templateFolder}`);
      process.exit(1);
    }

    // ✅ Read available template files
    const allFiles = readdirSync(templateFolder)
      .filter((file) => file.endsWith(`.${langExt}`))
      .map((file) => path.basename(file, `.${langExt}`));

    if (allFiles.length === 0) {
      console.error(`❌ No .${langExt} templates found in ${type}`);
      process.exit(1);
    }

    // ✅ Multi-select prompt for templates
    const { selectedItems } = await inquirer.prompt([
      {
        type: "checkbox",
        name: "selectedItems",
        message: `Select ${type} to add:`,
        choices: allFiles,
        validate: (selected) =>
          selected.length > 0 ? true : "You must select at least one item.",
      },
    ]);

    // ✅ Process selected items
    for (const name of selectedItems) {
      const templatePath = path.join(templateFolder, `${name}.${langExt}`);
      const content = readFileSync(templatePath, "utf-8");

      if (type === "hooks") {
        const destDir = path.resolve("src/hooks");
        const destPath = path.join(destDir, `${name}.${langExt}`);

        if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
        if (existsSync(destPath)) {
          console.warn(`⚠️ Skipped: ${destPath} already exists.`);
          continue;
        }

        writeFileSync(destPath, content);
        console.log(`✅ Hook '${name}' added to ${path.relative(process.cwd(), destDir)}`);
      }

      if (type === "utils") {
        const utilsPath = path.resolve(`src/lib/utils.${langExt}`);
        const libDir = path.dirname(utilsPath);

        if (!existsSync(libDir)) mkdirSync(libDir, { recursive: true });
        if (!existsSync(utilsPath)) writeFileSync(utilsPath, "");

        appendFileSync(utilsPath, `\n// ---- ${name} ----\n${content}\n`);
        console.log(
          `✅ Utility '${name}' appended to src/lib/utils.${langExt}`
        );
      }
    }
  });
