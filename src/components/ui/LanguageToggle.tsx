"use client";

import { useState, useEffect } from 'react';
import { translations, Language } from '@/lib/i18n';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('ja');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && translations[saved]) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'ja' ? 'en' : 'ja';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return { language, toggleLanguage, t: translations[language] };
};

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-sm font-medium text-white hover:text-blue-400 transition-colors border border-gray-600 rounded z-50"
    >
      {language === 'ja' ? 'EN' : 'JA'}
    </button>
  );
};