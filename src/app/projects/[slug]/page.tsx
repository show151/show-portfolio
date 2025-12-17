import { getProjectBySlug, projects } from '@/lib/data';
import { Github } from 'lucide-react';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
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
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        
        <header className="mb-10 pb-8 border-b-2 border-gray-200 dark:border-slate-700">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-700 dark:text-slate-300">{project.shortDescription}</p>
        </header>

        <div className="flex gap-4 mb-12">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-slate-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-slate-600 transition-colors font-semibold">
              <Github className="w-5 h-5" />
              <span>GitHub リポジトリ</span>
            </a>
          )}
          {project.pageUrl && (
            <a href={project.pageUrl} target="_blank" rel="noopener noreferrer" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              ライブデモ
            </a>
          )}
        </div>

        <section className="mb-12 p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">プロジェクト概要</h2>
          <p className="text-gray-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">{project.fullDescription}</p>
        </section>

        <section className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">使用技術</h2>
          <div className="flex flex-wrap gap-3">
            {project.techTags.map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white"
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

