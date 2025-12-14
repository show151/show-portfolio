import { getProjectBySlug, projects } from '@/lib/data';
import { Github, Zap } from 'lucide-react';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

// -----------------------------------------------------------
// 1. サーバーコンポーネントの async 化 (修正点 1)
// -----------------------------------------------------------
// 関数定義に 'async' キーワードを追加します。

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // paramsがPromiseの場合があるのでawaitする
  const resolvedParams = await params;
  
  if (!resolvedParams.slug) {
    return <div>Project not found</div>;
  }

  const project = getProjectBySlug(resolvedParams.slug); 
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-5xl">
        
        {/* タイトルとメタデータ */}
        <header className="mb-10 pb-8 border-b-2 border-gray-200 dark:border-slate-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-slate-300 leading-relaxed">{project.shortDescription}</p>
        </header>

        {/* アクションボタン */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-slate-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-slate-600 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold">
            <Github className="w-5 h-5" />
            <span>GitHub リポジトリ</span>
          </a>
        </div>

        {/* 詳細説明 */}
        <section className="mb-12 p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span>プロジェクト概要</span>
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">{project.fullDescription}</p>
          </div>
        </section>

        {/* 使用技術 */}
        <section className="p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">使用技術スタック</h2>
          <div className="flex flex-wrap gap-3">
            {project.techTags.map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 dark:bg-blue-500 text-white shadow-md hover:shadow-lg transition-all hover:scale-105"
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


// -----------------------------------------------------------
// 2. generateMetadata の async 化 (修正点 2)
// -----------------------------------------------------------
// generateMetadata も非同期でデータを取得するため、'async' キーワードを追加します。

export async function generateMetadata({ params }: ProjectDetailPageProps) {
    // paramsがPromiseの場合があるのでawaitする
    const resolvedParams = await params;
    
    if (!resolvedParams.slug) {
        return { title: 'Project Not Found' };
    }

    const project = getProjectBySlug(resolvedParams.slug);
    
    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }
    
    return {
        title: `${project.title} | Project Detail`,
        description: project.shortDescription,
    };
}


// -----------------------------------------------------------
// 3. App Routerの静的生成 (SSG) の設定
// -----------------------------------------------------------

// Next.jsに、ビルド時にどのURLを事前に静的生成すべきかを伝えます。
// これにより、パフォーマンスが最適化されます。
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

