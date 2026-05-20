import type { Metadata } from 'next';
import { SITE_NAME_JA } from '@/lib/title';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header'; 
import { Footer } from '@/components/layout/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: SITE_NAME_JA,
  description: 'TypeScript, React, Azureのスキルを証明するモダンなポートフォリオサイト',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja"> 
      <body suppressHydrationWarning className={`${inter.className} bg-black min-h-screen flex flex-col`}>
        <LanguageProvider>
          <Header />
          <div className="grow">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}