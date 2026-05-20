import { getProjectBySlug } from '@/lib/data';
import ProjectDetailClient from '@/components/pages/ProjectDetailClient';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project not found' };

  const title = `${project.title} | 河野 聖`;
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

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}
