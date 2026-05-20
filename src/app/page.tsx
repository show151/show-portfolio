import HomeClient from '@/components/pages/HomeClient';
import { formatTitle } from '@/lib/title';
import { translations } from '@/lib/i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: formatTitle(`${translations.ja.home.title} - ${translations.ja.home.subtitle}`, 'ja'),
};

export default function Page() {
  return <HomeClient />;
}
