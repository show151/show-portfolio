export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  imagePath: string;
  techTags: string[];
  githubUrl: string;
  pageUrl?: string;
  fullDescription: string;
}