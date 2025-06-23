#!/usr/bin/env node

// src/index.ts
import { Command as Command3 } from "commander";

// src/commands/add.ts
import { Command } from "commander";
import {
  appendFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync
} from "fs";
import path from "path";
import process2 from "process";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var TEMPLATE_DIR = path.resolve(__dirname, "templates");
var addCommand = new Command("add").description("Add a hook or utility to your project").argument("<name>", "Name of the hook or utility").option("--hooks", "Add from hooks").option("--utils", "Add from utils").action((name, options) => {
  const type = options.hooks ? "hooks" : options.utils ? "utils" : null;
  if (!type) {
    console.error("\u274C Please specify --hooks or --utils");
    process2.exit(1);
  }
  const templatePath = path.resolve(`${TEMPLATE_DIR}/${type}/${name}.ts`);
  if (!existsSync(templatePath)) {
    console.error(`\u274C Template '${name}' not found in ${type}`);
    process2.exit(1);
  }
  const content = readFileSync(templatePath, "utf-8");
  if (type === "hooks") {
    const destDir = path.resolve("src/hooks");
    const destPath = path.join(destDir, `${name}.ts`);
    if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
    if (existsSync(destPath)) {
      console.error(`\u274C ${destPath} already exists.`);
      process2.exit(1);
    }
    writeFileSync(destPath, content);
    console.log(`\u2705 Hook '${name}' added to ${destDir}`);
  }
  if (type === "utils") {
    const utilsPath = path.resolve("src/lib/utils.ts");
    const libDir = path.dirname(utilsPath);
    if (!existsSync(libDir)) mkdirSync(libDir, { recursive: true });
    if (!existsSync(utilsPath)) writeFileSync(utilsPath, "");
    appendFileSync(utilsPath, `
// ---- ${name} ----
${content}
`);
    console.log(`\u2705 Utility '${name}' appended to src/lib/utils.ts`);
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
