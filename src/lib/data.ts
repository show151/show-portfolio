import { Project } from '@/types/project';

// ポートフォリオの作品データ配列
export const projects: Project[] = [
  {
    id: 1,
    slug: 'gundam_game',
    title: 'ガンダムバトルゲーム',
    shortDescription: 'GoogleColaboratoryで簡易的なターン制ゲームを作成しました',
    imagePath: 'public\images\gandum_game.png',
    techTags: ['Google Colaboratory', 'Python', 'Jupyter Notebook'],
    githubUrl: '',
    pageUrl: 'https://colab.research.google.com/drive/1glYRcYt5coMsHn8cdaB2bWm6v4YBDZM1#scrollTo=chDHzWcEWKFF',
    fullDescription: '',
  },
  // ２つ目、３つ目の作品データをここに追加していく...
];

/**
 * IDに基づいて作品を取得する関数
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}