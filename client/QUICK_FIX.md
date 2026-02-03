# ⚡ Quick Fix for Vercel Deployment Error

## 🔴 Problem
`npm install` exited with 254

## ✅ Solution (5 minutes)

### Step 1: Clean Your Local Files
```bash
cd portfolio/client
del package-lock.json
del /s /q node_modules
```

### Step 2: Reinstall
```bash
npm install
```

### Step 3: Test Build
```bash
npm run build
```

✅ If this works, continue!
❌ If this fails, check the error and fix it first.

### Step 4: Commit Changes
```bash
git add .
git commit -m "Fix: Update dependencies for deployment"
git push origin main
```

### Step 5: Redeploy on Vercel

**Option A: Automatic (if connected to GitHub)**
- Vercel will auto-deploy after push
- Wait 2-3 minutes
- Check deployment status

**Option B: Manual Trigger**
1. Go to Vercel Dashboard
2. Your Project → Deployments
3. Click "Redeploy" on latest deployment
4. Wait for completion

---

## 🎯 Vercel Settings (Double Check)

```
Framework Preset: Vite
Root Directory: portfolio/client
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 18.x
```

**Environment Variable:**
```
VITE_API_URL = https://your-backend-url.onrender.com/api
```

---

## 🚨 If Still Failing

### Try This Install Command Instead:
In Vercel → Project Settings → Build & Development Settings:

Change **Install Command** to:
```
npm install --legacy-peer-deps
```

or

```
npm ci --legacy-peer-deps
```

---

## ✅ Success!

Your site should now deploy successfully! 🎉

Visit: `https://your-project.vercel.app`

---

**Still stuck?** Check `VERCEL_DEPLOY_FIX.md` for more solutions!
