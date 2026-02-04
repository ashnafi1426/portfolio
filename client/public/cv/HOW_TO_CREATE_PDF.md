# How to Create Your Resume/Cover Letter PDF

I've saved your cover letter text in `cover-letter.txt`. Now you need to convert it to PDF format.

## Option 1: Using Microsoft Word (Recommended)

1. Open Microsoft Word
2. Copy the text from `cover-letter.txt`
3. Paste into Word
4. Format it nicely:
   - Add proper spacing
   - Use professional font (Arial, Calibri, Times New Roman)
   - Add your header/contact info at top
   - Adjust margins
5. Go to **File → Save As**
6. Choose **PDF** as file type
7. Save as: `pro.pdf`
8. Copy `pro.pdf` to: `portfolio/client/public/cv/`

## Option 2: Using Google Docs

1. Go to Google Docs (docs.google.com)
2. Create new document
3. Copy text from `cover-letter.txt`
4. Paste and format
5. Go to **File → Download → PDF Document (.pdf)**
6. Rename downloaded file to: `pro.pdf`
7. Copy to: `portfolio/client/public/cv/`

## Option 3: Online PDF Converter

1. Visit: https://www.ilovepdf.com/word_to_pdf
   OR: https://smallpdf.com/word-to-pdf
2. Create a Word document first
3. Upload and convert to PDF
4. Download as `pro.pdf`
5. Copy to: `portfolio/client/public/cv/`

## Option 4: Use a Resume Template

For a more professional look, use a resume template:

1. **Canva** (canva.com)
   - Search for "Resume" or "Cover Letter"
   - Choose a template
   - Add your information
   - Download as PDF

2. **Overleaf** (overleaf.com) - LaTeX
   - Professional academic-style resumes
   - Many free templates
   - Export as PDF

3. **Resume.io** or **Novoresume**
   - Online resume builders
   - Professional templates
   - Export as PDF

## Important Notes

- **File name MUST be**: `pro.pdf` (lowercase, no spaces)
- **Location MUST be**: `portfolio/client/public/cv/pro.pdf`
- **File size**: Keep under 5 MB
- **Format**: Must be valid PDF format

## After Creating the PDF

1. Place `pro.pdf` in: `portfolio/client/public/cv/`
2. Restart your dev server:
   ```bash
   cd portfolio/client
   npm run dev
   ```
3. Test at: `http://localhost:3000/cv/pro.pdf`
4. Test download buttons on your portfolio

## Need a Full Resume?

Your cover letter is great, but you might also want to create a full resume with:
- Professional summary
- Work experience
- Education
- Skills (technical & soft skills)
- Projects (with links to GitHub)
- Certifications
- Contact information

Use the same process above to create a comprehensive resume PDF.
