import { Command } from "commander";
import { addCommand } from "./commands/add.js";
import { listCommand } from "./commands/list.js";

const program = new Command();

program
  .name("react-usekit")
  .description("CLI to add reusable hooks and utils")
  .version("1.0.0-alpha.1");

program.addCommand(listCommand);
program.addCommand(addCommand);

program.parse();
