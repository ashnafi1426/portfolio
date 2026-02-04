# CV/Resume Setup Instructions

## Problem
The `pro.pdf` file was corrupted (only 1.7 KB) and has been removed.

## Solution

### Step 1: Add Your Resume PDF

1. **Create or export your resume as a PDF**
   - Use Microsoft Word, Google Docs, or any PDF creator
   - Export/Save as PDF format
   - Recommended size: Under 5 MB

2. **Name the file correctly**
   - The file MUST be named: `pro.pdf`
   - Lowercase letters
   - No spaces

3. **Place it in the correct directory**
   ```
   portfolio/client/public/cv/pro.pdf
   ```

### Step 2: Verify It Works

1. **Start the development server**
   ```bash
   cd portfolio/client
   npm run dev
   ```

2. **Test direct access**
   - Open browser: `http://localhost:3000/cv/pro.pdf`
   - You should see your resume displayed

3. **Test download buttons**
   - Visit your portfolio: `http://localhost:3000`
   - Click "Download CV" in:
     - Hero section (top of page)
     - About section
     - Resume section
   - The file should download as: `Ashenafi_Sileshi_Resume.pdf`

### Step 3: Test Page (Optional)

Visit the test page to verify all download methods work:
```
http://localhost:3000/test-cv.html
```

This page will:
- Check if the PDF is accessible
- Show file size and type
- Test multiple download methods
- Display any errors

## What's Been Fixed

✅ Removed corrupted `ashu.pdf`
✅ Removed corrupted `pro.pdf`
✅ Enhanced download utility with better error handling
✅ Added file size validation (rejects files < 5 KB)
✅ Added helpful error messages for users
✅ Created test page for debugging
✅ Updated Vite config for PDF handling

## Current Status

❌ **No PDF file present** - You need to add `pro.pdf`

Once you add the file, everything will work automatically!

## Troubleshooting

### If download still doesn't work:

1. **Check file exists**
   ```bash
   dir portfolio\client\public\cv\pro.pdf
   ```

2. **Check file size**
   - Should be at least 5 KB (5000 bytes)
   - Typical resume: 50-500 KB

3. **Restart dev server**
   ```bash
   # Stop the server (Ctrl+C)
   # Start again
   npm run dev
   ```

4. **Clear browser cache**
   - Press Ctrl+Shift+Delete
   - Clear cached files
   - Refresh page

5. **Check browser console**
   - Press F12
   - Look for errors in Console tab
   - Check Network tab for failed requests

## Need Help?

If you continue having issues:
1. Check the browser console for error messages
2. Visit the test page: `/test-cv.html`
3. Verify the PDF opens in a regular PDF viewer
4. Make sure the file is a valid PDF (not corrupted)
