#!/usr/bin/env node

// src/index.ts
import { Command as Command3 } from "commander";

// src/commands/add.ts
import { Command } from "commander";
import inquirer from "inquirer";
import {
  appendFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync
} from "fs";
import path from "path";
import process2 from "process";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var TEMPLATE_DIR = path.resolve(__dirname, "templates");
var addCommand = new Command("add").description("Add a hook or utility to your project").action(async (name, options) => {
  const { type } = await inquirer.prompt([
    {
      type: "list",
      name: "type",
      message: "What would you like to add?",
      choices: ["hooks", "utils"]
    }
  ]);
  const { language } = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Choose language:",
      choices: ["TypeScript", "JavaScript"],
      default: "TypeScript"
    }
  ]);
  const langExt = language === "TypeScript" ? "ts" : "js";
  const templateFolder = path.resolve(`${TEMPLATE_DIR}/${type}`);
  if (!existsSync(templateFolder)) {
    console.error(`\u274C No templates found in ${templateFolder}`);
    process2.exit(1);
  }
  const allFiles = readdirSync(templateFolder).filter((file) => file.endsWith(`.${langExt}`)).map((file) => path.basename(file, `.${langExt}`));
  if (allFiles.length === 0) {
    console.error(`\u274C No .${langExt} templates found in ${type}`);
    process2.exit(1);
  }
  const { selectedItems } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "selectedItems",
      message: `Select ${type} to add:`,
      choices: allFiles,
      validate: (selected) => selected.length > 0 ? true : "You must select at least one item."
    }
  ]);
  for (const name2 of selectedItems) {
    const templatePath = path.join(templateFolder, `${name2}.${langExt}`);
    const content = readFileSync(templatePath, "utf-8");
    if (type === "hooks") {
      const destDir = path.resolve("src/hooks");
      const destPath = path.join(destDir, `${name2}.${langExt}`);
      if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
      if (existsSync(destPath)) {
        console.warn(`\u26A0\uFE0F Skipped: ${destPath} already exists.`);
        continue;
      }
      writeFileSync(destPath, content);
      console.log(
        `\u2705 Hook '${name2}' added to ${path.relative(process2.cwd(), destDir)}`
      );
    }
    if (type === "utils") {
      const utilsPath = path.resolve(`src/lib/utils.${langExt}`);
      const libDir = path.dirname(utilsPath);
      if (!existsSync(libDir)) mkdirSync(libDir, { recursive: true });
      if (!existsSync(utilsPath)) writeFileSync(utilsPath, "");
      appendFileSync(utilsPath, `
// ---- ${name2} ----
${content}
`);
      console.log(
        `\u2705 Utility '${name2}' appended to src/lib/utils.${langExt}`
      );
    }
  }
});

// src/commands/list.ts
import { Command as Command2 } from "commander";
import fs from "fs";
import path2 from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = path2.dirname(__filename2);
var TEMPLATE_DIR2 = path2.resolve(__dirname2, "templates");
var listCommand = new Command2("list").description("List available hooks and utilities").option("--hooks", "Show only hooks").option("--utils", "Show only utils").action(() => {
  const result = [];
  if (!fs.existsSync(TEMPLATE_DIR2)) {
    console.log("No templates found.");
    return;
  }
  if (!fs.existsSync(path2.join(TEMPLATE_DIR2, "utils")) || !fs.existsSync(path2.join(TEMPLATE_DIR2, "hooks"))) {
    console.log("No hooks or utils folders found.");
    return;
  }
  if (!fs.existsSync(path2.join(TEMPLATE_DIR2, "utils")) || !fs.existsSync(path2.join(TEMPLATE_DIR2, "hooks"))) {
    console.log("No hooks or utils folders found.");
    return;
  }
  const showHooks = !process.argv.includes("--utils");
  const showUtils = !process.argv.includes("--hooks");
  if (showHooks) {
    const hooks = fs.readdirSync(path2.join(TEMPLATE_DIR2, "hooks"));
    hooks.forEach(
      (file) => result.push({ name: file.replace(".ts", ""), type: "hook" })
    );
  }
  if (showUtils) {
    const utils = fs.readdirSync(path2.join(TEMPLATE_DIR2, "utils"));
    utils.forEach(
      (file) => result.push({ name: file.replace(".ts", ""), type: "util" })
    );
  }
  result.forEach((item) => {
    console.log(`${item.type.toUpperCase()} - ${item.name}`);
  });
});

// src/index.ts
var program = new Command3();
program.name("react-usekit").description("CLI to add reusable hooks and utils").version("1.0.0-alpha.1");
program.addCommand(listCommand);
program.addCommand(addCommand);
program.parse();
