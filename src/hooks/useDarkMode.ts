"use client";

import { useState, useEffect, useLayoutEffect } from 'react';

const STORAGE_KEY = 'theme';

export const useDarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // 初回マウント時の設定読み込み
  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    let initialDarkMode = false;
    
    if (savedTheme) {
      initialDarkMode = savedTheme === 'dark';
    } else {
      initialDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    setIsDarkMode(initialDarkMode);
    setMounted(true);
  }, []);

  // DOM更新をuseLayoutEffectで即座に実行してちらつきを防止
  useLayoutEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem(STORAGE_KEY, 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem(STORAGE_KEY, 'light');
    }
  }, [isDarkMode, mounted]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };
  
  return [mounted ? isDarkMode : false, toggleDarkMode] as const;
};