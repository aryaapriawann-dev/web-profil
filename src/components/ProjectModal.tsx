import { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Calendar, User, Code, Layers } from 'lucide-react';
import { Project } from '../data/profileData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDarkMode: boolean;
}

export default function ProjectModal({ project, onClose, isDarkMode }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      {/* Backdrop click area */}
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl transition-all ${
          isDarkMode
            ? 'bg-zinc-900 border-zinc-700/80 text-zinc-100'
            : 'bg-white border-stone-200 text-stone-900'
        }`}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-inherit/90 backdrop-blur-xs">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${
              isDarkMode ? 'hover:bg-zinc-800 text-zinc-400 hover:text-white' : 'hover:bg-stone-100 text-stone-500 hover:text-stone-900'
            }`}
            aria-label="Tutup detail modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title & Role */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-indigo-400" />
                {project.role}
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 font-mono">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                Dirilis {project.year}
              </span>
            </div>
          </div>

          {/* Visual Showcase Block */}
          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950/70 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800/80 pb-2">
              <span className="text-indigo-400 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" />
                Spesifikasi & Solusi Arsitektur
              </span>
              <span className="text-[11px] text-zinc-400">{project.id}.v1</span>
            </div>
            <p className="font-sans text-sm text-zinc-300 leading-relaxed pt-1">
              {project.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-zinc-200' : 'text-stone-800'}`}>
              Fitur Unggulan & Hasil Implementasi:
            </h3>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className={isDarkMode ? 'text-zinc-300' : 'text-stone-700'}>
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack List (Zero-Pill: Clean unboxed text list) */}
          <div className="pt-4 border-t border-zinc-800/60">
            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-2.5 ${
              isDarkMode ? 'text-zinc-400' : 'text-stone-500'
            }`}>
              Teknologi Yang Digunakan
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-indigo-300">
              {project.techStack.map((tech, i) => (
                <span key={tech} className="inline-flex items-center gap-1.5">
                  <span className="text-zinc-500">#</span>
                  <span>{tech}</span>
                  {i < project.techStack.length - 1 && (
                    <span className="text-zinc-700 select-none">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800/80">
            <a
              href="#kontak"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
            >
              <span>Diskusikan Proyek Sejenis</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className={`px-4 py-2 text-xs font-medium rounded-lg border transition-colors ${
                isDarkMode
                  ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                  : 'border-stone-300 text-stone-700 hover:bg-stone-100'
              }`}
            >
              Tutup
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
