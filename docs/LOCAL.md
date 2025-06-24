# Testing Package Locally

To test this package locally in another project, follow these steps:

1. In the package directory (react-usekit), first build the package:

   ```bash
   pnpm build
   ```

2. Create a global link:

   ```bash
   pnpm link --global
   ```

3. Now you can run the CLI in your test project:

   ```bash
   # Show version
   react-usekit --version

   # Add a new utility and hook
   react-usekit

   # List all utilities
   react-usekit list
   ```

To unlink when done testing:

```bash
pnpm remove -g react-usekit
```
