import { User, MapPin, Calendar, Heart } from 'lucide-react';

export const metadata = {
  title: 'Profile | YourName Portfolio',
  description: 'プロフィール情報',
};

const profileData = [
  { icon: User, label: '学歴', value: '大阪公立大学工業高等専門学校 在学' },
  { icon: MapPin, label: '出身', value: '大阪府' },
  { icon: Calendar, label: '生年', value: '2007年' },
  { icon: Heart, label: '趣味', value: '旅行 / 会話 / 英語 / スポーツ / 読書' },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">👤 プロフィール</span>
          </h1>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-3xl space-y-4">
          {profileData.map((item, index) => (
            <div 
              key={item.label} 
              className="bg-gray-900 rounded-xl p-6 border-2 border-gray-700 hover:border-blue-500 transition-colors animate-slide-in-left"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-900/30">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-400 mb-2">{item.label}</h3>
                  <p className="text-white">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}