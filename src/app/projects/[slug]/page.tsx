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
    <main className="container mx-auto px-4 py-16 max-w-5xl">
      
      {/* タイトルとメタデータ */}
      <div className="mb-10 border-b pb-4 border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">{project.shortDescription}</p>
      </div>

      {/* アクションボタン */}
      <div className="flex flex-wrap gap-4 mb-10">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
          className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
          <Github className="w-5 h-5" />
          <span>GitHub リポジトリ</span>
        </a>
      </div>

      {/* 詳細説明 */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
            <Zap className="w-6 h-6 text-blue-600" />
            <span>プロジェクト概要</span>
        </h2>
        {/* 通常、fullDescriptionはMarkdownやリッチテキストなので、ここで整形が必要です。 */}
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">{project.fullDescription}</p>
      </section>

      {/* 使用技術 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">使用技術スタック</h2>
        <div className="flex flex-wrap gap-3">
          {project.techTags.map((tag) => (
            <span 
              key={tag} 
              className="px-4 py-1 text-sm font-semibold rounded-full bg-blue-500 text-white dark:bg-blue-700 dark:text-blue-100 shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
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

