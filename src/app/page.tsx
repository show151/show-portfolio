import { ProjectCard } from '@/components/features/ProjectCard';
import { projects } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen">
      
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-slate-50 leading-tight mb-6">
            クラウドとAIを軸に、
            <span className="text-blue-600 dark:text-blue-400 block mt-2">学生の枠を超えた力を世界へ</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-slate-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            アイデアを止めず、形にして届ける開発スタイル
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link 
              href="/projects" 
              className="inline-block px-8 py-4 text-lg font-semibold rounded-lg bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 active:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              全ての作品を見る
            </Link>
            <a 
              href="https://github.com/show151" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-8 py-4 text-lg font-semibold rounded-lg border-2 border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-100 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200"
            >
              GitHubへ
            </a>
          </div>
        </div>
      </section>

      {/* 主要作品セクション */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
            <span className="inline-block border-b-4 border-blue-600 dark:border-blue-500 pb-3">主要な作品</span>
          </h2>
          
          {/* 作品カードのグリッド表示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* データがない場合のメッセージ */}
          {featuredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500 dark:text-slate-400">
                まだ作品データが登録されていません。
              </p>
              <p className="text-sm text-gray-400 dark:text-slate-500 mt-2">
                <code className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">src/lib/data.ts</code>に作品を追加してください。
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}