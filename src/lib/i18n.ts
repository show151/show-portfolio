export const translations = {
  ja: {
    nav: {
      home: 'ホーム',
      projects: 'プロジェクト',
      skills: 'スキル',
      profile: 'プロフィール',
      career: 'キャリア',
      contact: 'お問い合わせ',
    },
    home: {
      title: 'Cloud × AI で',
      subtitle: '作って、届ける',
      description: '総合課題実習と個人開発の制作記録。',
      viewProjects: '全ての作品を見る',
      github: 'GitHubへ',
      featuredProjects: '主要な作品',
      noProjects: 'まだ作品データが登録されていません。',
      addProjects: 'に作品を追加してください。',
    },
    skills: {
      title: '💡 技術スタック',
      description: 'Web / Python / Kotlin を中心に開発。',
      categories: {
        programming: 'プログラミング言語',
        tools: '開発ツール & IDE',
        cloud: 'クラウド & インフラ',
      },
    },
    contact: {
      title: '✉ お問い合わせ',
      description: 'ご連絡はメールまたはSNSへ。',
      email: 'Eメール',
      emailDesc: '返信は順次行います。',
      githubDesc: 'コードはこちら。',
      linkedinDesc: '経歴はこちら。',
      footerNote: 'Next.js + Tailwind CSS。ソースはGitHubにあります。',
    },
    profile: {
      title: '👤 Profile',
      education: '学歴',
      location: '住所',
      born: '生年',
      interests: '趣味',
      educationValue: '大阪公立大学工業高等専門学校 在学',
      locationValue: '大阪府',
      bornValue: '2007年',
      interestsValue: '旅行 / 会話 / 英語 / スポーツ / 読書',
    },
    projects: {
      title: '🛠️ 開発実績',
      description: '学校制作（総合課題実習）と個人開発を掲載。設計〜実装まで。',
      count: '全 {count} プロジェクト',
      viewDetails: '詳細を見る',
      backToList: '一覧に戻る',
      projectOverview: 'プロジェクト概要',
      techStack: '使用技術',
      githubRepo: 'GitHub リポジトリ',
      liveDemo: 'ライブデモ',
      data: {
        object_detection_app: {
          title: '物体検知アプリ',
          shortDescription: `製作時期: 2024/11
高専祭の展示として総合課題実習1で製作中のアプリのAIの動作部分を実装しました`,
          fullDescription: `製作時期: 2024/11

高専祭の展示として総合課題実習1で製作中のアプリに、物体検知（YOLO）の動作部分を実装しました。`,
        },
        hacku_app: {
          title: 'HACKU アプリ',
          shortDescription: `製作期間: 2024/06-2025/01
総合課題実習1で制作
カメラで撮影した画像を物体認識し、結果の翻訳表示やデコレーションを行うAndroidアプリです。`,
          fullDescription: `製作期間: 2024/06-2025/01
制作: 総合課題実習1

カメラで撮影した画像に対してTensorFlow Liteによる物体認識を実行し、認識結果の表示・翻訳（Google Cloud Translation API）・画像デコレーションの機能を実装したAndroidアプリです。`,
        },
        next_blog_app: {
          title: 'Next Blog App',
          shortDescription: `製作時期: 2025/12-2026/01
管理画面つきブログ（記事/カテゴリ/画像アップロード）`,
          fullDescription: `製作時期: 2025/12-2026/01

Next.js（App Router）で実装したブログアプリ。

機能:
- 記事一覧 / 記事詳細
- 管理画面（ログイン / 記事CRUD / カテゴリCRUD）
- 複数カテゴリ付与
- カバー画像アップロード（Supabase Storage）`,
        },
        household_budget_app: {
          title: '家計簿作成ツール',
          shortDescription: `製作時期:2024/12-2025/01
製作時間:約30時間`,
          fullDescription: `製作時期: 2024/12-2025/01
製作時間: 約30時間

収入・支出の追加や、月ごとの収支を表示できるPythonアプリケーションです。直感的なGUIで簡単に家計簿を管理できます。`,
        },
        study_app: {
          title: '学習ツール',
          shortDescription: `製作時期:2025/01-2025/02
製作時間:約15時間`,
          fullDescription: `製作時期: 2025/01-2025/02
製作時間: 約15時間

タイマー機能や目標設定機能などを備えた学習支援アプリケーションです。効率的な学習をサポートします。`,
        },
        gundam_game: {
          title: 'ガンダムバトルゲーム',
          shortDescription: `製作時期: 2024/06
製作時間: 約2時間`,
          fullDescription: `製作時期: 2024/06
製作時間: 約2時間

Google Colaboratory上で、Pythonで簡易的なターン制バトルを実装しました。`,
        },
        kyoto_guide_app: {
          title: '京都観光音声ガイドアプリ',
          shortDescription: `製作時期:2026/01-2026/02
製作内容:京都駅周辺スポットの音声ガイド付き観光アプリ`,
          fullDescription: '京都駅周辺の観光スポットを、位置情報と連動した音声ガイドで案内するモバイルアプリです。スポット検索、マップ表示、詳細情報表示に加えて、対象スポットの半径内に入ると音声説明を自動再生する機能を実装しました。オフライン動作にも対応しています。',
        },
        pm_management_app: {
          title: 'PM Management App',
          shortDescription: `製作時期:2026/01/30-2026/02/19
製作時間:70時間以上`,
          fullDescription: 'プロジェクト管理とタスク実行ログ（見積/実績・振り返り）を一体化したWebアプリケーションです。親子タスク（WBS）管理、見積と実績の可視化、完了時の振り返り記録、オーナー/メンバー権限管理、タイムラインとダッシュボードによる進捗確認機能を実装しました。',
        },
      },
    },
    career: {
      title: 'キャリア',
      description: '学内外の活動履歴。',
      timeline: {
        entry: {
          date: '2023年4月',
          title: '大阪公立大学工業高等専門学校 入学',
          description: '技術分野を軸に、学内外での活動を本格的に開始。',
        },
        gakuyukai: {
          date: '2023年5月〜2026年3月',
          title: '学友会執行部に所属',
          description: '学内イベントの運営に継続的に関与し、組織運営の経験を積む。',
        },
        hatarakubu: {
          date: '2023年9月〜2026年3月',
          title: '中高生向けキャリア探究サービス「はたらく部」に参加',
          description: '約2年半にわたり、社会人・学生との対話やプログラムを通じて、\nキャリア観・働き方・社会との関わりについて探究。',
        },
        audioManager: {
          date: '2025年4月〜2026年3月',
          title: '学友会執行部 音響課長',
          description: '音響面の統括、新人研修の企画・運営を担当し、\nチームマネジメントおよび現場対応力を磨く。',
        },
        ideathon: {
          date: '2025年8月〜2025年9月',
          title: '「大公大高専生×企業 共創アイデアソン2025」に参加',
          description: 'スマレジ部門にて優秀賞を受賞。\n企業課題に対する提案力とチームでの共創経験を得る。',
        },
        aiSemiconductor: {
          date: '2025年8月〜2025年10月',
          title: '東京大学 松尾・岩澤研究室 主宰\n「AIと半導体 AI半導体講座 2025 Summer」受講',
          description: '優秀生に選出され、AIと半導体の基礎から応用までを体系的に学ぶ。',
        },
        canvasX: {
          date: '2025年12月〜2026年2月',
          title: '若年層向け成果連動型キャリア実践プログラム「Canvas X」に参加',
          description: '実践型プログラムを通じて、成果創出と自己成長の両立を経験。',
        },
        gci: {
          date: '2025年12月〜2026年2月',
          title: '東京大学 松尾・岩澤研究室 主宰\n「東京大学グローバル消費インテリジェンス寄付講座（GCI）Winter 2025」受講',
          description: 'データ分析・意思決定に関する実践的知見を習得。',
        },
        aiBusiness: {
          date: '2026年（予定）',
          title: '東京大学 松尾・岩澤研究室 主宰\n「AI経営 寄付講座 〜AI Business Insights 2026〜」受講予定',
          description: 'AIと経営・ビジネスの接続を学ぶ予定。',
        },
        graduation: {
          date: '2028年3月（予定）',
          title: '大阪公立大学工業高等専門学校 卒業予定',
          description: '',
        },
      },
    },
    footer: {
      portfolioDesc: 'Next.js で作ったポートフォリオ。',
      links: 'リンク',
      connect: 'つながる',
      copyright: 'All rights reserved. Built with Next.js and Tailwind CSS.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      profile: 'Profile',
      career: 'Career',
      contact: 'Contact',
    },
    home: {
      title: 'Cloud × AI',
      subtitle: 'Build. Ship.',
      description: 'School and personal projects.',
      viewProjects: 'View All Projects',
      github: 'To GitHub',
      featuredProjects: 'Featured Projects',
      noProjects: 'No projects have been registered yet.',
      addProjects: ' to add projects.',
    },
    skills: {
      title: '💡 Tech Stack',
      description: 'Web / Python / Kotlin.',
      categories: {
        programming: 'Programming Languages',
        tools: 'Development Tools & IDE',
        cloud: 'Cloud & Infrastructure',
      },
    },
    contact: {
      title: '✉ Contact',
      description: 'Email or social works best.',
      email: 'Email',
      emailDesc: 'Replies as available.',
      githubDesc: 'Source code.',
      linkedinDesc: 'Work history.',
      footerNote: 'Built with Next.js + Tailwind CSS. Source on GitHub.',
    },
    profile: {
      title: '👤 Profile',
      education: 'Education',
      location: 'Location',
      born: 'Born',
      interests: 'Interests',
      educationValue: 'Osaka Metropolitan University College of Technology (Current)',
      locationValue: 'Osaka, Japan',
      bornValue: '2007',
      interestsValue: 'Travel / Conversation / English / Sports / Reading',
    },
    projects: {
      title: '🛠️ Projects',
      description: 'A selection of school and personal projects—design to implementation.',
      count: 'Total {count} Projects',
      viewDetails: 'View Details',
      backToList: 'Back to list',
      projectOverview: 'Project Overview',
      techStack: 'Tech Stack',
      githubRepo: 'GitHub Repository',
      liveDemo: 'Live Demo',
      data: {
        object_detection_app: {
          title: 'Object Detection App',
          shortDescription: `Development Period: 2024/11
Implemented the object detection (YOLO) part of an app for a technical college festival project.`,
          fullDescription: `Development Period: 2024/11

Implemented the object detection (YOLO) component for an app being developed for a technical college festival exhibition.`,
        },
        hacku_app: {
          title: 'HACKU App',
          shortDescription: `Development Period: 2024/06-2025/01
Built for Comprehensive Project Practice 1
An Android app that recognizes objects in photos, translates results, and supports image decoration.`,
          fullDescription: `Development Period: 2024/06-2025/01
Built for Comprehensive Project Practice 1

An Android app that runs object recognition on photos using TensorFlow Lite, then displays and translates the detected results (Google Cloud Translation API) and provides an image decoration feature.`,
        },
        next_blog_app: {
          title: 'Next Blog App',
          shortDescription: `Development Period: 2025/12-2026/01
Blog with admin (posts, categories, cover image upload).`,
          fullDescription: `Development Period: 2025/12-2026/01

Blog application built with Next.js (App Router).

Features:
- Post list / post detail
- Admin (login / post CRUD / category CRUD)
- Multiple categories per post
- Cover image upload (Supabase Storage)`,
        },
        household_budget_app: {
          title: 'Household Budget Tool',
          shortDescription: `Development Period: 2024/12-2025/01
Development Time: About 30 hours`,
          fullDescription: `Development Period: 2024/12-2025/01
Development Time: About 30 hours

A Python application that allows you to add income and expenses and display monthly financial summaries. Easy household budget management with an intuitive GUI.`,
        },
        study_app: {
          title: 'Study Tool',
          shortDescription: `Development Period: 2025/01-2025/02
Development Time: About 15 hours`,
          fullDescription: `Development Period: 2025/01-2025/02
Development Time: About 15 hours

A study support application with timer functions and goal-setting features. Supports efficient learning.`,
        },
        gundam_game: {
          title: 'Gundam Battle Game',
          shortDescription: `Development Period: 2024/06
Development Time: About 2 hours`,
          fullDescription: `Development Period: 2024/06
Development Time: About 2 hours

Built a simple turn-based battle game in Python on Google Colaboratory.`,
        },
        kyoto_guide_app: {
          title: 'Kyoto Audio Guide App',
          shortDescription: `Development Period: 2026/01-2026/02
Scope: Tourist app with location-based audio guide around Kyoto Station`,
          fullDescription: 'A mobile app that guides users through tourist spots around Kyoto Station with location-linked audio guidance. It includes spot search, map view, and detailed spot pages, plus automatic audio playback when entering each spot radius. Offline operation is also supported.',
        },
        pm_management_app: {
          title: 'PM Management App',
          shortDescription: `Development Period: 2026/01/30-2026/02/19
Development Time: 70+ hours`,
          fullDescription: 'A web application that integrates project management with task execution logs (estimated vs actual time and retrospectives). It includes parent-child task (WBS) management, estimation/actual visualization, completion-time review notes, owner/member permission controls, and progress tracking with timeline and dashboard views.',
        },
      },
    },
    career: {
      title: 'Career',
      description: 'Activity timeline.',
      timeline: {
        entry: {
          date: 'April 2023',
          title: 'Enrolled in Osaka Metropolitan University College of Technology',
          description: 'Started full-scale activities both inside and outside the school, focusing on technical fields.',
        },
        gakuyukai: {
          date: 'May 2023 - March 2026',
          title: 'Member of Student Association Executive Committee',
          description: 'Continuously involved in organizing school events and gained experience in organizational management.',
        },
        hatarakubu: {
          date: 'September 2023 - March 2026',
          title: 'Participated in "Hataraku-bu" Career Exploration Service for Junior and Senior High School Students',
          description: 'For about 2.5 years, explored career perspectives, work styles, and social engagement\nthrough dialogues and programs with working professionals and students.',
        },
        audioManager: {
          date: 'April 2025 - March 2026',
          title: 'Student Association Executive Committee - Audio Section Chief',
          description: 'Responsible for overall audio management and planning/operating new member training,\ndeveloping team management and on-site response capabilities.',
        },
        ideathon: {
          date: 'August 2025 - September 2025',
          title: 'Participated in "Osaka Metropolitan University College of Technology Students × Companies Co-creation Ideathon 2025"',
          description: 'Won Excellence Award in the Smaregi division.\nGained proposal skills for corporate challenges and team co-creation experience.',
        },
        aiSemiconductor: {
          date: 'August 2025 - October 2025',
          title: 'Completed "AI and Semiconductors AI Semiconductor Course 2025 Summer"\nHosted by University of Tokyo Matsuo-Iwasawa Laboratory',
          description: 'Selected as an outstanding student and systematically learned AI and semiconductors from basics to applications.',
        },
        canvasX: {
          date: 'December 2025 - February 2026',
          title: 'Participated in "Canvas X" Performance-linked Career Practice Program for Young People',
          description: 'Experienced balancing achievement creation and self-growth through practical programs.',
        },
        gci: {
          date: 'December 2025 - February 2026',
          title: 'Completed "University of Tokyo Global Consumer Intelligence Endowed Course (GCI) Winter 2025"\nHosted by University of Tokyo Matsuo-Iwasawa Laboratory',
          description: 'Acquired practical knowledge in data analysis and decision-making.',
        },
        aiBusiness: {
          date: '2026 (Planned)',
          title: 'Planned to Complete "AI Management Endowed Course ~AI Business Insights 2026~"\nHosted by University of Tokyo Matsuo-Iwasawa Laboratory',
          description: 'Planning to learn the connection between AI and management/business.',
        },
        graduation: {
          date: 'March 2028 (Planned)',
          title: 'Planned Graduation from Osaka Metropolitan University College of Technology',
          description: '',
        },
      },
    },
    footer: {
      portfolioDesc: 'Portfolio built with Next.js.',
      links: 'Links',
      connect: 'Connect',
      copyright: 'All rights reserved. Built with Next.js and Tailwind CSS.',
    },
  },
};

export type Language = keyof typeof translations;
