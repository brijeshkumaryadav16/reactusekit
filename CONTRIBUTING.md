# Contributing to ReactUseKit

Thank you for your interest in contributing to **ReactUseKit**! We welcome all contributions—whether it’s a new hook, new helpers, a bug fix, documentation improvement, or a suggestion.

Please read this guide before submitting a pull request.

---

## About this repository

- **ReactUseKit** is a production-ready React Hooks and Helpers.
- We use `pnpm` for development
- The codebase is TypeScript-first and uses [Fumadocs](https://fumadocs.dev/).
- We use shadcn registry for cli

---

## Repository Structure

```
src/
  registry/new-york/hooks/    # All hooks live here
  registry/new-york/lib/      # All helpers live here
  lib/                        # Internal utilities
  components/                 # UI components
content/docs/                 # Documentation (MDX)
public/                       # Static assets and registry JSON
```

---

## Development

### 1. Fork and Clone

```bash
git clone https://github.com/brijeshkumaryadav16/reactusekit.git
```

### 2. Navigate to project

```bash
cd reactusekit
```

### 3. Create a Branch

```bash
git checkout -b my-feature
```

### 4. Install Dependencies

```bash
pnpm install
```

### 5. Start the Dev Server

```bash
pnpm dev
```

### 6. Building the registry locally

To test that your registry builds correctly, you can run the following command:

```bash
pnpm registry:build
```

Then try installing any hooks/helper from the registry in a new project using the `shadcn add` command:

```bash
pnpm dlx shadcn@latest add http://localhost:3000/r/[hooks/helper-name].json
```

---

## Adding or Modifying Hooks/Helpers

- Add new hooks to `src/registry/new-york/hooks/`.
- Add new helpers to `src/registry/new-york/lib/`.
- Update or add documentation in `content/docs/`.
- If you add a new hook/helper, update `registry.json`.

---

## Documentation

- All docs are in `content/docs/` as MDX files.
- Each hook/helper should have its own doc file.
- Update `content/docs/meta.json` if you add a new hook/helper.

---

## Commit Convention

Please use [Conventional Commits](https://www.conventionalcommits.org/) for your commit messages:

- `feat(hook): add use-xyz hook`
- `fix(helper): correct bug in is-empty`
- `docs: update usage for use-local-storage`
- `refactor: improve code style`
- `chore: update dependencies`

---

## Submitting a Pull Request

1. Ensure your branch is up to date with `main`.
2. Open a pull request with a clear description.
3. Reference any related issues.

---

## Security

If you find a security vulnerability, please report it via GitHub’s private vulnerability reporting.

---

## Need Help?

Open an issue or discussion, or reach out via GitHub.
