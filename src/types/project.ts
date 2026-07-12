export interface Project {
  id: number;
  slug: string;
  title: string;
  titleEn?: string;
  shortDescription: string;
  shortDescriptionEn?: string;
  imagePath: string;
  techTags: string[];
  githubUrl: string;
  pageUrl?: string;
  fullDescription: string;
  fullDescriptionEn?: string;
  startDate?: string;
  endDate?: string;
}
