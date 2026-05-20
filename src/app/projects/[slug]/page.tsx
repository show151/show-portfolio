"use client";

import { getProjectBySlug } from '@/lib/data';
import { ArrowLeft, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';

export default function ProjectDetailPage() {
  const { t, language } = useLanguage();
  const params = useParams();
  
  const project = useMemo(() => {
    if (!params.slug || typeof params.slug !== 'string') return null;
    return getProjectBySlug(params.slug);
  }, [params.slug]);
  const projectTitle = project
    ? t.projects.data[project.slug as keyof typeof t.projects.data]?.title || project.title
    : 'Project';

  useEffect(() => {
    document.title = `${projectTitle} | ${language === 'ja' ? '河野 聖' : 'Sei Kono'}`;
  }, [projectTitle, language]);

  if (!project) {
    return <div>Project not found</div>;
  }

  const hasMedia = project.imagePath?.startsWith('/');
  import { getProjectBySlug } from '@/lib/data';
  import ProjectDetailClient from '@/components/pages/ProjectDetailClient';
  import { notFound } from 'next/navigation';
  import { Metadata } from 'next';

  export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = params;
    const project = getProjectBySlug(slug);
    if (!project) return { title: 'Project not found' };

    const title = `${project.title} | 河野 聖`;
    const description = project.shortDescription || project.excerpt || '';

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
              {t.projects.liveDemo}
