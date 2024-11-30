#!/bin/bash

# Script to deploy the personal website to GitHub Pages

# Ensure the script is run from the project root directory
if [ ! -f "package.json" ]; then
  echo "Error: package.json not found. Please run this script from the project root directory."
  exit 1
fi

# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy

# Confirm deployment
if [ $? -eq 0 ]; then
  echo "Deployment successful! Visit https://ConnecUs.github.io/Dazyners_Academy to view your site."
else
  echo "Deployment failed. Please check the error messages above."
fi
