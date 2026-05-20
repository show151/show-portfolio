import { Project } from '@/types/project';
import { toTime } from '@/lib/utils';

export const getProjectsSortedByDate = (list: Project[]) =>
  [...list].sort((a, b) => {
    const aTime = toTime(a.endDate ?? a.startDate);
    const bTime = toTime(b.endDate ?? b.startDate);
    return bTime - aTime;
  });

export const projects: Project[] = [
  {
    id: 1,
    slug: 'object_detection_app',
    title: '🧠 物体検知アプリ',
    shortDescription: `製作時期: 2024/11
高専祭の展示として総合課題実習1で製作中のアプリのAIの動作部分を実装しました`,
    imagePath: '/images/yolo_app.png',
    techTags: ['Kotlin', 'AI', 'YOLO'],
    githubUrl: 'https://github.com/show151/TFcamera_app',
    pageUrl: '',
    fullDescription: '製作時期: 2024/11\n\n高専祭の展示として総合課題実習1で製作中のアプリに、物体検知（YOLO）の動作部分を実装しました。',
    startDate: '2024-11',
  },
  {
    id: 2,
    slug: 'household_budget_app',
    title: '💳 家計簿作成ツール',
    shortDescription: `製作時期:2024/12-2025/01
                       製作時間:約30時間`,
    imagePath: '/images/household_budget.mp4',
    techTags: ['Python', 'GUI', 'Tkinter'],
    githubUrl: 'https://github.com/show151/Household-Budget-Creation-App',
    pageUrl: '',
    fullDescription: '製作時期: 2024/12-2025/01\n製作時間: 約30時間\n\n収入・支出の追加や、月ごとの収支を表示できるPythonアプリケーションです。直感的なGUIで簡単に家計簿を管理できます。',
    startDate: '2024-12',
    endDate: '2025-01',
  },
  {
    id: 3,
    slug: 'study_app',
    title: '⏱️ 学習ツール',
    shortDescription: `製作時期:2025/01-2025/02
                       製作時間:約15時間`,
    imagePath: '/images/study_app.mp4',
    techTags: ['Python', 'GUI', 'Timer', 'Productivity'],
    githubUrl: 'https://github.com/show151/Studying-App',
    pageUrl: '',
    fullDescription: '製作時期: 2025/01-2025/02\n製作時間: 約15時間\n\nタイマー機能や目標設定機能などを備えた学習支援アプリケーションです。効率的な学習をサポートします。',
    startDate: '2025-01',
    endDate: '2025-02',
  },
  {
    id: 4,
    slug: 'gundam_game',
    title: '🎮 ガンダムバトルゲーム',
    shortDescription: `製作時期: 2024/06
製作時間: 約2時間`,
    imagePath: '/images/gundam_game.png',
    techTags: ['Google Colaboratory', 'Python', 'Jupyter Notebook'],
    githubUrl: '',
    pageUrl: 'https://colab.research.google.com/drive/1glYRcYt5coMsHn8cdaB2bWm6v4YBDZM1#scrollTo=chDHzWcEWKFF',
    fullDescription: '製作時期: 2024/06\n製作時間: 約2時間\n\nGoogle Colaboratory上で、Pythonで簡易的なターン制バトルを実装しました。',
    startDate: '2024-06',
  },
  {
    id: 5,
    slug: 'kyoto_guide_app',
    title: '🗺️ 京都観光音声ガイドアプリ',
    shortDescription: `製作時期:2026/01-2026/02
                       製作内容:京都駅周辺スポットの音声ガイド付き観光アプリ`,
    imagePath: '/images/kyoto_guide_app.png',
    techTags: ['React Native', 'Expo', 'TypeScript', 'Google Maps'],
    githubUrl: 'https://github.com/show151/Kyoto-guide-app',
    pageUrl: '',
    fullDescription: '京都駅周辺の観光スポットを、位置情報と連動した音声ガイドで案内するモバイルアプリです。スポット検索、マップ表示、詳細情報表示に加えて、対象スポットの半径内に入ると音声説明を自動再生する機能を実装しました。オフライン動作にも対応しています。',
    startDate: '2026-01',
    endDate: '2026-02',
  },
  {
    id: 6,
    slug: 'pm_management_app',
    title: '📊 PM Management App',
    shortDescription: `製作時期:2026/01/30-2026/02/19
                       製作時間:70時間以上`,
    imagePath: '/images/pm_management_app.png',
    techTags: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Supabase', 'PostgreSQL'],
    githubUrl: 'https://github.com/show151/pm-management-app',
    pageUrl: 'https://pm-management-app.vercel.app/',
    fullDescription: 'プロジェクト管理とタスク実行ログ（見積/実績・振り返り）を一体化したWebアプリケーションです。親子タスク（WBS）管理、見積と実績の可視化、完了時の振り返り記録、オーナー/メンバー権限管理、タイムラインとダッシュボードによる進捗確認機能を実装しました。',
    startDate: '2026-01-30',
    endDate: '2026-02-19',
  },
  {
    id: 7,
    slug: 'hacku_app',
    title: '📸 HACKU アプリ',
    shortDescription: `製作期間: 2024/06-2025/01
総合課題実習1で制作
カメラで撮影した画像を物体認識し、結果の翻訳表示やデコレーションを行うAndroidアプリです。`,
    imagePath: '/images/HACKUapp.png',
    techTags: ['Kotlin', 'Android', 'CameraX', 'TensorFlow Lite', 'Google Cloud Translate'],
    githubUrl: 'https://github.com/show151/HACKU_app',
    pageUrl: '',
    fullDescription: '製作期間: 2024/06-2025/01\n制作: 総合課題実習1\n\nカメラで撮影した画像に対してTensorFlow Liteによる物体認識を実行し、認識結果の表示・翻訳（Google Cloud Translation API）・画像デコレーションの機能を実装したAndroidアプリです。',
    startDate: '2024-06',
    endDate: '2025-01',
  },
  {
    id: 8,
    slug: 'next_blog_app',
    title: '📝 Next Blog App',
    shortDescription: `製作時期: 2025/12-2026/01
管理画面つきブログ（記事/カテゴリ/画像アップロード）`,
    imagePath: '/images/showblogapp.png',
    techTags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase'],
    githubUrl: 'https://github.com/show151/next-blog-app',
    pageUrl: '',
    fullDescription:
      '製作時期: 2025/12-2026/01\n\nNext.js（App Router）で実装したブログアプリ。\n\n機能:\n- 記事一覧 / 記事詳細\n- 管理画面（ログイン / 記事CRUD / カテゴリCRUD）\n- 複数カテゴリ付与\n- カバー画像アップロード（Supabase Storage）',
    startDate: '2025-12',
    endDate: '2026-01',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find(project => project.slug === slug);
