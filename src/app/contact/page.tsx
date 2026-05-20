import { Metadata } from 'next';
import { formatTitle } from '@/lib/title';
import { translations } from '@/lib/i18n';
import ContactClient from '@/components/pages/ContactClient';

export const metadata: Metadata = {
  title: formatTitle(translations.ja.contact.title, 'ja'),
  description: '河野聖へのお問い合わせはこちら。メール・GitHub・LinkedInからお気軽にどうぞ。',
};

export default function ContactPage() {
  return <ContactClient />;
}
