import { Command } from "commander";
import add from "./commands/add";
import list from "./commands/list";

const program = new Command();

program
  .name("react-usekit")
  .description("CLI to add reusable hooks and utils")
  .version("1.0.0-alpha.2");

program.action(add);
program.addCommand(list);
program.parse();
