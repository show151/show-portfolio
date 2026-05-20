import { Metadata } from 'next';
import { formatTitle } from '@/lib/title';
import { translations } from '@/lib/i18n';
import ProfileClient from '@/components/pages/ProfileClient';

export const metadata: Metadata = {
  title: formatTitle(translations.ja.profile.title, 'ja'),
};

export default function ProfilePage() {
  return <ProfileClient />;
}
