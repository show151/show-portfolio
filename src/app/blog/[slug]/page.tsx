import { getPostBySlug } from '@/lib/posts';
import BlogPostClient from '@/components/pages/BlogPostClient';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const post = getPostBySlug(slug);
  if (!post) return { title: '記事が見つかりません' };

  const title = `${post.title} | 河野 聖`;
  const description = post.excerpt || '';

  const images = post.imagePath ? [{ url: post.imagePath, width: 1200, height: 630 }] : [];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return <BlogPostClient post={post} />;
}
