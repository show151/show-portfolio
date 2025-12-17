import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/show151', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/your-linkedin-id', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
];

const navLinks = [
  { name: 'ホーム', href: '/' },
  { name: 'プロジェクト', href: '/projects' },
  { name: 'スキル', href: '/skills' },
  { name: 'お問い合わせ', href: '/contact' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 mt-auto">
      <div className="container mx-auto px-4 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-200 dark:border-slate-700">
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-slate-50 mb-4">YourName Portfolio</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300">
              Next.jsとAzureを用いたモダンなアプリケーション開発の実績を紹介しています。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-slate-50 mb-4">リンク</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-slate-50 mb-4">つながる</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 rounded-lg bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors border border-gray-200 dark:border-slate-600"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-slate-400">
            &copy; {currentYear} YourName. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};