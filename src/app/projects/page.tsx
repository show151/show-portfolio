import { Metadata } from 'next';
import { formatTitle } from '@/lib/title';
import { translations } from '@/lib/i18n';
import ProjectsClient from '@/components/pages/ProjectsClient';

export const metadata: Metadata = {
  title: formatTitle(translations.ja.projects.title, 'ja'),
  description: 'Kotlin・Python・Next.js・React Nativeなどで制作したアプリ・ツール一覧。物体検知・GUI・ブログ・PM管理アプリ・学校生活サポートアプリなど全 9 作品。',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
