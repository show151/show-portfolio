import { Zap, Server, Code, Palette, Cloud } from 'lucide-react';

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
      colorClass = 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      break;
    case 'Advanced':
      colorClass = 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      break;
    case 'Intermediate':
    default:
      colorClass = 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      break;
  }
  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${colorClass}`}>
      {level}
    </span>
  );
};

export default function SkillsPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
        💡 技術スタック (Skills)
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-16 text-center">
        私が得意とする技術分野と、それぞれの経験レベルを詳細に示しています。特に、**TypeScriptとAzure**に注力しています。
      </p>

      <div className="space-y-16">
        {SKILL_DATA.map((category) => (
          <section key={category.title}>
            {/* カテゴリーヘッダー */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-blue-500 pb-2 flex items-center space-x-3">
              <category.icon className="w-7 h-7 text-blue-600" />
              <span>{category.title}</span>
            </h2>

            {/* スキルリスト */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {category.skills.map((skill) => (
                <div key={skill.name} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                    <LevelBadge level={skill.level} />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}