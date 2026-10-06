// ThemeContext.jsx
import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  // Initialize from localStorage or fallback to default
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app-theme') || 'default';
  });

  // Watch for theme state changes and update the document DOM attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for easier consumer usage
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
