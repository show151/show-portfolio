import { ProjectCard } from '@/components/features/ProjectCard';
import { projects } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen">
      
      <section className="bg-white dark:bg-black py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">クラウドとAIを軸に、</span>
            <span className="gradient-text block mt-2">学生の枠を超えた力を世界へ</span>
          </h1>
          <p className="text-xl text-white dark:text-white max-w-3xl mx-auto mb-10">
            アイデアを止めず、形にして届ける開発スタイル
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/projects" 
              className="px-8 py-4 text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
            >
              全ての作品を見る
            </Link>
            <a 
              href="https://github.com/show151" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-100 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            >
              GitHubへ
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text border-b-4 border-blue-600 pb-3">主要な作品</span>
          </h2>
          
          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500 dark:text-slate-400 mb-2">
                まだ作品データが登録されていません。
              </p>
              <p className="text-sm text-gray-400 dark:text-slate-500">
                <code className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">src/lib/data.ts</code>に作品を追加してください。
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}