import HomeClient from '@/components/pages/HomeClient';
import { formatTitle } from '@/lib/title';
import { translations } from '@/lib/i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: formatTitle(`${translations.ja.home.title} - ${translations.ja.home.subtitle}`, 'ja'),
  description: 'TypeScript・React・Kotlin・Pythonを使って開発する情報系高専生、河野聖のポートフォリオサイトです。',
};

export default function Page() {
  return <HomeClient />;
}
