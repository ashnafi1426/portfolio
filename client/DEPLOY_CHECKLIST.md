# ✅ Frontend Deployment Checklist

## Before Deploying to Vercel

### 1. Environment Variables
- [ ] Create `.env.production` with production API URL
- [ ] Verify `.env` is in `.gitignore`
- [ ] Test with production API URL locally

### 2. Build Test
```bash
npm run build
npm run preview
```
- [ ] Build completes without errors
- [ ] Preview works correctly
- [ ] All pages load
- [ ] Theme toggle works
- [ ] Images load correctly

### 3. Code Quality
- [ ] No console errors in browser
- [ ] All links work (GitHub, LinkedIn, Telegram)
- [ ] Contact form works
- [ ] Responsive on mobile
- [ ] Dark/Light mode works

### 4. Files to Check
- [ ] `vercel.json` exists (for routing)
- [ ] `package.json` has correct scripts
- [ ] All images are in `public/` folder
- [ ] CV files are accessible

### 5. Git Repository
```bash
git status
git add .
git commit -m "Ready for deployment"
git push origin main
```

## Vercel Deployment Steps

1. **Go to Vercel Dashboard**
   - https://vercel.com/dashboard

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository

3. **Configure Build Settings**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Add Environment Variable**
   ```
   VITE_API_URL=https://your-backend-url.onrender.com/api
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Copy your URL

## After Deployment

- [ ] Visit your Vercel URL
- [ ] Test all features
- [ ] Check API calls work
- [ ] Test on mobile device
- [ ] Share with friends! 🎉

## Update Backend CORS

Don't forget to add your Vercel URL to backend CORS:
```
CLIENT_URL=https://your-portfolio.vercel.app
```

---

**Your Vercel URL:** _________________
**Deployed Date:** _________________
