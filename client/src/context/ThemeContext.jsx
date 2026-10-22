import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
  { id: 'classic', name: 'Classic', canvas: '#0a0e27', dot: '#00d8f6', accent: '#00d8f6' },
  { id: 'neutral', name: 'Neutral', canvas: '#0e1117', dot: '#00d8f6', accent: '#00d8f6' },
  { id: 'petrol', name: 'Petrol', canvas: '#061217', dot: '#00d8f6', accent: '#00d8f6' },
  { id: 'espresso', name: 'Espresso', canvas: '#120e0c', dot: '#00d8f6', accent: '#00d8f6' },
  { id: 'amber', name: 'Amber', canvas: '#0a0e27', dot: '#f59e0b', accent: '#f59e0b' },
  { id: 'coral', name: 'Coral', canvas: '#0a0e27', dot: '#ff5a36', accent: '#ff5a36' },
  { id: 'emerald', name: 'Emerald', canvas: '#0a0e27', dot: '#10b981', accent: '#10b981' },
  { id: 'violet', name: 'Violet', canvas: '#0a0e27', dot: '#a855f7', accent: '#a855f7' },
];

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved || 'classic';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.documentElement.classList.add('dark');
    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme]);

  const selectTheme = (themeId) => {
    setCurrentTheme(themeId);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, selectTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
