"use client";

import { User, MapPin, Calendar, Heart } from 'lucide-react';
import { useLanguage } from '@/components/ui/LanguageToggle';

export default function ProfilePage() {
  const { t } = useLanguage();

  const profileData = [
    { icon: User, label: t.profile.education, value: t.profile.educationValue },
    { icon: MapPin, label: t.profile.location, value: t.profile.locationValue },
    { icon: Calendar, label: t.profile.born, value: t.profile.bornValue },
    { icon: Heart, label: t.profile.interests, value: t.profile.interestsValue },
  ];

  return (
    <main className="min-h-screen bg-black">
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">{t.profile.title}</span>
          </h1>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-3xl space-y-4">
          {profileData.map((item, index) => (
            <div 
              key={item.label} 
              className="bg-gray-900 rounded-xl p-6 border-2 border-gray-700 hover:border-blue-500 transition-colors animate-slide-in-left"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-900/30">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-400 mb-2">{item.label}</h3>
                  <p className="text-white">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}