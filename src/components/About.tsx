import { User, Target, Zap, ShieldCheck, HeartHandshake, FileText } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface AboutProps {
  profile: ProfileData;
  isDarkMode: boolean;
  onOpenResume: () => void;
}

export default function About({ profile, isDarkMode, onOpenResume }: AboutProps) {
  const principles = [
    {
      icon: Zap,
      title: 'Performa & Kecepatan',
      description:
        'Setiap milidetik berharga. Saya memprioritaskan pemuatan instan, optimasi bundler, dan efisiensi memori di setiap aplikasi yang dibangun.',
    },
    {
      icon: ShieldCheck,
      title: 'Arsitektur Bersih & Scalable',
      description:
        'Kode yang mudah dibaca, mudah diuji (testable), serta dapat dirawat dalam jangka panjang dengan standar TypeScript dan pemisahan concerns yang ketat.',
    },
    {
      icon: Target,
      title: 'Desain Berpusat Pada Pengguna',
      description:
        'Memadukan keindahan visual dengan ergonomi UX yang intuitif dan kepatuhan aksesibilitas WCAG sehingga inklusif untuk semua pengguna.',
    },
    {
      icon: HeartHandshake,
      title: 'Komunikasi & Transparansi',
      description:
        'Selalu proaktif menyampaikan perkembangan, terbuka terhadap umpan balik, dan berfokus pada hasil bisnis yang nyata bagi pemilik produk.',
    },
  ];

  return (
    <section id="tentang" className="py-20 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (Natural Editorial Title, No Comment Prefix) */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            Perkenalan
          </p>
          <h2
            className={`text-2xl sm:text-4xl font-bold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-stone-900'
            }`}
            style={{ textWrap: 'balance' }}
          >
            Mengenal Lebih Dekat
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${isDarkMode ? 'text-zinc-400' : 'text-stone-600'}`}>
            Dedikasi saya dalam memadukan keahlian teknik pemrograman dengan kepekaan desain antarmuka.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base leading-relaxed">
            <p className={isDarkMode ? 'text-zinc-300' : 'text-stone-700'}>
              Halo! Saya <span className="font-semibold text-indigo-400">{profile.name}</span>, seorang pengembang perangkat lunak yang berfokus pada ekosistem web modern. Sejak awal perjalanan di bidang teknologi, saya selalu antusias melihat bagaimana barisan kode dapat bertransformasi menjadi solusi interaktif yang menyelesaikan masalah nyata.
            </p>

            <p className={isDarkMode ? 'text-zinc-400' : 'text-stone-600'}>
              Saya berpengalaman merancang aplikasi dari tahap ide, pembuatan prototipe interaktif, penulisan arsitektur frontend modular, hingga implementasi backend API yang tangguh dan aman. Saya percaya bahwa produk digital yang hebat tidak hanya berfungsi tanpa cacat, tetapi juga memberikan kenikmatan estetika saat digunakan.
            </p>

            <p className={isDarkMode ? 'text-zinc-400' : 'text-stone-600'}>
              Di luar aktivitas pemrograman, saya gemar mengeksplorasi tren teknologi terbaru, berkontribusi pada proyek open-source, dan berdiskusi seputar desain produk dengan komunitas pengembang.
            </p>

            {/* Quick Fast Facts (Zero-Pill, clean unboxed list) */}
            <div className={`mt-6 p-4 rounded-xl border space-y-3 ${
              isDarkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-stone-50 border-stone-200'
            }`}>
              <h3 className={`text-xs font-semibold uppercase tracking-wider ${
                isDarkMode ? 'text-zinc-400' : 'text-stone-500'
              }`}>
                Ringkasan Profil Singkat
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 font-medium">Domisili:</span>
                  <span className={isDarkMode ? 'text-zinc-200' : 'text-stone-800'}>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 font-medium">Pengalaman:</span>
                  <span className={isDarkMode ? 'text-zinc-200' : 'text-stone-800'}>{profile.yearsOfExperience} Tahun di Industri</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 font-medium">Bahasa:</span>
                  <span className={isDarkMode ? 'text-zinc-200' : 'text-stone-800'}>Indonesia (Fasih), English (Kerja)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 font-medium">Format Kolaborasi:</span>
                  <span className={isDarkMode ? 'text-zinc-200' : 'text-stone-800'}>Remote / Kontrak / Penuh Waktu</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOpenResume}
                  type="button"
                  className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors border ${
                    isDarkMode
                      ? 'border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700'
                      : 'border-stone-300 bg-stone-200 text-stone-900 hover:bg-stone-300'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Lihat Dokumen CV / Riwayat Hidup</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Core Principles Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all ${
                    isDarkMode
                      ? 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                      : 'bg-white border-stone-200 hover:border-stone-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg shrink-0 ${
                      isDarkMode ? 'bg-indigo-950/70 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-semibold mb-1 ${
                        isDarkMode ? 'text-zinc-100' : 'text-stone-900'
                      }`}>
                        {principle.title}
                      </h4>
                      <p className={`text-xs leading-relaxed ${
                        isDarkMode ? 'text-zinc-400' : 'text-stone-600'
                      }`}>
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
