import { useState, useEffect } from 'react';
import { Mail, Edit3, Menu, X, ArrowUpRight } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface NavbarProps {
  profile: ProfileData;
  onOpenEdit: () => void;
  onOpenResume: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({
  profile,
  onOpenEdit,
  onOpenResume,
  isDarkMode,
  onToggleTheme,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Keahlian', href: '#keahlian' },
    { name: 'Proyek', href: '#proyek' },
    { name: 'Pengalaman', href: '#pengalaman' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        isScrolled
          ? isDarkMode
            ? 'bg-zinc-950/85 backdrop-blur-md border-zinc-800/80 shadow-sm'
            : 'bg-stone-50/90 backdrop-blur-md border-stone-200/90 shadow-sm'
          : isDarkMode
          ? 'bg-zinc-950/40 backdrop-blur-xs border-zinc-900/60'
          : 'bg-stone-50/60 backdrop-blur-xs border-stone-200/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className={`text-lg font-bold tracking-tight transition-colors ${
            isDarkMode ? 'text-zinc-100 hover:text-white' : 'text-stone-900 hover:text-stone-700'
          }`}
        >
          {profile.name}
        </a>

        {/* Zone 2: Clean 4–6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors py-1 ${
                isDarkMode
                  ? 'text-zinc-400 hover:text-zinc-100'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action + interactive utilities */}
        <div className="flex items-center gap-2.5">
          {/* Quick theme toggle */}
          <button
            onClick={onToggleTheme}
            type="button"
            title={isDarkMode ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
            className={`p-2 text-xs rounded-md transition-colors ${
              isDarkMode
                ? 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
            }`}
            aria-label="Ubah tema"
          >
            {isDarkMode ? (
              <span className="text-xs font-mono font-medium">☀ Light</span>
            ) : (
              <span className="text-xs font-mono font-medium">☾ Dark</span>
            )}
          </button>

          {/* Quick Edit Profile trigger */}
          <button
            onClick={onOpenEdit}
            type="button"
            title="Kustomisasi info profil Anda"
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors border ${
              isDarkMode
                ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white'
                : 'border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-stone-900'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">Edit Profil</span>
          </button>

          {/* CV Modal trigger */}
          <button
            onClick={onOpenResume}
            type="button"
            className={`hidden lg:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors border ${
              isDarkMode
                ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white'
                : 'border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-stone-900'
            }`}
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </button>

          {/* Primary Action Button */}
          <a
            href="#kontak"
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap shadow-xs ${
              isDarkMode
                ? 'bg-zinc-100 text-zinc-950 hover:bg-white'
                : 'bg-stone-900 text-white hover:bg-stone-800'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              isDarkMode ? 'text-zinc-300 hover:bg-zinc-900' : 'text-stone-700 hover:bg-stone-200'
            }`}
            aria-label="Buka navigasi seluler"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-3 pb-5 space-y-2 ${
            isDarkMode
              ? 'bg-zinc-950 border-zinc-800 text-zinc-200'
              : 'bg-stone-50 border-stone-200 text-stone-800'
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isDarkMode ? 'hover:bg-zinc-900 hover:text-white' : 'hover:bg-stone-200/70'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEdit();
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-md border border-zinc-700/60"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Info Profil</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-md border border-zinc-700/60"
            >
              <span>Lihat CV Lengkap</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
