#!/bin/bash

# Script to merge dependabot PRs
# This script helps you batch-merge dependabot PRs safely

echo "🤖 Dependabot PR Management Script"
echo "=================================="

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "📦 Install it with: brew install gh"
    echo "🔐 Then authenticate with: gh auth login"
    exit 1
fi

echo "📋 Fetching dependabot PRs..."

# List all open dependabot PRs
echo ""
echo "🔍 Open Dependabot PRs:"
gh pr list --author "dependabot[bot]" --state open --json number,title,headRefName

echo ""
echo "🎯 Options:"
echo "1. Merge all patch/minor updates (safer)"
echo "2. List PRs for manual review"
echo "3. Exit"

read -p "Choose option (1-3): " choice

case $choice in
    1)
        echo "🚀 Merging patch and minor updates..."
        # This would need more sophisticated logic to check semver
        echo "⚠️  For safety, please review each PR manually for now"
        echo "💡 Use: gh pr merge <PR_NUMBER> --squash"
        ;;
    2)
        echo "📝 Dependabot PRs for manual review:"
        gh pr list --author "dependabot[bot]" --state open
        echo ""
        echo "💡 To merge a specific PR: gh pr merge <PR_NUMBER> --squash"
        echo "💡 To view PR details: gh pr view <PR_NUMBER>"
        ;;
    3)
        echo "👋 Exiting..."
        exit 0
        ;;
    *)
        echo "❌ Invalid option"
        exit 1
        ;;
esac
