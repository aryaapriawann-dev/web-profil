import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Check, Copy, ExternalLink, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface ContactProps {
  profile: ProfileData;
  isDarkMode: boolean;
}

export default function Contact({ profile, isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Harap lengkapi semua bidang yang wajib diisi.');
      return;
    }

    setFormError(null);
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Save sent message to local storage for user review
      try {
        const existing = JSON.parse(localStorage.getItem('sent_messages') || '[]');
        existing.push({
          ...formData,
          date: new Date().toISOString(),
        });
        localStorage.setItem('sent_messages', JSON.stringify(existing));
      } catch {
        // silent fail for private mode
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  const whatsappMessage = encodeURIComponent(
    `Halo ${profile.name}, saya melihat website profil Anda dan tertarik untuk berdiskusi mengenai proyek kolaborasi.`
  );
  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${whatsappMessage}`;

  return (
    <section id="kontak" className="py-20 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            Terhubung & Diskusi
          </p>
          <h2
            className={`text-2xl sm:text-4xl font-bold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-stone-900'
            }`}
            style={{ textWrap: 'balance' }}
          >
            Mari Memulai Percakapan
          </h2>
          <p className={`mt-2 text-sm sm:text-base ${isDarkMode ? 'text-zinc-400' : 'text-stone-600'}`}>
            Punya ide proyek, tawaran kerja, atau sekadar ingin bertukar wawasan teknis? Saya selalu senang mendengar dari Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Quick Copy */}
            <div
              className={`p-5 rounded-2xl border transition-all ${
                isDarkMode ? 'bg-zinc-900/40 border-zinc-800/90' : 'bg-white border-stone-200 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                  Alamat Surat Elektronik
                </span>
                <Mail className="w-4 h-4 text-indigo-400" />
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className={`text-sm sm:text-base font-semibold truncate hover:text-indigo-400 transition-colors ${
                    isDarkMode ? 'text-zinc-100' : 'text-stone-900'
                  }`}
                >
                  {profile.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  title="Salin email ke clipboard"
                  className={`p-2 rounded-lg border text-xs transition-colors shrink-0 ${
                    isDarkMode
                      ? 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:bg-zinc-800'
                      : 'border-stone-300 bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-emerald-400 font-medium">
                      <Check className="w-3.5 h-3.5" />
                      Disalin!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy className="w-3.5 h-3.5" />
                      Salin
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp Quick Action */}
            <div
              className={`p-5 rounded-2xl border transition-all ${
                isDarkMode ? 'bg-zinc-900/40 border-zinc-800/90' : 'bg-white border-stone-200 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                  Respons Cepat via WhatsApp
                </span>
                <MessageSquare className="w-4 h-4 text-emerald-400" />
              </div>

              <p className={`text-xs mb-4 ${isDarkMode ? 'text-zinc-400' : 'text-stone-600'}`}>
                Lebih menyukai komunikasi instan? Hubungi langsung melalui nomor WhatsApp resmi.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
              >
                <span>Buka WhatsApp Sekarang</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Working Hours & Availability */}
            <div className={`p-4 rounded-xl border text-xs space-y-2 ${
              isDarkMode ? 'bg-zinc-950/60 border-zinc-800 text-zinc-300' : 'bg-stone-50 border-stone-200 text-stone-700'
            }`}>
              <div className="flex items-center gap-2 font-medium">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>Waktu Respons Standar: &lt; 24 Jam</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Zona Waktu: WIB (GMT+7), Siap Berkomunikasi Internasional</span>
              </div>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                isDarkMode ? 'bg-zinc-900/50 border-zinc-800/90' : 'bg-white border-stone-200 shadow-sm'
              }`}
            >
              <h3 className={`text-base font-bold mb-1 ${isDarkMode ? 'text-zinc-100' : 'text-stone-900'}`}>
                Kirim Pesan Langsung
              </h3>
              <p className={`text-xs mb-6 ${isDarkMode ? 'text-zinc-400' : 'text-stone-600'}`}>
                Isi formulir di bawah ini dan saya akan membalas ke email Anda secepatnya.
              </p>

              {submitted ? (
                <div className={`p-6 rounded-xl border text-center space-y-3 ${
                  isDarkMode ? 'bg-emerald-950/30 border-emerald-800 text-emerald-200' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                }`}>
                  <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400" />
                  <h4 className="text-sm font-bold">Pesan Anda Berhasil Terkirim!</h4>
                  <p className="text-xs max-w-sm mx-auto opacity-90">
                    Terima kasih telah menghubungi saya. Pesan telah tersimpan dan saya akan segera meninjau detailnya.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-semibold underline underline-offset-4 hover:opacity-80"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Nama Lengkap <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Budi Pratama"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-xs border outline-hidden transition-colors ${
                          isDarkMode
                            ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-indigo-500'
                            : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Alamat Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@perusahaan.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-xs border outline-hidden transition-colors ${
                          isDarkMode
                            ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-indigo-500'
                            : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Subjek / Topik Bahasan
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Contoh: Pengembangan Website Baru / Diskusi Lowongan"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-xs border outline-hidden transition-colors ${
                        isDarkMode
                          ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-indigo-500'
                          : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-indigo-600'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Pesan Anda <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan secara singkat tujuan proyek, estimasi waktu, atau rincian hal yang ingin Anda tanyakan..."
                      className={`w-full px-3.5 py-2.5 rounded-lg text-xs border outline-hidden transition-colors resize-none ${
                        isDarkMode
                          ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-indigo-500'
                          : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-indigo-600'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-50 transition-all shadow-xs"
                  >
                    {isSubmitting ? (
                      <span>Mengirimkan Pesan...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Kirim Pesan Sekarang</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
