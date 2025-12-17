import { Server, Code, Cloud, Wrench } from 'lucide-react';

export const metadata = {
  title: 'Skills & Tech Stack | YourName Portfolio',
  description: 'Python, TypeScript, AWS, Unityを中心とした開発スキル一覧',
};

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient' | 'Intermediate' | 'Basic' | 'Learning';
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
}

const SKILL_DATA: SkillCategory[] = [
  {
    title: 'プログラミング言語',
    icon: Code,
    skills: [
      { name: 'HTML', level: 'Expert' },
      { name: 'CSS', level: 'Expert' },
      { name: 'Python', level: 'Advanced' },
      { name: 'Kotlin', level: 'Advanced' },
      { name: 'JavaScript', level: 'Basic' },
      { name: 'C言語', level: 'Basic' },
      { name: 'C++', level: 'Basic' },
      { name: 'TypeScript', level: 'Learning' },
      { name: 'C#', level: 'Learning' },
    ],
  },
  {
    title: '開発ツール & IDE',
    icon: Wrench,
    skills: [
      { name: 'VSCode', level: 'Proficient' },
      { name: 'Android Studio', level: 'Advanced' },
      { name: 'Arduino', level: 'Intermediate' },
      { name: 'Visual Studio', level: 'Basic' },
      { name: 'Unity', level: 'Learning' },
    ],
  },
  {
    title: 'クラウド & インフラ',
    icon: Cloud,
    skills: [
      { name: 'Docker', level: 'Basic' },
      { name: 'AWS', level: 'Basic' },
      { name: 'Google Cloud Console', level: 'Basic' },
      { name: 'Ubuntu (Linux)', level: 'Learning' },
    ],
  },
];

const LevelBadge = ({ level }: { level: Skill['level'] }) => {
  const colors = {
    Expert: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
    Advanced: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    Proficient: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    Intermediate: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
    Basic: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
    Learning: 'bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-slate-300',
  };
  
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-md ${colors[level]}`}>
      {level}
    </span>
  );
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">💡 技術スタック</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            <span className="font-semibold text-blue-600 dark:text-blue-400">HTML/CSS</span>、<span className="font-semibold text-blue-600 dark:text-blue-400">Python</span>、<span className="font-semibold text-blue-600 dark:text-blue-400">Kotlin</span>を中心とした幅広い技術スタックで開発しています。
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-5xl space-y-8">
          {SKILL_DATA.map((category) => (
            <section key={category.title} className="bg-gray-900 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 pb-4 border-b-2 border-blue-500 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-900/30">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>
                <span className="gradient-text">{category.title}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white">{skill.name}</h3>
                      <LevelBadge level={skill.level} />
                    </div>
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