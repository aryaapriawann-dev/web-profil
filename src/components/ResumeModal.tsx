import { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  isDarkMode: boolean;
}

export default function ResumeModal({
  isOpen,
  onClose,
  profile,
  isDarkMode,
}: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white text-zinc-900 border border-zinc-300 shadow-2xl print:border-none print:shadow-none print:max-h-none print:p-0">
        
        {/* Modal Controls (Hidden in Print) */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-3.5 border-b border-zinc-200 bg-zinc-50/95 backdrop-blur-xs print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-600">Curriculum Vitae</span>
            <span className="text-zinc-400">·</span>
            <span className="text-xs text-zinc-500 font-mono">Format Siap Cetak</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-8 sm:p-12 space-y-8 font-sans">
          
          {/* Header */}
          <div className="border-b border-zinc-300 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 font-display">
                  {profile.name}
                </h1>
                <p className="text-sm font-semibold text-indigo-700 mt-0.5">
                  {profile.title}
                </p>
              </div>

              <div className="text-xs text-zinc-600 space-y-1 sm:text-right font-mono">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3 h-3 text-zinc-400" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3 h-3 text-zinc-400" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-zinc-700">
              {profile.bio}
            </p>
          </div>

          {/* Technical Competencies */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1">
              Keahlian & Penguasaan Teknologi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {profile.skills.map((skillGroup) => (
                <div key={skillGroup.category} className="space-y-1">
                  <span className="font-semibold text-zinc-800">{skillGroup.category}:</span>
                  <p className="text-zinc-600">
                    {skillGroup.items.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1">
              Pengalaman Kerja
            </h2>
            <div className="space-y-4">
              {profile.experiences.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-baseline justify-between text-xs">
                    <span className="font-bold text-zinc-900">{exp.role}</span>
                    <span className="font-mono text-zinc-500">{exp.period}</span>
                  </div>
                  <div className="text-xs text-indigo-700 font-medium">
                    {exp.company} · {exp.location}
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1">
              Pendidikan
            </h2>
            <div className="space-y-3">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-baseline justify-between text-xs">
                    <span className="font-bold text-zinc-900">{edu.degree}</span>
                    <span className="font-mono text-zinc-500">{edu.period}</span>
                  </div>
                  <div className="text-xs text-zinc-700">{edu.institution}</div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects Summary */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1">
              Proyek Portofolio Terpilih
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {profile.projects.slice(0, 4).map((p) => (
                <div key={p.id} className="p-2.5 rounded-lg border border-zinc-200 bg-zinc-50/50">
                  <div className="font-semibold text-zinc-900">{p.title}</div>
                  <div className="text-[11px] text-zinc-500 font-mono mb-1">{p.techStack.join(', ')}</div>
                  <div className="text-zinc-600 line-clamp-2 text-[11px]">{p.summary}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
