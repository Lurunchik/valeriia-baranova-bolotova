#!/bin/bash

# Build verification script
# This script checks if the build process works correctly

set -e

echo "🔍 Checking build process..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the application
echo "🏗️  Building application..."
npm run build

# Verify build output
echo "✅ Verifying build output..."

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "❌ ERROR: dist directory not found"
    exit 1
fi

# Check for required files
required_files=("index.html" "favicon.ico" "robots.txt")
for file in "${required_files[@]}"; do
    if [ ! -f "dist/$file" ]; then
        echo "❌ ERROR: Required file $file not found in dist"
        exit 1
    fi
done

# Check for assets directory
if [ ! -d "dist/assets" ]; then
    echo "❌ ERROR: assets directory not found in dist"
    exit 1
fi

# Check for CSS and JS files
css_files=$(find dist/assets -name "*.css" | wc -l)
js_files=$(find dist/assets -name "*.js" | wc -l)

if [ "$css_files" -eq 0 ]; then
    echo "❌ ERROR: No CSS files found in dist/assets"
    exit 1
fi

if [ "$js_files" -eq 0 ]; then
    echo "❌ ERROR: No JS files found in dist/assets"
    exit 1
fi

echo "✅ Build verification passed!"
echo ""
echo "📁 Build output structure:"
ls -la dist/
echo ""
echo "📦 Assets:"
ls -la dist/assets/
echo ""
echo "📊 Build size:"
du -sh dist/
echo ""
echo "🎉 Build process is working correctly!" 