"use client";

import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';

export const DarkModeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button 
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-slate-300 dark:hover:text-blue-400 transition-colors bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700"
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};