import { Metadata } from 'next';
import { formatTitle } from '@/lib/title';
import { translations } from '@/lib/i18n';
import SkillsClient from '@/components/pages/SkillsClient';

export const metadata: Metadata = {
  title: formatTitle(translations.ja.skills.title, 'ja'),
  description: 'TypeScript・Python・Kotlin・C#などのプログラミング言語、Docker・Google Cloudなどのクラウド・インフラ技術、実用英語技能検到2級などの資格。',
};

export default function SkillsPage() {
  return <SkillsClient />;
}
