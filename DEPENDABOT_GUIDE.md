# Managing Dependabot Pull Requests

This guide helps you understand and manage the automated dependency update PRs created by
Dependabot.

## 🤖 What are these PRs?

Dependabot automatically creates PRs to update your project dependencies. This is **normal and
beneficial** for:

- 🔒 **Security patches**
- 🐛 **Bug fixes**
- ⚡ **Performance improvements**
- 📦 **New features** in dependencies

## 🎯 Types of Updates

### ✅ **Safe to Auto-merge**

- **Patch updates** (1.2.3 → 1.2.4) - Bug fixes, security patches
- **Minor updates** (1.2.3 → 1.3.0) - New features, backward compatible

### ⚠️ **Review Required**

- **Major updates** (1.2.3 → 2.0.0) - May contain breaking changes

## 🛠️ Management Options

### Option 1: Use Auto-merge Workflow

The `auto-merge-dependabot.yml` workflow automatically merges safe updates:

- ✅ Auto-merges patch and minor updates
- 🚨 Flags major updates for manual review

### Option 2: Manual Management

#### Quick Commands:

```bash
# List all dependabot PRs
gh pr list --author "dependabot[bot]"

# View a specific PR
gh pr view <PR_NUMBER>

# Merge a safe PR
gh pr merge <PR_NUMBER> --squash

# Bulk merge (use with caution)
gh pr list --author "dependabot[bot]" --json number --jq '.[].number' | xargs -I {} gh pr merge {} --squash
```

#### Using the Management Script:

```bash
./scripts/manage-dependabot.sh
```

### Option 3: Configure Dependabot Auto-merge

Enable auto-merge directly in GitHub:

1. Go to repository **Settings** → **General**
2. Enable **Allow auto-merge**
3. Dependabot PRs will auto-merge when CI passes

## 📋 Current PR Categories

Based on your current PRs, you have updates for:

- **Fumadocs** (documentation framework)
- **TypeScript/ESLint** (development tools)
- **Node.js types** (type definitions)
- **Husky, lint-staged** (git hooks)
- **Commander.js** (CLI framework)

## 🎯 Recommended Action

For your current PRs, I recommend:

1. **Enable auto-merge workflow** (already created)
2. **Manually review and merge** a few to get comfortable
3. **Set up branch protection** to require CI before auto-merge

### Quick Merge Commands:

```bash
# Install GitHub CLI if not already installed
brew install gh
gh auth login

# Merge all current dependabot PRs (they look safe)
gh pr list --author "dependabot[bot]" --json number --jq '.[].number' | head -5 | xargs -I {} gh pr merge {} --squash
```

## 🔄 Ongoing Management

- PRs will be created **monthly on the first Monday**
- **Limit**: 5 PRs for root, 3 PRs for CLI/docs/actions
- **Manual review** recommended for all updates
- **Review** major updates carefully

This configuration provides a good balance between staying updated and not being overwhelmed with
PRs! 🎉
