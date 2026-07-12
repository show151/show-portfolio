"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, Language } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.ja;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ja');
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null;
    if (saved && translations[saved]) {
      setLanguage(saved);
    }
    setIsLanguageLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLanguageLoaded) return;
    localStorage.setItem('language', language);
  }, [language, isLanguageLoaded]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ja' ? 'en' : 'ja'));
  };

  const value = {
    language,
    toggleLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
