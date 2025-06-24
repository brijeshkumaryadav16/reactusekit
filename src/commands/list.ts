import { Command } from "commander";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATE_DIR = path.resolve(__dirname, "templates");

const list = new Command("list")
  .description("List available hooks and utilities")
  .option("--hooks", "Show only hooks")
  .option("--utils", "Show only utils")
  .action(() => {
    const result: { name: string; type: string }[] = [];

    if (!fs.existsSync(TEMPLATE_DIR)) {
      console.log("No templates found.");
      return;
    }

    if (
      !fs.existsSync(path.join(TEMPLATE_DIR, "utils")) ||
      !fs.existsSync(path.join(TEMPLATE_DIR, "hooks"))
    ) {
      console.log("No hooks or utils folders found.");
      return;
    }

    if (
      !fs.existsSync(path.join(TEMPLATE_DIR, "utils")) ||
      !fs.existsSync(path.join(TEMPLATE_DIR, "hooks"))
    ) {
      console.log("No hooks or utils folders found.");
      return;
    }

    const showHooks = !process.argv.includes("--utils");
    const showUtils = !process.argv.includes("--hooks");

    if (showHooks) {
      const hooks = fs.readdirSync(path.join(TEMPLATE_DIR, "hooks"));
      hooks.forEach((file) =>
        result.push({ name: file.replace(".ts", ""), type: "hook" })
      );
    }

    if (showUtils) {
      const utils = fs.readdirSync(path.join(TEMPLATE_DIR, "utils"));
      utils.forEach((file) =>
        result.push({ name: file.replace(".ts", ""), type: "util" })
      );
    }

    result.forEach((item) => {
      console.log(`${item.type.toUpperCase()} - ${item.name}`);
    });
  });

export default list;
