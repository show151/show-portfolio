"use client";

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering language-dependent text on the server to prevent hydration mismatch
  if (!mounted) {
    return (
      <button className="px-3 py-1 text-sm font-medium text-white opacity-0 border border-gray-600 rounded z-50" aria-hidden>
        --
      </button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-sm font-medium text-white hover:text-blue-400 transition-colors border border-gray-600 rounded z-50"
    >
      {language === 'ja' ? 'EN' : 'JA'}
    </button>
  );
};