import { Project } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // 画像パスが有効かチェック（/で始まるか、httpで始まるか）
  const hasValidImage = project.imagePath && (
    project.imagePath.startsWith('/') || 
    project.imagePath.startsWith('http')
  );

  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <article className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700 h-full flex flex-col group-hover:-translate-y-1">
        
        {/* 画像スペース */}
        <div className="h-48 sm:h-56 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-slate-700 dark:to-slate-600 relative overflow-hidden flex items-center justify-center">
          {hasValidImage ? (
            <>
              <Image
                src={project.imagePath}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10 group-hover:bg-blue-600/20 dark:group-hover:bg-blue-400/20 transition-colors duration-300" />
            </>
          ) : (
            <div className="text-center">
              <div className="text-4xl mb-2">📸</div>
              <span className="text-sm text-gray-600 dark:text-slate-300 font-medium">
                画像を追加してください
              </span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col grow">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-slate-50 mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 mb-4 grow line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
          
          <div className="mt-auto space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.techTags.slice(0, 4).map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* 詳細への誘導 */}
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
              <span>詳細を見る</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};