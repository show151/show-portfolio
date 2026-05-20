import { Metadata } from 'next';
import { formatTitle } from '@/lib/title';
import { translations } from '@/lib/i18n';
import ProfileClient from '@/components/pages/ProfileClient';

export const metadata: Metadata = {
  title: formatTitle(translations.ja.profile.title, 'ja'),
  description: '大阪府在住、大阪公立大学工業高等専門学校在学の河野聖（2007年生）のプロフィール。趣味は旅行・英語・スポーツ・読書。',
};

export default function ProfilePage() {
  return <ProfileClient />;
}
