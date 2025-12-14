import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/your-github-username', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/your-linkedin-id', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' }, // 例：プライバシーポリシー
  ];

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 mt-12 pt-10 pb-6">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b pb-8 border-gray-100 dark:border-gray-800">
          
          {/* 1. サイト概要 */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">YourName Portfolio</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Next.jsとAzureを用いたモダンなアプリケーション開発の実績を紹介しています。
            </p>
          </div>

          {/* 2. ナビゲーションリンク */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. ソーシャルメディア */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-500 hover:text-white transition-colors duration-200"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 著作権表示 */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {currentYear} YourName. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};