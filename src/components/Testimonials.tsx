import { Quote } from 'lucide-react';
import { TestimonialItem } from '../data/profileData';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
  isDarkMode: boolean;
}

export default function Testimonials({ testimonials, isDarkMode }: TestimonialsProps) {
  return (
    <section className="py-20 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            Bukti Kinerja
          </p>
          <h2
            className={`text-2xl sm:text-4xl font-bold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-stone-900'
            }`}
            style={{ textWrap: 'balance' }}
          >
            Apa Kata Rekan & Klien
          </h2>
          <p className={`mt-2 text-sm sm:text-base ${isDarkMode ? 'text-zinc-400' : 'text-stone-600'}`}>
            Pengalaman nyata kolaborasi bersama stakeholder teknis dan pemilik produk.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                isDarkMode
                  ? 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                  : 'bg-white border-stone-200 hover:border-stone-300 shadow-xs'
              }`}
            >
              <div>
                <Quote className="w-6 h-6 text-indigo-400/40 mb-4" />
                <p className={`text-xs sm:text-sm leading-relaxed italic ${
                  isDarkMode ? 'text-zinc-300' : 'text-stone-700'
                }`}>
                  &quot;{item.quote}&quot;
                </p>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-zinc-800/60">
                <div className="w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-bold text-xs text-indigo-300">
                  {item.avatarInitials}
                </div>
                <div>
                  <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-zinc-100' : 'text-stone-900'}`}>
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {item.role} · <span className="text-zinc-300">{item.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
