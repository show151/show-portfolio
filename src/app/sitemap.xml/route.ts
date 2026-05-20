import { getPostsSortedByDate, posts } from '@/lib/posts';
import { getProjectsSortedByDate, projects } from '@/lib/data';

const SITE_URL = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

function formatDate(d?: string) {
  if (!d) return undefined;
  const normalized = d.length === 7 ? `${d}-01` : d;
  return new Date(normalized).toISOString();
}

export async function GET() {
  const pages: string[] = ['/', '/projects', '/blog', '/contact', '/profile'];

  const projectEntries = getProjectsSortedByDate(projects).map((p) => `/projects/${p.slug}`);
  const postEntries = getPostsSortedByDate(posts).map((p) => `/blog/${p.slug}`);

  const urls = [...pages, ...projectEntries, ...postEntries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => {
        const full = `${SITE_URL}${url}`;
        // try find publish date for posts
        const post = posts.find((p) => `/blog/${p.slug}` === url);
        const lastmod = post ? formatDate(post.publishedAt) : undefined;
        return `
      <url>
        <loc>${full}</loc>
        ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
      </url>`;
      })
      .join('')}
  </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
}
