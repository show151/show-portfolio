"use client";

import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initial = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDarkMode(initial);
    document.documentElement.classList.toggle('dark', initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode, mounted]);

  return [isDarkMode, () => setIsDarkMode(prev => !prev)] as const;
};