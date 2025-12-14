"use client";

import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode'; // 修正: 新しいフックをインポート

export const DarkModeToggle: React.FC = () => {
  // 修正: useDarkModeフックを使用
  const [isDarkMode, toggleDarkMode] = useDarkMode(); 

  // useEffectはuseDarkModeフック内に移動したため削除

  return (
    <button 
      // 修正: toggleDarkMode関数を使用
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors bg-gray-100 dark:bg-gray-800"
    >
      {/* isDarkModeの状態に応じてアイコンを切り替える */}
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};