import { ProjectCard } from '@/components/features/ProjectCard';
import { projects } from '@/lib/data'; // 定義したデータを取り込む
import Link from 'next/link';

export default function Home() {
  // ホームで表示する主要なプロジェクトを最大3つに限定
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="container mx-auto px-4 py-16">
      
      {/* 1. メインビジュアル / キャッチフレーズ */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
          TypeScriptとAzureに精通した
          <span className="text-blue-600 dark:text-blue-400 block">モダンなフルスタック開発者</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Next.jsとクリーンなアーキテクチャに基づき、スケーラブルで保守性の高いアプリケーションを構築します。
        </p>
        <div className="flex justify-center space-x-4">
          {/* CTAボタン（仮） */}
          <Link href="/projects" className="px-8 py-3 text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-150 shadow-md">
            全ての作品を見る
          </Link>
          <a href="https://github.com/show151" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150">
            GitHubへ
          </a>
        </div>
      </section>

      {/* 2. 主要作品セクション */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          ✨ 主要な作品
        </h2>
        
        {/* 作品カードのグリッド表示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* データがない場合のメッセージ */}
        {featuredProjects.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-500">
            まだ作品データが登録されていません。`src/lib/data.ts`に作品を追加してください。
          </p>
        )}
      </section>

      {/* 今後のセクション（SkillsやAboutなど）を追加予定 */}
      
    </main>
  );
}