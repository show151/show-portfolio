import { projects } from '@/lib/data'; // 全作品データ
import { ProjectCard } from '@/components/features/ProjectCard';

// ページのメタデータを定義 (SEO対策)
export const metadata = {
  title: 'Projects | YourName Portfolio',
  description: 'Next.js, TypeScript, Azureを活用した全ての開発実績一覧',
};

export default function ProjectsPage() {
  
  const allProjects = projects;

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* ヘッダーセクション */}
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl">🛠️</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
              開発実績
            </h1>
          </div>
          <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-600">
            <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-white leading-relaxed font-medium">
              モダンな技術スタック（<span className="font-bold text-blue-600 dark:text-blue-300">Next.js, TypeScript, Tailwind CSS</span>）と<br className="hidden sm:inline" />
              クラウドインフラ（<span className="font-bold text-blue-600 dark:text-blue-300">Azure</span>）を用いた、スケーラブルなアプリケーションの構築例です。
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700 rounded-full">
              <span className="text-sm font-medium text-blue-700 dark:text-blue-200">
                全 {allProjects.length} プロジェクト
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* プロジェクト一覧 */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">{allProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-100 dark:bg-slate-800 rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-700">
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