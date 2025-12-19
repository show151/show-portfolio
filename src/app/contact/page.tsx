"use client";

import { Mail, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/components/ui/LanguageToggle';

export default function ContactPage() {
  const { t } = useLanguage();

  const CONTACT_INFO = [
    { 
      title: t.contact.email, 
      icon: Mail, 
      value: 'show515k@outlook.jp', 
      href: 'mailto:show515k@outlook.jp', 
      description: t.contact.emailDesc
    },
    { 
      title: 'GitHub', 
      icon: Github, 
      value: 'show151', 
      href: 'https://github.com/show151', 
      description: t.contact.githubDesc
    },
    { 
      title: 'LinkedIn', 
      icon: Linkedin, 
      value: '河野 聖', 
      href: 'https://linkedin.com/in/聖-河野-447297324/', 
      description: t.contact.linkedinDesc
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold animate-fade-in-up">
              <span className="gradient-text">{t.contact.title}</span>
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto animate-fade-in animation-delay-300">
            {t.contact.description}
          </p>
        </div>
      </section>

      {/* 連絡先リスト */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-6">
        {CONTACT_INFO.map((item) => (
          <a 
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 sm:p-8 bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500 group hover:-translate-y-1"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform border border-blue-200 dark:border-blue-800">
                <item.icon className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                  {item.title}
                </h2>
                <p className="text-base font-medium text-gray-300 mb-2">{item.value}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </a>
        ))}
        </div>
      </section>
      
      {/* フッターノート */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center p-6 sm:p-8 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-blue-200 dark:border-slate-600">
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
              このサイトは<span className="font-semibold text-blue-600 dark:text-blue-400">Next.js</span>と<span className="font-semibold text-blue-600 dark:text-blue-400">Tailwind CSS</span>で構築されており、
              全てGitHubで公開されています。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}