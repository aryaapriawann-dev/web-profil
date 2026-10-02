import { useState, useEffect } from 'react';
import { ProfileData, defaultProfileData } from './data/profileData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfileEditModal from './components/ProfileEditModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('arya_profile_data');
      if (saved) {
        return { ...defaultProfileData, ...JSON.parse(saved) };
      }
    } catch {
      // Fallback
    }
    return defaultProfileData;
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('theme_preference');
      if (savedTheme !== null) {
        return savedTheme === 'dark';
      }
    } catch {
      // Fallback
    }
    return true; // Default to sleek modern dark theme
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('theme_preference', isDarkMode ? 'dark' : 'light');
    } catch {
      // ignore
    }
  }, [isDarkMode]);

  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    try {
      localStorage.setItem('arya_profile_data', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDarkMode
          ? 'bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200'
          : 'bg-[#faf9f6] text-stone-900 selection:bg-indigo-600/20 selection:text-indigo-900'
      }`}
    >
      {/* Strict 3-Zone Top Bar */}
      <Navbar
        profile={profile}
        onOpenEdit={() => setIsEditModalOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Page Content Flow */}
      <main>
        {/* Hero Section */}
        <Hero
          profile={profile}
          isDarkMode={isDarkMode}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* About Section */}
        <About
          profile={profile}
          isDarkMode={isDarkMode}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* Skills Section */}
        <Skills
          skills={profile.skills}
          isDarkMode={isDarkMode}
        />

        {/* Projects Bento Showcase */}
        <Projects
          projects={profile.projects}
          isDarkMode={isDarkMode}
        />

        {/* Experience & Education Section */}
        <Experience
          experiences={profile.experiences}
          education={profile.education}
          isDarkMode={isDarkMode}
        />

        {/* Testimonials / Social Proof */}
        <Testimonials
          testimonials={profile.testimonials}
          isDarkMode={isDarkMode}
        />

        {/* Contact & Message Form */}
        <Contact
          profile={profile}
          isDarkMode={isDarkMode}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        isDarkMode={isDarkMode}
      />

      {/* Profile Live Editor Modal */}
      <ProfileEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
        isDarkMode={isDarkMode}
      />

      {/* Printable Resume / CV View Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        profile={profile}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
