import { useState } from 'react';
import { Layers, Server, Wrench, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface SkillsProps {
  skills: ProfileData['skills'];
  isDarkMode: boolean;
}

export default function Skills({ skills, isDarkMode }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Semua Bidang' },
    ...skills.map((s) => ({ id: s.category, label: s.category })),
  ];

  const filteredCategories =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('frontend')) return Layers;
    if (category.toLowerCase().includes('backend')) return Server;
    if (category.toLowerCase().includes('tools')) return Wrench;
    return CheckCircle2;
  };

  return (
    <section id="keahlian" className="py-20 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
              Kemampuan Teknis
            </p>
            <h2
              className={`text-2xl sm:text-4xl font-bold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-stone-900'
              }`}
              style={{ textWrap: 'balance' }}
            >
              Keahlian & Ekosistem Teknologi
            </h2>
            <p className={`mt-2 text-sm sm:text-base ${isDarkMode ? 'text-zinc-400' : 'text-stone-600'}`}>
              Kombinasi bahasa pemrograman, framework, dan peralatan yang saya gunakan setiap hari dalam produksi.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Valid buttons per Rule 64-68) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl border overflow-x-auto max-w-full scrollbar-none shrink-0 bg-opacity-60 backdrop-blur-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? isDarkMode
                      ? 'bg-zinc-800 text-white shadow-xs'
                      : 'bg-white text-stone-900 shadow-xs border border-stone-200'
                    : isDarkMode
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {filteredCategories.map((catGroup) => {
            const Icon = getCategoryIcon(catGroup.category);

            return (
              <div
                key={catGroup.category}
                className={`p-6 rounded-2xl border transition-all ${
                  isDarkMode
                    ? 'bg-zinc-900/40 border-zinc-800/90'
                    : 'bg-white border-stone-200 shadow-xs'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-zinc-800/60">
                  <div className={`p-1.5 rounded-lg ${
                    isDarkMode ? 'bg-indigo-950/80 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className={`text-base font-semibold ${isDarkMode ? 'text-zinc-100' : 'text-stone-900'}`}>
                    {catGroup.category}
                  </h3>
                </div>

                {/* Skills List inside this Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {catGroup.items.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3.5 rounded-xl border transition-colors ${
                        isDarkMode
                          ? 'bg-zinc-950/60 border-zinc-800/70 hover:border-zinc-700'
                          : 'bg-stone-50 border-stone-200/80 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-sm font-semibold ${
                          isDarkMode ? 'text-zinc-100' : 'text-stone-900'
                        }`}>
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs tabular-nums text-indigo-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Smooth Skill Progress Bar */}
                      <div className="w-full h-1.5 rounded-full overflow-hidden bg-zinc-800 mb-2">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {/* Quiet Contextual Note */}
                      <p className="text-[11px] text-zinc-400 leading-normal">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
