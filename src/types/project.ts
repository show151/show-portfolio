// 使用した技術（タグ）のリスト。
// Tailwind CSS や React など、ポートフォリオでアピールしたい技術を追加します。
export type TechTag = 
  | 'React'
  | 'Next.js'
  | 'TypeScript'
  | 'Tailwind CSS'
  | 'Node.js'
  | 'Express'
  | 'Python'
  | 'PostgreSQL'
  | 'Vercel'
  | 'Unit Testing'
  | 'REST API'
  | string; // その他のカスタムタグを許可

// 各作品（プロジェクト）の構造を定義
export interface Project {
  id: number;
  slug: string; // URLに使用するID (例: 'modern-dashboard')
  title: string;
  shortDescription: string; // 一覧ページに表示する短い説明
  imagePath: string; // public/images/からの相対パス
  techTags: TechTag[]; // 使用技術のリスト
  githubUrl: string; // GitHubリポジトリのURL
  pageUrl?: string; // 公開ページのURL（任意）
  fullDescription: string; // 詳細ページ用の長い説明
}