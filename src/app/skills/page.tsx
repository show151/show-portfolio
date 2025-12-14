import { Server, Code, Cloud } from 'lucide-react';

// ページのメタデータを定義 (SEO対策)
export const metadata = {
  title: 'Skills & Tech Stack | YourName Portfolio',
  description: 'TypeScript, Next.js, Azureを中心とした開発スキル一覧',
};

// -----------------------------------------------------------
// 1. スキルデータの定義 (このファイル内に記述します)
// -----------------------------------------------------------

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  description: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType; // Lucide icon type
  skills: Skill[];
}

const SKILL_DATA: SkillCategory[] = [
  {
    title: 'フロントエンド & 言語',
    icon: Code,
    skills: [
      { name: 'TypeScript', level: 'Expert', description: '大規模アプリケーションでの厳格な型定義と設計。' },
      { name: 'React / Next.js', level: 'Expert', description: 'App Router, サーバーコンポーネント(RSC), SSR/SSGを用いた最適化。' },
      { name: 'JavaScript (ES Next)', level: 'Advanced', description: 'モダンな非同期処理、モジュールシステムを使いこなす。' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'カスタムデザインシステム構築、ユーティリティファーストでの迅速なUI開発。' },
    ],
  },
  {
    title: 'バックエンド & データベース',
    icon: Server,
    skills: [
      { name: 'Node.js / Express', level: 'Advanced', description: 'RESTful API設計と実装、ミドルウェアの利用。' },
      { name: 'Python / Django', level: 'Intermediate', description: 'Web APIの構築経験と、機械学習ライブラリの連携。' },
      { name: 'PostgreSQL', level: 'Advanced', description: '複雑なクエリ最適化、トランザクション管理。' },
      { name: 'MongoDB / Cosmos DB', level: 'Intermediate', description: 'NoSQLデータベースのデータモデリング。' },
    ],
  },
  {
    title: 'クラウド & DevOps',
    icon: Cloud,
    skills: [
      { name: 'Microsoft Azure', level: 'Advanced', description: 'Azure Functions (サーバーレス), App Service, Cosmos DB, Azure Static Web Appsのデプロイと管理。' },
      { name: 'Docker', level: 'Advanced', description: 'コンテナ化による開発環境の統一とCI/CDパイプラインへの組み込み。' },
      { name: 'Git / GitHub Actions', level: 'Advanced', description: '効果的なブランチ戦略とCI/CDパイプラインの構築。' },
    ],
  },
];

// -----------------------------------------------------------
// 2. ページのレンダリングコンポーネント
// -----------------------------------------------------------

const LevelBadge: React.FC<{ level: Skill['level'] }> = ({ level }) => {
  let colorClass = '';
  switch (level) {
    case 'Expert':
      colorClass = 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 border border-red-200 dark:border-red-800';
      break;
    case 'Advanced':
      colorClass = 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800';
      break;
    case 'Intermediate':
    default:
      colorClass = 'bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-slate-300 border border-gray-200 dark:border-slate-600';
      break;
  }
  return (
    <span className={`px-3 py-1.5 text-xs font-semibold rounded-md ${colorClass}`}>
      {level}
    </span>
  );
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* ヘッダーセクション */}
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl">💡</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
              技術スタック
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            特に<span className="font-semibold text-blue-600 dark:text-blue-400">TypeScript</span>と<span className="font-semibold text-blue-600 dark:text-blue-400">Azure</span>に注力し、
            モダンな開発手法を用いたアプリケーション構築を得意としています。
          </p>
        </div>
      </section>

      {/* スキルカテゴリー */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
        {SKILL_DATA.map((category) => (
          <section key={category.title} className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-slate-700">
            {/* カテゴリーヘッダー */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b-2 border-blue-500 dark:border-blue-400 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span>{category.title}</span>
            </h2>

            {/* スキルリスト */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {category.skills.map((skill) => (
                <div key={skill.name} className="p-5 bg-gray-50 dark:bg-slate-900/50 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 hover:shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                    <LevelBadge level={skill.level} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
        </div>
      </section>
    </main>
  );
}