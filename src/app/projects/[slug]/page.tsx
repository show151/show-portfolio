import { getProjectBySlug } from '@/lib/data';
import ProjectDetailClient from '@/components/pages/ProjectDetailClient';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { formatTitle } from '@/lib/title';
import { translations } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: formatTitle(translations.ja.projects.notFound, 'ja') };

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

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}
