import { Command } from "commander";
import inquirer from "inquirer";
import {
  appendFileSync,
  existsSync,
  mkdirSync,
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
  .argument("<name>", "Name of the hook or utility")
  .option("--hooks", "Add from hooks")
  .option("--utils", "Add from utils")
  .action(async (name, options) => {
    const type = options.hooks ? "hooks" : options.utils ? "utils" : null;

    if (!type) {
      console.error("❌ Please specify --hooks or --utils");
      process.exit(1);
    }

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

    const templatePath = path.resolve(
      `${TEMPLATE_DIR}/${type}/${name}.${langExt}`
    );
    if (!existsSync(templatePath)) {
      console.error(`❌ Template '${name}' not found in ${type}`);
      process.exit(1);
    }

    const content = readFileSync(templatePath, "utf-8");

    if (type === "hooks") {
      const destDir = path.resolve("src/hooks");
      const destPath = path.join(destDir, `${name}.${langExt}`);

      if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
      if (existsSync(destPath)) {
        console.error(`❌ ${destPath} already exists.`);
        process.exit(1);
      }

      writeFileSync(destPath, content);
      console.log(`✅ Hook '${name}' added to ${destDir}`);
    }

    if (type === "utils") {
      const utilsPath = path.resolve(`src/lib/utils.${langExt}`);

      const libDir = path.dirname(utilsPath);
      if (!existsSync(libDir)) mkdirSync(libDir, { recursive: true });

      if (!existsSync(utilsPath)) writeFileSync(utilsPath, "");
      appendFileSync(utilsPath, `\n// ---- ${name} ----\n${content}\n`);
      console.log(`✅ Utility '${name}' appended to src/lib/utils.${langExt}`);
    }
  });
