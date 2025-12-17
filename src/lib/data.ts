import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'gundam_game',
    title: 'ガンダムバトルゲーム',
    shortDescription: 'GoogleColaboratoryで簡易的なターン制ゲームを作成しました',
    imagePath: '/images/gundam_game.png',
    techTags: ['Google Colaboratory', 'Python', 'Jupyter Notebook'],
    githubUrl: '',
    pageUrl: 'https://colab.research.google.com/drive/1glYRcYt5coMsHn8cdaB2bWm6v4YBDZM1#scrollTo=chDHzWcEWKFF',
    fullDescription: 'Pythonを使用してターン制バトルシステムを実装。キャラクター管理、戦闘ロジック、UI表示を含む完全なゲームシステムです。',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find(project => project.slug === slug);