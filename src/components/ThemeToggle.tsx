import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>(() => {
    if (import.meta.env.SSR) {
      return 'light'; // Default theme for SSR
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') || 'light';
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2"
    >
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;

