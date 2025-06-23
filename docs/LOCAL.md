# Testing Package Locally

To test this package locally in another project, follow these steps:

1. In the package directory (react-usekit), first build the package:

   ```bash
   pnpm build
   ```

2. After building, create a global link:

   ```bash
   pnpm link --global
   ```

3. Now you can run the CLI in your test project:

   ```bash
   # Show help
   react-usekit --help

   # List all utilities
   react-usekit list

   # Add a new utility and hook
   react-usekit add <utility-and-hooks-name>
   ```

To unlink the package when done testing:

1. In your test project:

   ```bash
   pnpm unlink react-usekit
   ```

2. In the package directory:

   ```bash
   pnpm unlink
   ```
