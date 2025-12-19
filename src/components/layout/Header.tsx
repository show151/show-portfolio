"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLanguage, LanguageToggle } from '@/components/ui/LanguageToggle';

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  
  const navItems = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.profile, href: '/profile' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.skills, href: '/skills' },
    { name: t.nav.contact, href: '/contact' },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            <span className="gradient-text">YourName</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 flex flex-col justify-center items-center gap-1 text-white hover:text-blue-400 transition-colors relative z-50"
            >
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out rounded-sm ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out rounded-sm ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out rounded-sm ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>
        
        <nav className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-800 transform transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="pt-20 px-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 font-medium rounded-lg transition-colors mb-2 ${
                    isActive 
                      ? 'text-blue-400 bg-gray-900' 
                      : 'text-white hover:text-blue-400 hover:bg-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
        
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/70 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </header>
  );
};