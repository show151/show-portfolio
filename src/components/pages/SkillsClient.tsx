"use client";

import { Award, Check, Cloud, Code, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  skills: string[];
};

const SKILL_DATA: Record<'ja' | 'en', SkillCategory[]> = {
  ja: [
    {
      title: 'プログラミング言語',
      icon: Code,
      skills: ['HTML', 'CSS', 'Python', 'Kotlin', 'JavaScript', 'C言語', 'C++', 'TypeScript', 'C#'],
    },
    {
      title: '開発ツール & IDE',
      icon: Wrench,
      skills: ['VSCode', 'Android Studio', 'Arduino', 'Visual Studio', 'Unity'],
    },
    {
      title: 'クラウド & インフラ',
      icon: Cloud,
      skills: ['Docker', 'Google Cloud Console', 'Ubuntu (Linux)'],
    },
    {
      title: '資格・検定',
      icon: Award,
      skills: ['実用英語技能検定2級', '珠算検定初段', '暗算検定2級'],
    },
  ],
  en: [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['HTML', 'CSS', 'Python', 'Kotlin', 'JavaScript', 'C', 'C++', 'TypeScript', 'C#'],
    },
    {
      title: 'Development Tools & IDE',
      icon: Wrench,
      skills: ['VS Code', 'Android Studio', 'Arduino', 'Visual Studio', 'Unity'],
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      skills: ['Docker', 'Google Cloud Console', 'Ubuntu (Linux)'],
    },
    {
      title: 'Certifications',
      icon: Award,
      skills: ['EIKEN Grade 2', 'Abacus Level 1', 'Mental Arithmetic Level 2'],
    },
  ],
};

export default function SkillsClient() {
  const { t, language } = useLanguage();
  const categories = SKILL_DATA[language];

  return (
    <main className="min-h-screen bg-black">
      <section className="pt-20 pb-10 sm:pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">{t.skills.title}</span>
          </h1>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <section
              key={category.title}
              className="bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-800 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 pb-3 border-b border-blue-500/60 flex items-center gap-2 sm:gap-3">
                <div className="p-2 rounded-lg bg-blue-900/30">
                  <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                </div>
                <span className="gradient-text">{category.title}</span>
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="p-2.5 sm:p-3 bg-gray-800 rounded-lg border border-gray-700/80 flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-white leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}