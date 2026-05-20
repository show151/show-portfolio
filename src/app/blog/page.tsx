"use client";

import { getPostsSortedByDate, posts } from '@/lib/posts';
import { PostCard } from '@/components/features/PostCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

export default function BlogPage() {
  const { t, language } = useLanguage();
  const sorted = getPostsSortedByDate(posts);

  useEffect(() => {
    document.title = `${t.blog.title} | ${language === 'ja' ? '河野 聖' : 'Sei Kono'}`;
  }, [t.blog.title, language]);

  return (
    <main className="min-h-screen bg-black">
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">{t.blog.title}</span>
          </h1>
          <div className="mt-6 animate-fade-in animation-delay-600">
            <span className="px-4 py-2 bg-blue-900/40 text-blue-200 rounded-full text-sm font-medium">
              {t.blog.count.replace('{count}', posts.length.toString())}
            </span>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto">
          {sorted.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sorted.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-800 rounded-xl border-2 border-dashed border-gray-700">
              <p className="text-xl text-gray-300 mb-2">まだ記事が登録されていません</p>
              <p className="text-sm text-gray-400">
                <code className="bg-gray-700 px-2 py-1 rounded">src/lib/posts.ts</code> に記事を追加してください
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
