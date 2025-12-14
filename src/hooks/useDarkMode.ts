"use client"; // 必須: クライアントコンポーネントまたはフックであることを宣言

import { useState, useEffect } from 'react';

// Local Storageのキー名
const STORAGE_KEY = 'theme';

export const useDarkMode = () => {
  // stateは現在のモードを追跡（初期値はシステム設定またはLocalStorageから取得される）
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // ----------------------------------------------------
  // 1. 初期ロード処理 (LocalStorageとシステム設定の確認)
  // ----------------------------------------------------
  useEffect(() => {
    const root = window.document.documentElement;
    
    // 優先順位 1: Local Storageに設定が保存されているか？
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    
    if (savedTheme) {
      if (savedTheme === 'dark') {
        root.classList.add('dark');
        setIsDarkMode(true);
      } else {
        root.classList.remove('dark');
        setIsDarkMode(false);
      }
      return; // Local Storageの設定があればここで終了
    }

    // 優先順位 2: OS/ブラウザのシステム設定はダークモードか？
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (systemPrefersDark) {
      root.classList.add('dark');
      setIsDarkMode(true);
    } else {
      root.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []); // 最初のレンダリング時のみ実行

  // ----------------------------------------------------
  // 2. モード切り替え関数
  // ----------------------------------------------------
  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    const newMode = !isDarkMode;
    
    if (newMode) {
      root.classList.add('dark');
      localStorage.setItem(STORAGE_KEY, 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem(STORAGE_KEY, 'light');
    }
    
    setIsDarkMode(newMode);
  };

  return [isDarkMode, toggleDarkMode] as const;
};