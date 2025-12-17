"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'ホーム', href: '/' },
  { name: 'プロジェクト', href: '/projects' },
  { name: 'スキル', href: '/skills' },
  { name: 'お問い合わせ', href: '/contact' },
];

export const Header = () => {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md shadow-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            <span className="gradient-text">YourName</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                    isActive 
                      ? 'text-blue-400 bg-gray-900' 
                      : 'text-white hover:text-blue-400 hover:bg-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};