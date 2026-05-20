export const SITE_NAME_JA = '河野 聖';
export const SITE_NAME_EN = 'Sho Kawano';

export function formatTitle(baseTitle: string, language: 'ja' | 'en' = 'ja') {
  const site = language === 'ja' ? SITE_NAME_JA : SITE_NAME_EN;
  return `${baseTitle} | ${site}`;
}
