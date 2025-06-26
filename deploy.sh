#!/bin/bash

# 🚀 react-usekit Vercel Deployment Script
# This script helps deploy the react-usekit documentation to Vercel

set -e

echo "🚀 Starting react-usekit deployment to Vercel..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Build the project locally first to catch any errors
echo "🔨 Building project locally..."
pnpm build:docs

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the errors before deploying."
    exit 1
fi

echo "✅ Local build successful!"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "🎉 Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Configure your custom domain in Vercel Dashboard"
echo "2. Update DNS records in GoDaddy"
echo "3. Wait for DNS propagation (24-48 hours)"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
