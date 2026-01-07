"use client";

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const socialLinks = [
  { icon: Github, href: 'https://github.com/show151', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/聖-河野-447297324/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:show515k@outlook.jp', label: 'Email' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.profile, href: '/profile' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.skills, href: '/skills' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8 pb-8 border-b border-gray-800">
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t.footer.links}</h3>
            <div className="flex flex-wrap gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t.footer.connect}</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 rounded-lg bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors border border-gray-600"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} YourName. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};