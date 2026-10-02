import { useState, useEffect } from 'react';
import { X, Save, RotateCcw, Check, User, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
import { ProfileData, defaultProfileData } from '../data/profileData';

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (updated: ProfileData) => void;
  isDarkMode: boolean;
}

export default function ProfileEditModal({
  isOpen,
  onClose,
  profile,
  onSave,
  isDarkMode,
}: ProfileEditModalProps) {
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setFormData(profile);
  }, [profile, isOpen]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    if (window.confirm('Apakah Anda yakin ingin mengembalikan semua data ke pengaturan default?')) {
      setFormData(defaultProfileData);
      onSave(defaultProfileData);
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl transition-all ${
          isDarkMode ? 'bg-zinc-900 border-zinc-700/80 text-zinc-100' : 'bg-white border-stone-200 text-stone-900'
        }`}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-inherit/90 backdrop-blur-xs">
          <div>
            <h2 className="text-base font-bold">Kustomisasi Profil Anda</h2>
            <p className="text-xs text-zinc-400">
              Perubahan disimpan otomatis di peramban Anda (LocalStorage).
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
          {savedSuccess && (
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Profil berhasil diperbarui dan disimpan!</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Nama Lengkap
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3 py-2 text-xs rounded-lg border outline-hidden ${
                    isDarkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-stone-50 border-stone-300 text-stone-900'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Spesialisasi / Gelar Profesi
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={`w-full px-3 py-2 text-xs rounded-lg border outline-hidden ${
                  isDarkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-stone-50 border-stone-300 text-stone-900'
                }`}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">
              Kalimat Utama (Headline)
            </label>
            <input
              type="text"
              required
              value={formData.headline}
              onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
              className={`w-full px-3 py-2 text-xs rounded-lg border outline-hidden ${
                isDarkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-stone-50 border-stone-300 text-stone-900'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">
              Deskripsi Singkat / Bio
            </label>
            <textarea
              rows={3}
              required
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className={`w-full px-3 py-2 text-xs rounded-lg border outline-hidden resize-none ${
                isDarkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-stone-50 border-stone-300 text-stone-900'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Alamat Email Kontak
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-3 py-2 text-xs rounded-lg border outline-hidden ${
                  isDarkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-stone-50 border-stone-300 text-stone-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Nomor WhatsApp (Angka saja tanpa +)
              </label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="6281234567890"
                className={`w-full px-3 py-2 text-xs rounded-lg border outline-hidden ${
                  isDarkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-stone-50 border-stone-300 text-stone-900'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Tahun Pengalaman
              </label>
              <input
                type="text"
                value={formData.yearsOfExperience}
                onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                className={`w-full px-3 py-2 text-xs rounded-lg border outline-hidden ${
                  isDarkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-stone-50 border-stone-300 text-stone-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Jumlah Proyek
              </label>
              <input
                type="text"
                value={formData.projectsCompleted}
                onChange={(e) => setFormData({ ...formData, projectsCompleted: e.target.value })}
                className={`w-full px-3 py-2 text-xs rounded-lg border outline-hidden ${
                  isDarkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-stone-50 border-stone-300 text-stone-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Kepuasan Klien
              </label>
              <input
                type="text"
                value={formData.clientSatisfaction}
                onChange={(e) => setFormData({ ...formData, clientSatisfaction: e.target.value })}
                className={`w-full px-3 py-2 text-xs rounded-lg border outline-hidden ${
                  isDarkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-stone-50 border-stone-300 text-stone-900'
                }`}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">
              Status Ketersediaan Saat Ini
            </label>
            <input
              type="text"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className={`w-full px-3 py-2 text-xs rounded-lg border outline-hidden ${
                isDarkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-stone-50 border-stone-300 text-stone-900'
              }`}
            />
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Data ke Standar</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium rounded-lg border border-zinc-800 text-zinc-300 hover:bg-zinc-800"
              >
                Batal
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 shadow-xs"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Simpan Perubahan</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
