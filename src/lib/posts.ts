import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Post } from '@/types/post';

const toTime = (date: string | undefined) => {
  if (!date) return 0;
  const normalized = date.length === 7 ? `${date}-01` : date;
  return new Date(normalized).getTime();
};

export const getPostsSortedByDate = (list: Post[]) =>
  [...list].sort((a, b) => {
    const aTime = toTime(a.publishedAt);
    const bTime = toTime(b.publishedAt);
    return bTime - aTime;
  });

const externalPosts: Post[] = [
  {
    id: 1,
    slug: 'redis-fastapi-understanding',
    title: 'Redisって結局何？をFastAPIで理解する',
    excerpt: 'Redisの基本と、FastAPIでのキャッシュ実装を通してRedisの働きを学びます。',
    pageUrl: 'https://zenn.dev/515showw/articles/d9c7a0f02839e3',
    publishedAt: '2026-05-20',
  },
  {
    id: 2,
    slug: 'wsl2-k3d-gitops-observability',
    title: '【完全無料】WSL2とk3dで構築する、実践的GitOps・可観測性基盤 (ArgoCD + Prometheus)',
    excerpt: 'WSL2上でk3dを使い、ArgoCDとPrometheus/GrafanaでGitOpsと可観測性基盤を構築する手順。',
    pageUrl: 'https://zenn.dev/515showw/articles/2175f55438196a',
    publishedAt: '2026-02-18',
  },
];

function loadLocalPosts(): Post[] {
  try {
    const contentDir = path.join(process.cwd(), 'content', 'blog');
    if (!fs.existsSync(contentDir)) return [];

    const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));
    return files.map((file, idx) => {
      const full = path.join(contentDir, file);
      const raw = fs.readFileSync(full, 'utf-8');
      const { data, content } = matter(raw);
      const slug = file.replace(/\.md$/, '');
      const html = marked.parse(content || '');
      const post: Post = {
        id: 1000 + idx,
        slug,
        title: data.title || slug,
        excerpt: data.excerpt || (content || '').slice(0, 160),
        content: html,
        publishedAt: data.publishedAt || data.date,
      } as Post;
      return post;
    });
  } catch (e) {
    return [];
  }
}

export const posts: Post[] = [...externalPosts, ...loadLocalPosts()];

export const getPostBySlug = (slug: string): Post | undefined => posts.find((p) => p.slug === slug);
