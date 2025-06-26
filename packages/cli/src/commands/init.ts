import chalk from "chalk";
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

// Types for better type safety
interface TemplateConfig {
  type: "hooks" | "utils";
  language: "TypeScript" | "JavaScript";
  path: string;
  items: string[];
}

interface ProcessResult {
  success: boolean;
  message: string;
  filePath?: string;
}

// Utility functions for better code organization
function validatePath(input: string): string | true {
  if (input.trim() === "") return true;
  if (path.isAbsolute(input))
    return chalk.red("❌ Please enter a *relative* path.");

  // Additional validation: check for invalid characters
  const invalidChars = /[<>:"|?*]/;
  if (invalidChars.test(input)) {
    return chalk.red("❌ Path contains invalid characters.");
  }

  return true;
}

function getTemplateFiles(templateFolder: string, langExt: string): string[] {
  if (!existsSync(templateFolder)) {
    throw new Error(`Template folder not found: ${templateFolder}`);
  }

  return readdirSync(templateFolder)
    .filter((file) => file.endsWith(`.${langExt}`))
    .map((file) => path.basename(file, `.${langExt}`));
}

async function promptForType(): Promise<"hooks" | "utils"> {
  const { type } = await prompts({
    name: "type",
    type: "select",
    message: "What would you like to add?",
    choices: [
      {
        title: "🪝 hooks",
        value: "hooks",
        description: "React hooks for state management and side effects",
      },
      {
        title: "🛠️  utils",
        value: "utils",
        description: "Utility functions for common operations",
      },
    ],
    initial: 0,
  });

  if (!type) {
    console.log(chalk.blue("\n👋 Operation cancelled by user."));
    process.exit(0);
  }

  return type;
}

async function promptForLanguage(): Promise<"TypeScript" | "JavaScript"> {
  const { language } = await prompts({
    name: "language",
    type: "select",
    message: "Choose language:",
    choices: [
      {
        title: "TypeScript",
        value: "TypeScript",
        description: "Strongly typed JavaScript",
      },
      {
        title: "JavaScript",
        value: "JavaScript",
        description: "Classic JavaScript",
      },
    ],
    initial: 0,
  });

  if (!language) {
    console.log(chalk.blue("\n👋 Operation cancelled by user."));
    process.exit(0);
  }

  return language;
}

async function promptForPath(type: string): Promise<string> {
  const defaultPath = type === "hooks" ? "src/hooks" : "src/lib";

  const { customPath } = await prompts({
    name: "customPath",
    type: "text",
    message: `Enter relative directory to place files (default: ${defaultPath}):`,
    initial: defaultPath,
    validate: validatePath,
  });

  return typeof customPath === "string" && customPath.trim() !== ""
    ? customPath.trim()
    : defaultPath;
}

async function promptForItems(
  allFiles: string[],
  type: string
): Promise<number[]> {
  const { selectedItems } = await prompts({
    name: "selectedItems",
    type: "multiselect",
    message: `Select ${type} to add:`,
    choices: allFiles.map((f, i) => ({
      title: f,
      value: i,
    })),
    min: 1,
    hint: "Space to select, Enter to confirm",
    instructions: false,
  });

  if (!selectedItems || selectedItems.length === 0) {
    console.error(chalk.red("❌ You must select at least one item."));
    process.exit(1);
  }

  return selectedItems;
}

async function confirmOperation(config: TemplateConfig): Promise<boolean> {
  const itemNames = config.items.join(", ");
  const langExt = config.language === "TypeScript" ? "ts" : "js";

  console.log(chalk.cyan("\n📋 Operation Summary:"));
  console.log(chalk.gray(`   Type: ${chalk.white(config.type)}`));
  console.log(
    chalk.gray(`   Language: ${chalk.white(config.language)} (.${langExt})`)
  );
  console.log(chalk.gray(`   Destination: ${chalk.white(config.path)}`));
  console.log(chalk.gray(`   Items: ${chalk.white(itemNames)}`));

  const { confirm } = await prompts({
    name: "confirm",
    type: "confirm",
    message: "Proceed with the operation?",
    initial: true,
  });

  return confirm;
}

function processHook(
  name: string,
  content: string,
  resolvedDir: string,
  langExt: string
): ProcessResult {
  const fileName = `${name}.${langExt}`;
  const fullPath = path.join(resolvedDir, fileName);

  if (existsSync(fullPath)) {
    return {
      success: false,
      message: `${chalk.yellow("⚠️ Skipped:")} ${chalk.gray(
        path.relative(process.cwd(), fullPath)
      )} already exists.`,
      filePath: fullPath,
    };
  }

  writeFileSync(fullPath, content);
  return {
    success: true,
    message: `${chalk.green("✅ Hook")} ${chalk.cyan(`'${name}'`)} ${chalk.gray(
      "added to"
    )} ${chalk.white(path.relative(process.cwd(), fullPath))}`,
    filePath: fullPath,
  };
}

function processUtil(
  name: string,
  content: string,
  resolvedDir: string,
  langExt: string
): ProcessResult {
  const fileName = `utils.${langExt}`;
  const fullPath = path.join(resolvedDir, fileName);

  // Check if utility already exists in the file
  if (existsSync(fullPath)) {
    const existingContent = readFileSync(fullPath, "utf-8");
    if (existingContent.includes(`// ---- ${name} ----`)) {
      return {
        success: false,
        message: `${chalk.yellow("⚠️ Skipped:")} ${chalk.gray(
          "Utility"
        )} ${chalk.cyan(`'${name}'`)} ${chalk.gray(
          "already exists in"
        )} ${chalk.white(path.relative(process.cwd(), fullPath))}`,
        filePath: fullPath,
      };
    }
  } else {
    writeFileSync(fullPath, "");
  }

  appendFileSync(fullPath, `\n// ---- ${name} ----\n${content}\n`);
  return {
    success: true,
    message: `${chalk.green("✅ Utility")} ${chalk.cyan(
      `'${name}'`
    )} ${chalk.gray("appended to")} ${chalk.white(
      path.relative(process.cwd(), fullPath)
    )}`,
    filePath: fullPath,
  };
}

async function processTemplates(config: TemplateConfig): Promise<void> {
  const langExt = config.language === "TypeScript" ? "ts" : "js";
  const templateFolder = path.resolve(`${TEMPLATE_DIR}/${config.type}`);
  const resolvedDir = path.resolve(config.path);

  // Ensure the directory exists
  if (!existsSync(resolvedDir)) {
    mkdirSync(resolvedDir, { recursive: true });
    console.log(
      `${chalk.blue("📁 Created directory:")} ${chalk.white(
        path.relative(process.cwd(), resolvedDir)
      )}`
    );
  }

  const results: ProcessResult[] = [];

  for (const itemName of config.items) {
    const templatePath = path.join(templateFolder, `${itemName}.${langExt}`);

    if (!existsSync(templatePath)) {
      console.error(chalk.red(`❌ Template not found: ${itemName}.${langExt}`));
      continue;
    }

    const content = readFileSync(templatePath, "utf-8");

    const result =
      config.type === "hooks"
        ? processHook(itemName, content, resolvedDir, langExt)
        : processUtil(itemName, content, resolvedDir, langExt);

    results.push(result);
    console.log(result.message);
  }

  // Summary
  const successful = results.filter((r) => r.success);
  const skipped = results.filter((r) => !r.success);

  console.log(
    chalk.magenta(
      `\n📊 Summary: ${chalk.white(
        successful.length
      )} successful, ${chalk.white(skipped.length)} skipped`
    )
  );
}

export const init = new Command()
  .name("init")
  .description("Initialize a new project with hooks or utils")
  .action(async () => {
    try {
      console.log(
        chalk.bold.cyan("🚀 React UseKit CLI - Hooks and Utils Generator\n")
      );

      // Step 1: Prompt for type
      const type = await promptForType();

      // Step 2: Prompt for language
      const language = await promptForLanguage();

      // Step 3: Prompt for path
      const finalPath = await promptForPath(type);

      // Step 4: Get available templates
      const langExt = language === "TypeScript" ? "ts" : "js";
      const templateFolder = path.resolve(`${TEMPLATE_DIR}/${type}`);

      let allFiles: string[];
      try {
        allFiles = getTemplateFiles(templateFolder, langExt);
      } catch (error) {
        console.error(
          chalk.red(
            `❌ ${error instanceof Error ? error.message : String(error)}`
          )
        );
        process.exit(1);
      }

      if (allFiles.length === 0) {
        console.error(
          chalk.red(`❌ No .${langExt} templates found for ${type}`)
        );
        process.exit(1);
      }

      // Step 5: Prompt for items to add
      const selectedIndexes = await promptForItems(allFiles, type);
      const selectedItems = selectedIndexes.map((idx) => allFiles[idx]);

      // Step 6: Create configuration
      const config: TemplateConfig = {
        type: type as "hooks" | "utils",
        language,
        path: finalPath,
        items: selectedItems,
      };

      // Step 7: Confirm operation
      const confirmed = await confirmOperation(config);
      if (!confirmed) {
        console.log(chalk.blue("\n👋 Operation cancelled by user."));
        process.exit(0);
      }

      // Step 8: Process templates
      console.log(chalk.yellow("\n🔄 Processing templates..."));
      await processTemplates(config);

      console.log(chalk.bold.green("\n🎉 Operation completed successfully!"));
    } catch (error) {
      console.error(
        chalk.red("❌ An error occurred:"),
        chalk.gray(error instanceof Error ? error.message : String(error))
      );
      process.exit(1);
    }
  });
