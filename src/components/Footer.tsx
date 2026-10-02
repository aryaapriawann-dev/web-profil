import { ArrowUp, Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface FooterProps {
  profile: ProfileData;
  isDarkMode: boolean;
}

export default function Footer({ profile, isDarkMode }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t py-12 transition-colors ${
        isDarkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-400' : 'bg-stone-100 border-stone-200 text-stone-600'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="space-y-1 text-center sm:text-left">
            <p className={`text-sm font-bold tracking-tight ${isDarkMode ? 'text-zinc-200' : 'text-stone-900'}`}>
              {profile.name}
            </p>
            <p className="text-xs text-zinc-400">
              © {currentYear} {profile.name}. Seluruh hak cipta dilindungi.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-indigo-400 transition-colors"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-indigo-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-lg hover:text-indigo-400 transition-colors"
              aria-label="Kirim Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            type="button"
            className={`inline-flex items-center gap-1.5 text-xs font-medium py-1.5 px-3 rounded-lg border transition-colors ${
              isDarkMode
                ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-900'
                : 'border-stone-300 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>
    </footer>
  );
}
