export const translations = {
  ja: {
    nav: {
      home: 'ホーム',
      projects: 'プロジェクト',
      skills: 'スキル',
      profile: 'プロフィール',
      contact: 'お問い合わせ',
    },
    home: {
      title: 'クラウドとAIを軸に、',
      subtitle: '学生の枠を超えた力を世界へ',
      description: 'アイデアを止めず、形にして届ける開発スタイル',
      viewProjects: '全ての作品を見る',
      github: 'GitHubへ',
      featuredProjects: '主要な作品',
    },
    skills: {
      title: '💡 技術スタック',
      description: 'HTML/CSS、Python、Kotlinを中心とした幅広い技術スタックで開発しています。',
      categories: {
        programming: 'プログラミング言語',
        tools: '開発ツール & IDE',
        cloud: 'クラウド & インフラ',
      },
    },
    contact: {
      title: '✉ お問い合わせ',
      description: 'プロジェクトに関するご質問や、採用に関するお問い合わせなど、お気軽にご連絡ください。',
      email: 'Eメール',
      emailDesc: '最も迅速な連絡手段です。24時間以内にご返信いたします。',
      githubDesc: '全てのソースコードはGitHubでご確認いただけます。',
      linkedinDesc: '職務経歴の詳細や業界人脈を確認できます。',
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
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      profile: 'Profile',
      contact: 'Contact',
    },
    home: {
      title: 'Cloud & AI Focused,',
      subtitle: 'Beyond Student Limits to the World',
      description: 'Development style that never stops ideas and delivers them in form',
      viewProjects: 'View All Projects',
      github: 'To GitHub',
      featuredProjects: 'Featured Projects',
    },
    skills: {
      title: '💡 Tech Stack',
      description: 'Developing with a wide range of tech stack centered on HTML/CSS, Python, and Kotlin.',
      categories: {
        programming: 'Programming Languages',
        tools: 'Development Tools & IDE',
        cloud: 'Cloud & Infrastructure',
      },
    },
    contact: {
      title: '✉ Contact',
      description: 'Feel free to contact me for project inquiries, recruitment, or any questions.',
      email: 'Email',
      emailDesc: 'The fastest way to reach me. I will reply within 24 hours.',
      githubDesc: 'All source code is available on GitHub.',
      linkedinDesc: 'Check detailed work history and professional network.',
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
  },
};

export type Language = keyof typeof translations;