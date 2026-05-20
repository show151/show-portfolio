import { Metadata } from 'next';
import { formatTitle } from '@/lib/title';
import { translations } from '@/lib/i18n';
import CareerClient from '@/components/pages/CareerClient';

export const metadata: Metadata = {
  title: formatTitle(translations.ja.career.title, 'ja'),
};

export default function CareerPage() {
  return <CareerClient />;
}
