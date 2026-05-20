export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imagePath?: string;
  categories?: string[];
  pageUrl?: string;
  publishedAt?: string;
  content?: string;
}
