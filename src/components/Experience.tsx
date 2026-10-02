import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface ExperienceProps {
  experiences: ProfileData['experiences'];
  education: ProfileData['education'];
  isDarkMode: boolean;
}

export default function Experience({ experiences, education, isDarkMode }: ExperienceProps) {
  return (
    <section id="pengalaman" className="py-20 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            Jejak Rekam
          </p>
          <h2
            className={`text-2xl sm:text-4xl font-bold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-stone-900'
            }`}
            style={{ textWrap: 'balance' }}
          >
            Pengalaman & Pendidikan
          </h2>
          <p className={`mt-2 text-sm sm:text-base ${isDarkMode ? 'text-zinc-400' : 'text-stone-600'}`}>
            Perjalanan profesional, kontribusi nyata pada produk digital, dan latar belakang akademis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Work Experience Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-zinc-800/80">
              <Briefcase className="w-4 h-4 text-indigo-400" />
              <h3 className={`text-base font-semibold ${isDarkMode ? 'text-zinc-100' : 'text-stone-900'}`}>
                Pengalaman Kerja Profesional
              </h3>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-800">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-zinc-950 border-2 border-indigo-500 group-hover:scale-125 transition-transform" />

                  <div
                    className={`p-5 rounded-xl border transition-all ${
                      isDarkMode
                        ? 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                        : 'bg-white border-stone-200 hover:border-stone-300 shadow-xs'
                    }`}
                  >
                    {/* Header info */}
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h4 className={`text-sm sm:text-base font-bold ${
                        isDarkMode ? 'text-zinc-100' : 'text-stone-900'
                      }`}>
                        {exp.role}
                      </h4>
                      <span className="font-mono text-xs text-indigo-400 font-medium">
                        {exp.period}
                      </span>
                    </div>

                    {/* Company and location */}
                    <div className="flex items-center gap-3 text-xs text-zinc-400 mb-3">
                      <span className="font-semibold text-zinc-300">{exp.company}</span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                      isDarkMode ? 'text-zinc-400' : 'text-stone-600'
                    }`}>
                      {exp.description}
                    </p>

                    {/* Skills utilized */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-400">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={skill}>
                          #{skill}
                          {sIdx < exp.skills.length - 1 ? ' · ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-zinc-800/80">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <h3 className={`text-base font-semibold ${isDarkMode ? 'text-zinc-100' : 'text-stone-900'}`}>
                Pendidikan Formal & Prestasi
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-xl border transition-all ${
                    isDarkMode
                      ? 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                      : 'bg-white border-stone-200 hover:border-stone-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-1">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>

                  <h4 className={`text-sm sm:text-base font-bold mb-1 ${
                    isDarkMode ? 'text-zinc-100' : 'text-stone-900'
                  }`}>
                    {edu.degree}
                  </h4>

                  <p className="text-xs font-semibold text-zinc-300 mb-3">
                    {edu.institution}
                  </p>

                  <p className={`text-xs leading-relaxed mb-4 ${
                    isDarkMode ? 'text-zinc-400' : 'text-stone-600'
                  }`}>
                    {edu.description}
                  </p>

                  {edu.achievements && (
                    <div className="space-y-2 pt-3 border-t border-zinc-800/60">
                      <span className="text-[11px] font-semibold text-zinc-400 block uppercase tracking-wider">
                        Pencapaian Penting:
                      </span>
                      {edu.achievements.map((item, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className={isDarkMode ? 'text-zinc-300' : 'text-stone-700'}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Availability Box */}
            <div className={`p-4 rounded-xl border border-indigo-500/30 ${
              isDarkMode ? 'bg-indigo-950/20' : 'bg-indigo-50/70'
            }`}>
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${
                isDarkMode ? 'text-indigo-300' : 'text-indigo-900'
              }`}>
                Kesiapan Kolaborasi Segera
              </h4>
              <p className={`text-xs leading-relaxed ${
                isDarkMode ? 'text-zinc-400' : 'text-stone-700'
              }`}>
                Tersedia untuk peran Software Engineer full-time, konsultasi arsitektur sistem, maupun pembuatan website kustom untuk instansi dan bisnis Anda.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
