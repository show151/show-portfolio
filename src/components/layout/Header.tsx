// 新しく作ったクライアントコンポーネントをインポート
import { DarkModeToggle } from '@/components/ui/DarkModeToggle'; 

export const Header: React.FC = () => {
  // ... (navItemsの定義はそのまま)

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* ... ロゴとナビゲーション ... */}
        
        <nav className="hidden md:flex space-x-6 items-center">
          {/* ... navItemsの表示 ... */}
          
          {/* 修正ポイント: クライアントコンポーネントを配置 */}
          <DarkModeToggle /> 
        </nav>
        
      </div>
    </header>
  );
};