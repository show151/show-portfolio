import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'object_detection_app',
    title: '物体検知アプリ',
    shortDescription: '高専祭の展示として総合課題実習1で製作中のアプリのAIの動作部分のアプリを製作しました',
    imagePath: '/images/yolo_app.png',
    techTags: ['Kotlin', 'AI', 'YOLO'],
    githubUrl: 'https://github.com/show151/TFcamera_app',
    pageUrl: '',
    fullDescription: '高専祭の展示として総合課題実習1で製作中のアプリのAIの動作部分を実装。物体検知技術を用いたアプリケーションです。',
  },
  {
    id: 2,
    slug: 'household_budget_app',
    title: '家計簿作成ツール',
    shortDescription: `製作時期:2024/12-2025/01
                       製作時間:約30時間`,
    imagePath: '/images/household_budget.mp4',
    techTags: ['Python', 'GUI', 'Tkinter'],
    githubUrl: 'https://github.com/show151/Household-Budget-Creation-App',
    pageUrl: '',
    fullDescription: '製作時期: 2024/12-2025/01\n製作時間: 約30時間\n\n収入・支出の追加や、月ごとの収支を表示できるPythonアプリケーションです。直感的なGUIで簡単に家計簿を管理できます。',
  },
  {
    id: 3,
    slug: 'study_app',
    title: '学習ツール',
    shortDescription: `製作時期:2025/01-2025/02
                       製作時間:約15時間`,
    imagePath: '/images/study_app.mp4',
    techTags: ['Python', 'GUI', 'Timer', 'Productivity'],
    githubUrl: 'https://github.com/show151/Studying-App',
    pageUrl: '',
    fullDescription: '製作時期: 2025/01-2025/02\n製作時間: 約15時間\n\nタイマー機能や目標設定機能などを備えた学習支援アプリケーションです。効率的な学習をサポートします。',
  },
  {
    id: 4,
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