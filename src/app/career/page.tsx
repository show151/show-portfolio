"use client";

import { Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CareerPage() {
  const { t } = useLanguage();

  const timelineData = [
    {
      date: t.career.timeline.entry.date,
      title: t.career.timeline.entry.title,
      description: t.career.timeline.entry.description,
    },
    {
      date: t.career.timeline.gakuyukai.date,
      title: t.career.timeline.gakuyukai.title,
      description: t.career.timeline.gakuyukai.description,
    },
    {
      date: t.career.timeline.hatarakubu.date,
      title: t.career.timeline.hatarakubu.title,
      description: t.career.timeline.hatarakubu.description,
    },
    {
      date: t.career.timeline.audioManager.date,
      title: t.career.timeline.audioManager.title,
      description: t.career.timeline.audioManager.description,
    },
    {
      date: t.career.timeline.ideathon.date,
      title: t.career.timeline.ideathon.title,
      description: t.career.timeline.ideathon.description,
    },
    {
      date: t.career.timeline.aiSemiconductor.date,
      title: t.career.timeline.aiSemiconductor.title,
      description: t.career.timeline.aiSemiconductor.description,
    },
    {
      date: t.career.timeline.canvasX.date,
      title: t.career.timeline.canvasX.title,
      description: t.career.timeline.canvasX.description,
    },
    {
      date: t.career.timeline.gci.date,
      title: t.career.timeline.gci.title,
      description: t.career.timeline.gci.description,
    },
    {
      date: t.career.timeline.aiBusiness.date,
      title: t.career.timeline.aiBusiness.title,
      description: t.career.timeline.aiBusiness.description,
    },
    {
      date: t.career.timeline.graduation.date,
      title: t.career.timeline.graduation.title,
      description: t.career.timeline.graduation.description,
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">{t.career.title}</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto animate-fade-in animation-delay-300">
            {t.career.description}
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>
            
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div 
                  key={index}
                  className="relative flex items-start gap-6 animate-slide-in-left"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center border-4 border-black">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 bg-gray-900 rounded-xl p-6 border border-gray-700">
                    <div className="text-sm text-blue-400 font-medium mb-2">
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {item.description}
                    </p>
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