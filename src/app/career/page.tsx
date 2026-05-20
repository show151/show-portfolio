import { Metadata } from 'next';
import { formatTitle } from '@/lib/title';
import { translations } from '@/lib/i18n';
import CareerClient from '@/components/pages/CareerClient';

export const metadata: Metadata = {
  title: formatTitle(translations.ja.career.title, 'ja'),
  description: '大阪公立大学工業高等専門学校在学。学友会執行部・東京大学松尾・岩沢研究室講座受講など、河野聖のキャリア・活動履歴。',
};

export default function CareerPage() {
  return <CareerClient />;
}
