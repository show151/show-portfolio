import { getPostsSortedByDate, posts } from '@/lib/posts';

const SITE_URL = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

function rfc822(dateString?: string) {
  if (!dateString) return undefined;
  const normalized = dateString.length === 7 ? `${dateString}-01` : dateString;
  return new Date(normalized).toUTCString();
}

export async function GET() {
  const sorted = getPostsSortedByDate(posts);

  const items = sorted
    .map((p) => {
      const link = `${SITE_URL}/blog/${p.slug}`;
      const pubDate = rfc822(p.publishedAt);
      return `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="false">${link}</guid>
      ${pubDate ? `<pubDate>${pubDate}</pubDate>` : ''}
      <description><![CDATA[${p.excerpt || ''}]]></description>
    </item>`;
    })
    .join('\n');

  const channelTitle = 'show151 - Blog';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>${channelTitle}</title>
      <link>${SITE_URL}</link>
      <description>Latest posts</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
}
