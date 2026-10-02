import { useState } from 'react';
import { ArrowDown, Copy, Check, ExternalLink, Terminal, Sparkles, Code2, MapPin } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface HeroProps {
  profile: ProfileData;
  isDarkMode: boolean;
  onOpenResume: () => void;
}

export default function Hero({ profile, isDarkMode, onOpenResume }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[360px] opacity-25 blur-[120px] rounded-full"
        style={{
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(99,102,241,0.45) 0%, rgba(59,130,246,0.15) 50%, transparent 80%)'
            : 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(217,119,6,0.1) 50%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability status line (clean unboxed text with dot) */}
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className={isDarkMode ? 'text-zinc-300' : 'text-stone-700'}>
                {profile.status}
              </span>
              <span className="text-zinc-500" aria-hidden="true">·</span>
              <span className={`inline-flex items-center gap-1 ${isDarkMode ? 'text-zinc-400' : 'text-stone-500'}`}>
                <MapPin className="w-3 h-3" />
                {profile.location}
              </span>
            </div>

            {/* Main Headline with balanced wrap */}
            <div className="space-y-2">
              <p className={`text-base sm:text-lg font-medium tracking-tight ${isDarkMode ? 'text-zinc-400' : 'text-stone-600'}`}>
                Halo, saya <span className={`font-semibold ${isDarkMode ? 'text-zinc-100' : 'text-stone-900'}`}>{profile.name}</span>
              </p>
              <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] ${
                isDarkMode ? 'text-white' : 'text-stone-900'
              }`} style={{ textWrap: 'balance' }}>
                {profile.title}
              </h1>
            </div>

            {/* Subtitle / Headline */}
            <p className={`text-lg sm:text-xl font-normal leading-relaxed max-w-2xl ${
              isDarkMode ? 'text-zinc-300' : 'text-stone-700'
            }`}>
              {profile.headline}
            </p>

            {/* Compact Bio Paragraph */}
            <p className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
              isDarkMode ? 'text-zinc-400' : 'text-stone-600'
            }`}>
              {profile.bio}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#proyek"
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all shadow-sm ${
                  isDarkMode
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500 active:scale-[0.98]'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98]'
                }`}
              >
                <span>Lihat Karya & Proyek</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border transition-all ${
                  isDarkMode
                    ? 'border-zinc-800 bg-zinc-900/80 text-zinc-200 hover:bg-zinc-800 hover:text-white'
                    : 'border-stone-300 bg-white text-stone-800 hover:bg-stone-100'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Email Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>Salin Email</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenResume}
                type="button"
                className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isDarkMode
                    ? 'text-zinc-400 hover:text-zinc-100'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>Ringkasan CV</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Zero-Pill Quantitative Proof Metrics (Claim-to-Proof Adjacency) */}
            <div className="pt-6 border-t border-zinc-800/80 max-w-xl">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-zinc-400">
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-base sm:text-lg font-bold tabular-nums ${isDarkMode ? 'text-zinc-100' : 'text-stone-900'}`}>
                    {profile.yearsOfExperience}
                  </span>
                  <span>Tahun Pengalaman</span>
                </div>
                <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">·</span>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-base sm:text-lg font-bold tabular-nums ${isDarkMode ? 'text-zinc-100' : 'text-stone-900'}`}>
                    {profile.projectsCompleted}
                  </span>
                  <span>Proyek Diselesaikan</span>
                </div>
                <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">·</span>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-base sm:text-lg font-bold tabular-nums ${isDarkMode ? 'text-zinc-100' : 'text-stone-900'}`}>
                    {profile.clientSatisfaction}
                  </span>
                  <span>Kepuasan Hasil</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Stylized Developer Portrait & Interactive Canvas Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer structural frame */}
              <div
                className={`relative rounded-2xl border p-5 sm:p-6 transition-all shadow-xl overflow-hidden ${
                  isDarkMode
                    ? 'bg-zinc-900/70 border-zinc-800/90 text-zinc-100'
                    : 'bg-white border-stone-200 text-stone-900'
                }`}
              >
                {/* Decorative header frame */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800/60 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400">
                    <Terminal className="w-3 h-3 text-indigo-400" />
                    <span>arya@workspace:~</span>
                  </div>
                </div>

                {/* Portrait Representation / Visual Centerpiece */}
                <div className="my-6 relative flex flex-col items-center">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-indigo-500/30 p-1 bg-gradient-to-b from-indigo-500/20 via-zinc-800/60 to-zinc-900 flex items-center justify-center shadow-inner group">
                    {/* Artistic Developer Avatar Geometric Composition */}
                    <div className="w-full h-full rounded-xl bg-gradient-to-tr from-zinc-900 via-indigo-950 to-zinc-900 flex flex-col items-center justify-center p-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
                      
                      {/* Geometric Avatar Icon Silhouette */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-200 font-bold text-2xl tracking-wider shadow-lg mb-2 relative z-10">
                        {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>

                      <div className="relative z-10 text-center">
                        <span className="text-xs font-semibold text-zinc-200 block truncate max-w-[120px]">
                          {profile.name}
                        </span>
                        <span className="text-[10px] text-indigo-300 font-mono block">
                          Full-Stack Dev
                        </span>
                      </div>

                      {/* Subtle floating code symbol watermark inside avatar */}
                      <Code2 className="absolute -bottom-4 -right-4 w-20 h-20 text-white/5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Role descriptor directly beneath avatar */}
                  <div className="mt-4 text-center space-y-1">
                    <h3 className={`text-base font-semibold ${isDarkMode ? 'text-zinc-100' : 'text-stone-900'}`}>
                      {profile.name}
                    </h3>
                    <div className="text-xs text-zinc-400 flex items-center justify-center gap-1.5">
                      <span>Frontend & Backend</span>
                      <span aria-hidden="true">·</span>
                      <span>Clean Architecture</span>
                    </div>
                  </div>
                </div>

                {/* Minimal terminal snippet preview */}
                <div className={`p-3 rounded-lg font-mono text-[11px] leading-relaxed border ${
                  isDarkMode
                    ? 'bg-zinc-950/80 border-zinc-800 text-zinc-300'
                    : 'bg-stone-100 border-stone-200 text-stone-700'
                }`}>
                  <div className="text-indigo-400 font-semibold mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>current_focus:</span>
                  </div>
                  <p className="text-zinc-400">
                    &quot;Membangun antarmuka modern yang responsif, terukur, dan berorientasi pada kepuasan pengguna nyata.&quot;
                  </p>
                </div>

                {/* Quick contact trigger row */}
                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Email Langsung:</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-mono text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors truncate max-w-[180px]"
                  >
                    {profile.email}
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
