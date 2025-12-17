import Link from 'next/link';
import { DarkModeToggle } from '@/components/ui/DarkModeToggle';

const navItems = [
  { name: 'ホーム', href: '/' },
  { name: 'プロジェクト', href: '/projects' },
  { name: 'スキル', href: '/skills' },
  { name: 'お問い合わせ', href: '/contact' },
];

export const Header = () => (
  <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-slate-700">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-slate-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          YourName
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 font-medium text-gray-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          <div className="ml-4 pl-4 border-l border-gray-200 dark:border-slate-700">
            <DarkModeToggle />
          </div>
        </nav>
      </div>
    </div>
  </header>
);