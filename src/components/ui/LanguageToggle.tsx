import { useLanguage } from '@/contexts/LanguageContext';

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