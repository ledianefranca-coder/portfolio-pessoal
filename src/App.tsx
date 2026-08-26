import React, { useState, useEffect } from 'react';
import { ThemeMode, NavigationSection } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { CurriculumModal } from './components/CurriculumModal';
import { FloatingDock } from './components/FloatingDock';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [activeSection, setActiveSection] = useState<NavigationSection>('home');
  const [isCVOpen, setIsCVOpen] = useState<boolean>(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#100b19] text-[#f4ebf8] antialiased selection:bg-[#c084fc] selection:text-[#100b19] transition-colors duration-300';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-[#fcf8ff] text-[#281838] antialiased selection:bg-[#9333ea] selection:text-[#ffffff] transition-colors duration-300';
    }
  }, [theme]);

  useEffect(() => {
    const sections: NavigationSection[] = ['home', 'about', 'projects', 'contact'];

    const handleScrollObserver = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  const handleNavigate = (section: NavigationSection) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 selection:bg-purple-500 selection:text-white">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCV={() => setIsCVOpen(true)}
      />

      <main className="flex-1">
        <Hero theme={theme} onNavigate={handleNavigate} onOpenCV={() => setIsCVOpen(true)} />
        <AboutSection theme={theme} />
        <ProjectsSection theme={theme} />
        <SkillsSection theme={theme} />
        <ContactSection theme={theme} />
      </main>

      <FloatingDock
        activeSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        onOpenCV={() => setIsCVOpen(true)}
      />

      <Footer theme={theme} onNavigate={handleNavigate} />

      <CurriculumModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
        theme={theme}
      />
    </div>
  );
}
