"use client";

import { Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

export default function CareerPage() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = `${t.career.title} | ${language === 'ja' ? '河野 聖' : 'Sei Kono'}`;
  }, [t.career.title, language]);

  const timelineData = [
    {
      date: t.career.timeline.entry.date,
      title: t.career.timeline.entry.title,
    },
    {
      date: t.career.timeline.gakuyukai.date,
      title: t.career.timeline.gakuyukai.title,
    },
    {
      date: t.career.timeline.hatarakubu.date,
      title: t.career.timeline.hatarakubu.title,
    },
    {
      date: t.career.timeline.audioManager.date,
      title: t.career.timeline.audioManager.title,
    },
    {
      date: t.career.timeline.ideathon.date,
      title: t.career.timeline.ideathon.title,
    },
    {
      date: t.career.timeline.aiSemiconductor.date,
      title: t.career.timeline.aiSemiconductor.title,
    },
    {
      date: t.career.timeline.canvasX.date,
      title: t.career.timeline.canvasX.title,
    },
    {
      date: t.career.timeline.gci.date,
      title: t.career.timeline.gci.title,
    },
    {
      date: t.career.timeline.aiBusiness.date,
      title: t.career.timeline.aiBusiness.title,
    },
    {
      date: t.career.timeline.deepLearning.date,
      title: t.career.timeline.deepLearning.title,
    },
    {
      date: t.career.timeline.graduation.date,
      title: t.career.timeline.graduation.title,
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">{t.career.title}</span>
          </h1>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>
            
            <div className="space-y-5 sm:space-y-8">
              {timelineData.map((item, index) => (
                <div 
                  key={index}
                  className="relative flex items-start gap-4 sm:gap-6 animate-slide-in-left"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center border-4 border-black">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-700">
                    <div className="text-xs sm:text-sm text-blue-400 font-medium mb-2">
                      {item.date}
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-white leading-relaxed">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}