import { Mail, Github, Linkedin, FileText } from 'lucide-react';

// ページのメタデータを定義 (SEO対策)
export const metadata = {
  title: 'Contact | YourName Portfolio',
  description: 'お問い合わせ、GitHub、LinkedIn、履歴書などの連絡先情報',
};

// -----------------------------------------------------------
// 1. 連絡先データの定義
// -----------------------------------------------------------

const CONTACT_INFO = [
  { 
    title: 'Eメール', 
    icon: Mail, 
    value: 'show515k@outlook.jp', 
    href: 'mailto:show515k@outlook.jp', 
    description: '最も迅速な連絡手段です。24時間以内にご返信いたします。'
  },
  { 
    title: 'GitHub', 
    icon: Github, 
    value: 'show151', 
    href: 'https://github.com/show151', 
    description: '全てのソースコードと貢献はGitHubでご確認いただけます。'
  },
  { 
    title: 'LinkedIn', 
    icon: Linkedin, 
    value: 'Your Name (LinkedIn Profile)', 
    href: 'https://linkedin.com/in/your-linkedin-id', 
    description: '職務経歴の詳細や業界人脈を確認できます。'
  },
  { 
    title: '履歴書 (CV/Resume)', 
    icon: FileText, 
    value: 'Resume_YourName.pdf', 
    href: '/path/to/your/resume.pdf', // publicフォルダにPDFを配置
    description: 'PDF形式の最新の履歴書をダウンロードできます。'
  },
];

// -----------------------------------------------------------
// 2. ページのレンダリングコンポーネント
// -----------------------------------------------------------

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
        📧 Contact & Links
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16 text-center">
        プロジェクトに関するご質問や、採用に関するお問い合わせなど、お気軽にご連絡ください。
      </p>

      <div className="space-y-8">
        {CONTACT_INFO.map((item) => (
          <a 
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 group"
          >
            <div className="flex items-center space-x-6">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 group-hover:scale-105 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{item.value}</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">{item.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-16 text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <p className="text-gray-600 dark:text-gray-400">
          このサイトはNext.jsとTailwind CSSで構築されており、全てGitHubで公開されています。
        </p>
      </div>
    </main>
  );
}