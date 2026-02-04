/**
 * Download CV utility function
 * Works across all browsers and handles fallbacks
 */

export const downloadCV = async (fileName = 'Ashenafi_Sileshi_Resume.pdf') => {
  const pdfPath = '/cv/pro.pdf';
  
  try {
    // Method 1: Fetch and download as blob (most reliable)
    console.log('Attempting to download CV from:', pdfPath);
    
    const response = await fetch(pdfPath);
    
    if (!response.ok) {
      console.error('Failed to fetch PDF:', response.status, response.statusText);
      
      if (response.status === 404) {
        alert('Resume PDF not found. Please contact the site administrator.\n\nThe file "pro.pdf" needs to be added to the /cv/ directory.');
        return false;
      }
      
      throw new Error(`PDF file not found: ${response.status}`);
    }
    
    const blob = await response.blob();
    console.log('PDF blob created, size:', blob.size);
    
    // Check if file is too small (likely corrupted or placeholder)
    if (blob.size < 10000) {
      console.warn('Warning: PDF file is very small, might be corrupted. Size:', blob.size);
      alert('⚠️ Resume file error\n\nThe resume file appears to be corrupted or incomplete.\n\nFile size: ' + blob.size + ' bytes (should be at least 50 KB)\n\nPlease ensure you have a valid PDF file at:\nportfolio/client/public/cv/pro.pdf\n\nThe file must be created using:\n• Microsoft Word (Save As PDF)\n• Google Docs (Download as PDF)\n• A proper PDF creator\n\nDo NOT just rename a text file to .pdf');
      return false;
    }
    
    // Verify it's a PDF
    if (blob.type !== 'application/pdf' && !blob.type.includes('pdf')) {
      console.warn('Warning: File type is not PDF:', blob.type);
    }
    
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the blob URL after a short delay
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      console.log('Download completed successfully');
    }, 100);
    
    return true;
  } catch (error) {
    console.error('Primary download method failed:', error);
    
    // Fallback Method 2: Direct link download
    try {
      console.log('Trying fallback method: direct link');
      
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = fileName;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Fallback download initiated');
      return true;
    } catch (fallbackError) {
      console.error('Fallback download failed:', fallbackError);
      
      // Final Fallback Method 3: Open in new tab
      try {
        console.log('Opening PDF in new tab as final fallback');
        const newWindow = window.open(pdfPath, '_blank', 'noopener,noreferrer');
        
        if (!newWindow) {
          alert('Please allow pop-ups to download the CV, or right-click and select "Save link as..."');
          return false;
        }
        
        return true;
      } catch (finalError) {
        console.error('All download methods failed:', finalError);
        alert('Unable to download CV. The resume file may be missing or corrupted.\n\nPlease contact the site administrator.');
        return false;
      }
    }
  }
};

/**
 * Alternative: Fetch and download (works better on some browsers)
 */
export const downloadCVFetch = async (fileName = 'Ashenafi_Sileshi_Resume.pdf') => {
  try {
    const response = await fetch('/cv/pro.pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    window.URL.revokeObjectURL(url);
    
    return true;
  } catch (error) {
    console.error('Error downloading CV with fetch:', error);
    // Fallback to simple method
    return downloadCV(fileName);
  }
};

/**
 * View CV in new tab (alternative to download)
 */
export const viewCV = () => {
  window.open('/cv/pro.pdf', '_blank', 'noopener,noreferrer');
};
