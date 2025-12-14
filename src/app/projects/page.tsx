import { projects } from '@/lib/data'; // 全作品データ
import { ProjectCard } from '@/components/features/ProjectCard';

// ページのメタデータを定義 (SEO対策)
export const metadata = {
  title: 'Projects | YourName Portfolio',
  description: 'Next.js, TypeScript, Azureを活用した全ての開発実績一覧',
};

export default function ProjectsPage() {
  
  // サーバー側で全ての作品データを取得
  const allProjects = projects;

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
        🛠️ 開発実績（Projects）
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-12 text-center">
        モダンな技術スタック（Next.js, TypeScript, Tailwind CSS）とクラウドインフラ（Azureを想定）を用いた、スケーラブルなアプリケーションの構築例をご紹介します。
      </p>

      {/* 作品カードのグリッド表示 */}
      {allProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        // 作品データがない場合のメッセージ
        <div className="text-center py-20 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            まだ作品が登録されていません。`src/lib/data.ts` に作品データを追加してください。
          </p>
        </div>
      )}
    </main>
  );
}