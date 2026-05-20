import { getProjectBySlug } from '@/lib/data';
import ProjectDetailClient from '@/components/pages/ProjectDetailClient';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { formatTitle } from '@/lib/title';

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { slug } = (await params) as { slug: string };
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project not found' };

  const title = formatTitle(project.title, 'ja');
  const description = project.shortDescription || project.fullDescription || '';

  const images = project.imagePath ? [{ url: project.imagePath, width: 1200, height: 630 }] : [];

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

export default async function ProjectPage({ params }: { params: any }) {
  const { slug } = (await params) as { slug: string };
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}
