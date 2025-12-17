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
      <article className="bg-black rounded-xl border-2 border-gray-600 hover:border-blue-500 transition-all duration-300 overflow-hidden h-full flex flex-col group-hover:-translate-y-1">
        
        <div className="h-48 bg-gray-900 relative overflow-hidden flex items-center justify-center">
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
              <span className="text-sm text-gray-400">
                画像を追加してください
              </span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col grow">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 grow">
            {project.shortDescription}
          </p>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.techTags.slice(0, 3).map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-xs font-medium rounded-md bg-blue-900/40 text-blue-300 border border-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-2 text-blue-400 font-medium text-sm">
              <span>詳細を見る</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};