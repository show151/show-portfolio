"use client";

import { ArrowLeft, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatTitle } from '@/lib/title';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { Project } from '@/types/project';
import { renderTextWithLinks } from '@/lib/utils';

interface Props {
  project: Project | null;
}

export default function ProjectDetailClient({ project }: Props) {
  const { t, language } = useLanguage();
  const projectTitle = language === 'en' ? project?.titleEn ?? project?.title ?? '' : project?.title ?? '';
  const projectShortDescription =
    language === 'en' ? project?.shortDescriptionEn ?? project?.shortDescription ?? '' : project?.shortDescription ?? '';
  const projectFullDescription =
    language === 'en' ? project?.fullDescriptionEn ?? project?.fullDescription ?? '' : project?.fullDescription ?? '';

  useEffect(() => {
    if (project) {
      document.title = formatTitle(projectTitle, language);
    }
  }, [project, projectTitle, language]);

  if (!project) {
    return <div className="text-white p-8">{t.projects.notFound}</div>;
  }

  const hasMedia = project.imagePath?.startsWith('/');
  const isVideo = project.imagePath?.endsWith('.mp4');

  return (
    <main className="min-h-screen bg-black">
      <article className="container mx-auto px-4 py-10 sm:py-16 max-w-4xl">
        <div className="mb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors border border-gray-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.projects.backToList}</span>
          </Link>
        </div>
        
        <header className="mb-10 pb-8 border-b-2 border-gray-200 dark:border-slate-700">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 animate-fade-in-up leading-tight">
            <span className="gradient-text">{projectTitle}</span>
          </h1>
          <p className="text-base sm:text-xl text-white animate-fade-in animation-delay-300 whitespace-pre-line">{renderTextWithLinks(projectShortDescription)}</p>
        </header>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold w-full sm:w-auto">
              <Github className="w-5 h-5" />
              <span>{t.projects.githubRepo}</span>
            </a>
          )}
          {project.pageUrl && (
            <a href={project.pageUrl} target="_blank" rel="noopener noreferrer" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center w-full sm:w-auto">
              {t.projects.liveDemo}
            </a>
          )}
        </div>

        {hasMedia && (
          <section className="mb-12 p-4 sm:p-6 bg-gray-900 rounded-xl shadow-lg animate-fade-in animation-delay-500">
            <div className="relative w-full overflow-hidden rounded-lg bg-black/40 aspect-video">
              {isVideo ? (
                <video
                  src={project.imagePath}
                  controls
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={project.imagePath}
                  alt={projectTitle}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              )}
            </div>
          </section>
        )}

        <section className="mb-12 p-5 sm:p-8 bg-gray-900 rounded-xl shadow-lg animate-slide-in-left animation-delay-600">
          <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6"><span className="gradient-text">{t.projects.projectOverview}</span></h2>
          <div className="text-white leading-relaxed whitespace-pre-line">
            {renderTextWithLinks(projectFullDescription)}
          </div>
        </section>

        <section className="p-5 sm:p-8 bg-gray-900 rounded-xl shadow-lg animate-slide-in-left animation-delay-900">
          <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6"><span className="gradient-text">{t.projects.techStack}</span></h2>
          <div className="flex flex-wrap gap-3">
            {project.techTags.map((tag: string) => (
              <span 
                key={tag} 
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
