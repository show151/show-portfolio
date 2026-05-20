import { Metadata } from 'next';
import { formatTitle } from '@/lib/title';
import { translations } from '@/lib/i18n';
import ContactClient from '@/components/pages/ContactClient';

export const metadata: Metadata = {
  title: formatTitle(translations.ja.contact.title, 'ja'),
};

export default function ContactPage() {
  return <ContactClient />;
}
