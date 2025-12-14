import { Project } from '@/types/project';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col">
        
        {/* 仮の画像スペース (実際はNext/Imageで最適化します) */}
        <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            {project.imagePath.split('/').pop()} (画像配置予定)
          </span>
        </div>

        <div className="p-6 flex flex-col grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 grow line-clamp-3">
            {project.shortDescription}
          </p>
          
          <div className="mt-auto"> {/* タグを下に配置するためのmt-auto */}
            <div className="flex flex-wrap gap-2">
              {project.techTags.slice(0, 4).map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* 詳細への誘導 */}
            <p className="mt-4 text-blue-500 hover:text-blue-400 transition-colors duration-150 font-semibold text-sm">
              詳細を見る &rarr;
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};