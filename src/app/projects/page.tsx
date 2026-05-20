import { getProjectsSortedByDate, projects } from '@/lib/data';
import { ProjectCard } from '@/components/features/ProjectCard';
import { Metadata } from 'next';
import { formatTitle } from '@/lib/title';
import { translations } from '@/lib/i18n';

export const metadata: Metadata = {
  title: formatTitle(translations.ja.projects.title, 'ja'),
  description: 'Kotlin・Python・Next.js・React Nativeなどで制作したアプリ・ツール一覧。物体検知・GUI・ブログ・PM管理アプリなど全 8 作品。',
};

export default function ProjectsPage() {
  const sortedProjects = getProjectsSortedByDate(projects);

  return (
    <main className="min-h-screen bg-black">
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">{translations.ja.projects.title}</span>
          </h1>
          <div className="mt-6 animate-fade-in animation-delay-600">
            <span className="px-4 py-2 bg-blue-900/40 text-blue-200 rounded-full text-sm font-medium">
              {translations.ja.projects.count.replace('{count}', projects.length.toString())}
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
