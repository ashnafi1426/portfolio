# 🔧 Fix Vercel Deployment Error (npm install exit 254)

## ✅ What I Fixed

1. **Removed puppeteer** - This package causes deployment issues
2. **Added Node version** - Specified Node 18+ requirement
3. **Created .npmrc** - Ensures proper npm configuration

---

## 🚀 Method 1: Deploy with Fixed Files (Recommended)

### Step 1: Delete package-lock.json locally

```bash
cd portfolio/client
del package-lock.json
```

### Step 2: Reinstall dependencies

```bash
npm install
```

### Step 3: Test build locally

```bash
npm run build
```

If this works, proceed to deploy!

### Step 4: Push to GitHub

```bash
git add .
git commit -m "Fix: Remove puppeteer and add Node version"
git push origin main
```

### Step 5: Deploy to Vercel

**Vercel Settings:**
```
Framework Preset: Vite
Root Directory: portfolio/client
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node Version: 18.x
```

**Environment Variables:**
```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

---

## 🚀 Method 2: Use Vercel CLI (Alternative)

If the dashboard still fails, use CLI:

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login

```bash
vercel login
```

### Step 3: Deploy from local

```bash
cd portfolio/client
vercel
```

Follow prompts:
- Set up and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No**
- Project name? **portfolio-frontend**
- Directory? **./portfolio/client**
- Override settings? **No**

### Step 4: Add environment variable

```bash
vercel env add VITE_API_URL production
```

Enter: `https://your-backend-url.onrender.com/api`

### Step 5: Deploy to production

```bash
vercel --prod
```

---

## 🚀 Method 3: Manual Build & Deploy

If both methods fail, build locally and deploy:

### Step 1: Build locally

```bash
cd portfolio/client
npm install
npm run build
```

This creates a `dist/` folder.

### Step 2: Deploy dist folder

**Option A: Drag & Drop to Vercel**
1. Go to https://vercel.com/new
2. Click "Deploy" tab
3. Drag the `dist` folder
4. Add environment variable
5. Deploy!

**Option B: Use Vercel CLI**
```bash
cd dist
vercel --prod
```

---

## 🚀 Method 4: Create Separate Frontend Repo (Cleanest)

This is the most reliable method:

### Step 1: Create new repo

```bash
# Create new folder
mkdir portfolio-frontend
cd portfolio-frontend

# Copy only frontend files
# Copy everything from portfolio/client to here
```

### Step 2: Initialize git

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio-frontend.git
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to Vercel Dashboard
2. Import the NEW repository
3. Settings:
   ```
   Framework: Vite
   Root Directory: ./
   Build: npm run build
   Output: dist
   ```
4. Add environment variable
5. Deploy!

---

## ⚙️ Vercel Project Settings

Make sure these are set correctly:

### General Settings
```
Framework Preset: Vite
Node.js Version: 18.x
```

### Build & Development Settings
```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Development Command: npm run dev
```

### Root Directory
```
If deploying from main repo: portfolio/client
If separate repo: ./  (or leave empty)
```

### Environment Variables
```
VITE_API_URL = https://your-backend-url.onrender.com/api
```

---

## 🔍 Troubleshooting

### Error: "npm install exited with 254"

**Solution 1:** Delete package-lock.json
```bash
del portfolio\client\package-lock.json
git add .
git commit -m "Remove package-lock.json"
git push
```

**Solution 2:** Change Install Command in Vercel
```
npm ci --legacy-peer-deps
```
or
```
npm install --legacy-peer-deps
```

**Solution 3:** Use yarn instead
```
Install Command: yarn install
Build Command: yarn build
```

### Error: "Module not found"

**Solution:** Make sure all imports use correct paths
- Check `vite.config.js`
- Verify all file paths are correct
- Ensure case-sensitive paths match

### Error: "Build failed"

**Solution:** Test build locally first
```bash
npm run build
```
Fix any errors before deploying.

---

## ✅ Verification Checklist

Before deploying:

- [ ] `package-lock.json` deleted and regenerated
- [ ] `npm install` works locally
- [ ] `npm run build` works locally
- [ ] `.env.production` has correct API URL
- [ ] All files committed to git
- [ ] Pushed to GitHub

---

## 🎯 Quick Fix Commands

Run these in order:

```bash
# Navigate to frontend
cd portfolio/client

# Clean install
del package-lock.json
del -r node_modules
npm install

# Test build
npm run build

# If successful, commit and push
git add .
git commit -m "Fix deployment issues"
git push origin main
```

Then redeploy on Vercel!

---

## 📞 Still Having Issues?

Try these in order:

1. ✅ Use Method 4 (separate repo) - Most reliable
2. ✅ Use Method 2 (Vercel CLI) - Direct deployment
3. ✅ Use Method 3 (manual build) - Guaranteed to work
4. ✅ Contact Vercel support with build logs

---

**Need the build logs?**
- Go to Vercel Dashboard
- Click on failed deployment
- Copy the full error log
- Share it for more specific help

Good luck! 🚀
