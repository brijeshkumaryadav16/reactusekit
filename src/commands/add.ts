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

async function add() {
  try {
    // ✅ Prompt for type: hooks or utils
    const { type } = await inquirer.prompt([
      {
        type: "list",
        name: "type",
        message: "What would you like to add?",
        choices: ["hooks", "utils"],
      },
    ]);

    // 🧠 Step 2: Prompt user for language
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

    const templateFolder = path.resolve(`${TEMPLATE_DIR}/${type}`);

    if (!existsSync(templateFolder)) {
      console.error(`❌ No templates found in ${templateFolder}`);
      process.exit(1);
    }

    // ✅ Step 3: File Placement Path (ask once)
    const defaultPath = type === "hooks" ? "src/hooks" : "src/lib";
    const { customPath } = await inquirer.prompt([
      {
        type: "input",
        name: "customPath",
        message: `Enter relative directory to place files (default: ${defaultPath}):`,
        validate: (input) => {
          if (input.trim() === "") return true;
          if (path.isAbsolute(input))
            return "❌ Please enter a *relative* path.";
          return true;
        },
      },
    ]);

    const finalPath =
      customPath.trim() !== "" ? customPath.trim() : defaultPath;
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

    // ✅ Step 4: Multi-select prompt for templates
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

    // ✅ Step 5: Process selected items
    for (const name of selectedItems) {
      const templatePath = path.join(templateFolder, `${name}.${langExt}`);
      const content = readFileSync(templatePath, "utf-8");

      const fileName =
        type === "hooks" ? `${name}.${langExt}` : `utils.${langExt}`;
      const fullPath = path.join(resolvedDir, fileName);

      // if (type === "hooks") {
      //   const destDir = path.resolve("src/hooks");
      //   const destPath = path.join(destDir, `${name}.${langExt}`);

      //   if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
      //   if (existsSync(destPath)) {
      //     console.warn(`⚠️ Skipped: ${destPath} already exists.`);
      //     continue;
      //   }

      //   writeFileSync(destPath, content);
      //   console.log(
      //     `✅ Hook '${name}' added to ${path.relative(process.cwd(), destDir)}`
      //   );
      // }

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
          `✅ Hook '${name}' added to ${path.relative(process.cwd(), fullPath)}`
        );
      }

      // if (type === "utils") {
      //   const utilsPath = path.resolve(`src/lib/utils.${langExt}`);
      //   const libDir = path.dirname(utilsPath);

      //   if (!existsSync(libDir)) mkdirSync(libDir, { recursive: true });
      //   if (!existsSync(utilsPath)) writeFileSync(utilsPath, "");

      //   appendFileSync(utilsPath, `\n// ---- ${name} ----\n${content}\n`);
      //   console.log(
      //     `✅ Utility '${name}' appended to src/lib/utils.${langExt}`
      //   );
      // }
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
    if (error instanceof Error && error.name === "ExitPromptError") {
      console.log("\n👋 Operation cancelled by user.");
      process.exit(0);
    } else {
      console.error(
        "❌ An error occurred:",
        error instanceof Error ? error.message : String(error)
      );
      process.exit(1);
    }
  }
}

export default add;
