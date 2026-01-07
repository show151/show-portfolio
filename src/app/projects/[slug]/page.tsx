"use client";

import { getProjectBySlug, projects } from '@/lib/data';
import { Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { t } = useLanguage();
  const [project, setProject] = useState<any>(null);
  
  useEffect(() => {
    const getProject = async () => {
      const resolvedParams = await params;
      const foundProject = getProjectBySlug(resolvedParams.slug);
      setProject(foundProject);
    };
    getProject();
  }, [params]);
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-black">
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        
        <header className="mb-10 pb-8 border-b-2 border-gray-200 dark:border-slate-700">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">
            <span className="gradient-text">{t.projects.data[project.slug as keyof typeof t.projects.data]?.title || project.title}</span>
          </h1>
          <p className="text-xl text-white animate-fade-in animation-delay-300">{t.projects.data[project.slug as keyof typeof t.projects.data]?.shortDescription || project.shortDescription}</p>
        </header>

        <div className="flex gap-4 mb-12">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold">
              <Github className="w-5 h-5" />
              <span>{t.projects.githubRepo}</span>
            </a>
          )}
          {project.pageUrl && (
            <a href={project.pageUrl} target="_blank" rel="noopener noreferrer" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              {t.projects.liveDemo}
            </a>
          )}
        </div>

        <section className="mb-12 p-8 bg-gray-900 rounded-xl shadow-lg animate-slide-in-left animation-delay-600">
          <h2 className="text-2xl font-bold mb-6"><span className="gradient-text">{t.projects.projectOverview}</span></h2>
          <div className="text-white leading-relaxed whitespace-pre-line">
            {t.projects.data[project.slug as keyof typeof t.projects.data]?.fullDescription || project.fullDescription}
          </div>
        </section>

        <section className="p-8 bg-gray-900 rounded-xl shadow-lg animate-slide-in-left animation-delay-900">
          <h2 className="text-2xl font-bold mb-6"><span className="gradient-text">{t.projects.techStack}</span></h2>
          <div className="flex flex-wrap gap-3">
            {project.techTags.map((tag) => (
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