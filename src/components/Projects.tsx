import { useState } from 'react';
import { ArrowUpRight, LayoutDashboard, Layout, Cpu, Kanban, Globe, Terminal, Code2 } from 'lucide-react';
import { Project } from '../data/profileData';
import ProjectModal from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
  isDarkMode: boolean;
}

export default function Projects({ projects, isDarkMode }: ProjectsProps) {
  const [filter, setFilter] = useState<string>('Semua');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Semua', 'Web App', 'Frontend', 'Backend & API', 'Tool & Otomasi'];

  const filteredProjects =
    filter === 'Semua'
      ? projects
      : projects.filter((p) => p.category === filter);

  const getProjectIcon = (type: Project['iconType']) => {
    switch (type) {
      case 'dashboard':
        return LayoutDashboard;
      case 'kanban':
        return Kanban;
      case 'api':
        return Cpu;
      case 'layout':
        return Layout;
      case 'globe':
        return Globe;
      default:
        return Terminal;
    }
  };

  return (
    <section id="proyek" className="py-20 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
              Karya Pilihan
            </p>
            <h2
              className={`text-2xl sm:text-4xl font-bold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-stone-900'
              }`}
              style={{ textWrap: 'balance' }}
            >
              Portofolio Proyek Unggulan
            </h2>
            <p className={`mt-2 text-sm sm:text-base ${isDarkMode ? 'text-zinc-400' : 'text-stone-600'}`}>
              Eksplorasi aplikasi web, arsitektur backend, dan solusi digital yang telah saya rancang dan rilis.
            </p>
          </div>

          {/* Interactive Filter Tabs (Valid buttons per Rule 64-68) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl border overflow-x-auto max-w-full scrollbar-none shrink-0 bg-opacity-60 backdrop-blur-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                type="button"
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  filter === cat
                    ? isDarkMode
                      ? 'bg-zinc-800 text-white shadow-xs'
                      : 'bg-white text-stone-900 shadow-xs border border-stone-200'
                    : isDarkMode
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (Bento/Card Showcase) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = getProjectIcon(project.iconType);

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer rounded-2xl border p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 ${
                  isDarkMode
                    ? 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/80 shadow-md'
                    : 'bg-white border-stone-200 hover:border-stone-300 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Top Card Bar: Clean unboxed metadata with dot separator */}
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-4 pb-3 border-b border-zinc-800/60">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-indigo-400">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{project.year}</span>
                    </div>

                    <div className={`p-1.5 rounded-lg ${
                      isDarkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-stone-100 text-stone-700'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Visual Interface Preview Representation */}
                  <div className="mb-5 h-28 rounded-xl border border-zinc-800/80 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-3.5 relative overflow-hidden flex flex-col justify-between group-hover:border-indigo-500/40 transition-colors">
                    {/* Simulated Mini UI header */}
                    <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-zinc-700" />
                        <div className="w-2 h-2 rounded-full bg-zinc-700" />
                        <div className="w-2 h-2 rounded-full bg-zinc-700" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">
                        {project.id}
                      </span>
                    </div>

                    {/* Simulated UI Content Bars */}
                    <div className="space-y-1.5 py-1">
                      <div className="h-1.5 bg-indigo-500/30 rounded-full w-3/4" />
                      <div className="h-1.5 bg-zinc-800 rounded-full w-1/2" />
                      <div className="h-1.5 bg-zinc-800/60 rounded-full w-5/6" />
                    </div>

                    {/* Subtle role watermark */}
                    <div className="text-[10px] font-mono text-indigo-400/80 truncate">
                      role: {project.role}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className={`text-base sm:text-lg font-bold tracking-tight mb-2 group-hover:text-indigo-400 transition-colors ${
                    isDarkMode ? 'text-zinc-100' : 'text-stone-900'
                  }`}>
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 ${
                    isDarkMode ? 'text-zinc-400' : 'text-stone-600'
                  }`}>
                    {project.summary}
                  </p>
                </div>

                {/* Bottom Footer: Tech Stack (Unboxed text) & Action */}
                <div className="pt-4 border-t border-zinc-800/60 mt-2 space-y-3">
                  <div className="text-xs font-mono text-zinc-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={tech}>
                        #{tech}
                        {i < Math.min(project.techStack.length, 3) - 1 ? ' · ' : ''}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-zinc-400">+{project.techStack.length - 3}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-medium text-indigo-400 pt-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Lihat Studi Kasus Lengkap</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDarkMode={isDarkMode}
      />
    </section>
  );
}
