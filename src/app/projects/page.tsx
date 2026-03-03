"use client";

import { getProjectsSortedByDate, projects } from '@/lib/data';
import { ProjectCard } from '@/components/features/ProjectCard';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProjectsPage() {
  const { t } = useLanguage();
  const sortedProjects = getProjectsSortedByDate(projects);

  return (
    <main className="min-h-screen bg-black">
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">{t.projects.title}</span>
          </h1>
          <div className="mt-6 animate-fade-in animation-delay-600">
            <span className="px-4 py-2 bg-blue-900/40 text-blue-200 rounded-full text-sm font-medium">
              {t.projects.count.replace('{count}', projects.length.toString())}
            </span>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto">
          {sortedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-800 rounded-xl border-2 border-dashed border-gray-700">
              <p className="text-xl text-gray-300 mb-2">
                まだ作品が登録されていません
              </p>
              <p className="text-sm text-gray-400">
                <code className="bg-gray-700 px-2 py-1 rounded">src/lib/data.ts</code> に作品データを追加してください
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
