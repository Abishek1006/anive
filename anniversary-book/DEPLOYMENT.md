# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages. Follow these steps to host your anniversary book website.

## Prerequisites
- Node.js installed on your system
- Git repository initialized and connected to GitHub
- Repository name: `anive`
- Website will be hosted at: `https://Abishek1006.github.io/anive`

## Deployment Steps

### 1. Install Dependencies (First Time Only)
```bash
npm install
```
This installs the `gh-pages` package needed for deployment.

### 2. Build & Deploy
Run this command to build the project and deploy to GitHub Pages:
```bash
npm run deploy
```

This command automatically:
- Runs `npm run build` to create an optimized production build in the `dist/` folder
- Deploys the `dist/` folder to the `gh-pages` branch on GitHub
- Your site goes live at: `https://Abishek1006.github.io/anive`

### 3. Verify Deployment
1. Go to your GitHub repository: https://github.com/Abishek1006/anive
2. Click **Settings** → **Pages**
3. Confirm the source is set to `gh-pages` branch
4. Your site should be live in a few minutes

## What Changed in Your Config

### `package.json`
- Added `"homepage": "https://Abishek1006.github.io/anive"` - tells the build where the site will be hosted
- Added `"deploy": "gh-pages -d dist"` - deploys the dist folder to GitHub Pages
- Added `"predeploy": "npm run build"` - automatically builds before deployment
- Added `"gh-pages": "^6.1.1"` to devDependencies

### `vite.config.js`
- Added `base: '/anive/'` - ensures all assets load correctly from the `/anive/` subdirectory

## After Deploying
- Your changes will be visible at `https://Abishek1006.github.io/anive` within 1-2 minutes
- To update: Make changes, commit to GitHub, then run `npm run deploy` again
- The `gh-pages` branch on GitHub will be created automatically on first deploy

## Troubleshooting

**Site not showing up?**
- Wait 2-3 minutes for GitHub to process the deployment
- Check that the `gh-pages` branch exists in your repository
- Verify Settings → Pages shows `gh-pages` branch as source

**Assets not loading?**
- The `base: '/anive/'` in vite.config.js is already set correctly
- Clear your browser cache or open in incognito mode

**Need to redeploy?**
- Simply run `npm run deploy` again after making changes and pushing to GitHub
