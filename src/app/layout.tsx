import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // グローバルCSS (Tailwind)

// 新しくインポート
import { Header } from '@/components/layout/Header'; 
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

// サイトのメタデータ定義 (SEO対策にも重要)
export const metadata: Metadata = {
  title: 'YourName Portfolio | Next.js Developer',
  description: 'TypeScript, React, Azureのスキルを証明するモダンなポートフォリオサイト',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja"> 
      <body className={`${inter.className} bg-gray-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen flex flex-col`}>
        <Header />
        <div className="grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}