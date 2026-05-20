"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { Post } from '@/types/post';

interface Props {
  post: Post | null;
}

export default function BlogPostClient({ post }: Props) {
  const { t, language } = useLanguage();

  React.useEffect(() => {
    if (post) {
      document.title = `${post.title} | ${language === 'ja' ? '河野 聖' : 'Sei Kono'}`;
    }
  }, [post, language]);

  if (!post) {
    return (
      <main className="min-h-screen bg-black">
        <section className="pt-20 pb-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold mb-4 text-white">記事が見つかりません</h1>
            <p className="text-gray-400">一覧に戻って別の記事を選択してください。</p>
            <div className="mt-6">
              <Link href="/blog" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors border border-gray-700">
                <ArrowLeft className="w-4 h-4" />
                <span>{t.blog.backToList}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (post.pageUrl) {
    return (
      <main className="min-h-screen bg-black">
        <article className="container mx-auto px-4 py-10 sm:py-16 max-w-4xl">
          <div className="mb-6">
            <Link href="/blog" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors border border-gray-700">
              <ArrowLeft className="w-4 h-4" />
              <span>{t.blog.backToList}</span>
            </Link>
          </div>

          <header className="mb-10 pb-8 border-b-2 border-gray-200">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4 animate-fade-in-up leading-tight">
              <span className="gradient-text">{post.title}</span>
            </h1>
            {post.publishedAt ? <p className="text-sm text-gray-400">{post.publishedAt}</p> : null}
          </header>

          <section className="mb-12 p-5 sm:p-8 bg-gray-900 rounded-xl shadow-lg">
            <p className="text-gray-300 mb-6 whitespace-pre-line">{post.excerpt}</p>
            <div className="flex gap-3">
              <a href={post.pageUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded">{t.blog.openExternal}</a>
              <Link href="/blog" className="px-4 py-2 bg-gray-700 text-gray-200 rounded">{t.blog.backToList}</Link>
            </div>
          </section>
        </article>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <article className="container mx-auto px-4 py-10 sm:py-16 max-w-4xl">
        <div className="mb-6">
          <Link href="/blog" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors border border-gray-700">
            <ArrowLeft className="w-4 h-4" />
            <span>{t.blog.backToList}</span>
          </Link>
        </div>

        <header className="mb-10 pb-8 border-b-2 border-gray-200">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 animate-fade-in-up leading-tight">
            <span className="gradient-text">{post.title}</span>
          </h1>
          {post.publishedAt ? <p className="text-sm text-gray-400">{post.publishedAt}</p> : null}
        </header>

        <section className="mb-12 p-5 sm:p-8 bg-gray-900 rounded-xl shadow-lg">
          {post.content ? (
            <div className="prose prose-invert text-gray-200" dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <div className="prose prose-invert text-gray-200 whitespace-pre-line">{post.excerpt}</div>
          )}
        </section>
      </article>
    </main>
  );
}
