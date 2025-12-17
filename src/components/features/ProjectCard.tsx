import { Project } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasImage = project.imagePath?.startsWith('/');

  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <article className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700 h-full flex flex-col group-hover:-translate-y-1">
        
        <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-slate-700 dark:to-slate-600 relative overflow-hidden flex items-center justify-center">
          {hasImage ? (
            <Image
              src={project.imagePath}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="text-center">
              <div className="text-4xl mb-2">📸</div>
              <span className="text-sm text-gray-600 dark:text-slate-300">
                画像を追加してください
              </span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-slate-50 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-slate-300 mb-4 grow">
            {project.shortDescription}
          </p>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.techTags.slice(0, 3).map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-xs font-medium rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm">
              <span>詳細を見る</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};