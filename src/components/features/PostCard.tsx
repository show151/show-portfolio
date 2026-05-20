"use client";

import { Post } from '@/types/post';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const emojiFor = (categories?: string[]) => {
    if (!categories || categories.length === 0) return '📝';
    if (categories.includes('redis')) return '🧠';
    if (categories.includes('kubernetes') || categories.includes('gitops')) return '☸️';
    if (categories.includes('fastapi') || categories.includes('python')) return '🐍';
    return '📝';
  };
  const { t } = useLanguage();
  const Wrapper: React.FC<React.PropsWithChildren<Record<string, unknown>>> = ({ children }) =>
    post.pageUrl ? (
      // external link
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a href={post.pageUrl} target="_blank" rel="noopener noreferrer" className="block group h-full">
        {children}
      </a>
    ) : (
      <Link href={`/blog/${post.slug}`} className="block group h-full">
        {children}
      </Link>
    );

  return (
    <Wrapper>
      <article className="relative bg-black rounded-xl border-2 border-gray-600 hover:border-blue-500 transition-all duration-300 overflow-hidden h-full flex flex-col group-hover:-translate-y-1">
        {post.pageUrl ? (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-black/60 px-2 py-1 rounded text-xs text-blue-300">
            <ExternalLink className="w-4 h-4" />
            <span>{t.blog.externalLabel}</span>
          </div>
        ) : null}
        <div className="h-40 bg-gray-900 relative overflow-hidden flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">{emojiFor(post.categories)}</div>
            <span className="text-sm text-gray-400">{post.categories?.join('、') || ''}</span>
          </div>
        </div>

        <div className="p-6 flex flex-col grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h3>
          <p className="text-gray-300 mb-4 grow whitespace-pre-line">{post.excerpt}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-blue-400 font-medium text-sm">
              <span>{t.blog.readMore}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
            <div className="text-xs text-gray-400">{post.publishedAt}</div>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};
