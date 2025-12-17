import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/features/ProjectCard';

export const metadata = {
  title: 'Projects | YourName Portfolio',
  description: 'Next.js, TypeScript, Azureを活用した全ての開発実績一覧',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900">
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            🛠️ 開発実績
          </h1>
          <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <p className="text-lg text-gray-800 dark:text-white">
              モダンな技術スタックとクラウドインフラを用いたアプリケーションの構築例です。
            </p>
          </div>
          <div className="mt-6">
            <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
              全 {projects.length} プロジェクト
            </span>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-100 dark:bg-slate-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-slate-700">
              <p className="text-xl text-gray-600 dark:text-slate-300 mb-2">
                まだ作品が登録されていません
              </p>
              <p className="text-sm text-gray-500 dark:text-slate-400">
                <code className="bg-gray-200 dark:bg-slate-700 px-2 py-1 rounded">src/lib/data.ts</code> に作品データを追加してください
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}