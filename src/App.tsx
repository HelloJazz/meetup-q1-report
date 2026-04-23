import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import StickyNav from './components/StickyNav';
import ProgramSection from './components/ProgramSection';
import ParticipationSection from './components/ParticipationSection';
import ImpactSection from './components/ImpactSection';
import ConclusionSection from './components/ConclusionSection';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <StickyNav activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <HeroSection onNavigate={scrollToSection} />

        {/* 1. Executive Overview */}
        <section id="overview" className="section-container bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark-blue tracking-tight text-center mb-12">
              Executive Overview
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed text-justify md:text-center">
              <p>
                During Q1 2026, the Meetups Frutales program successfully executed three Ethereum onboarding events across Mexico: Mexico City, Puebla (Thinkhub), and Universidad de Oriente, Puebla.
              </p>
              <p>
                Beyond delivery, the quarter served as a real-world validation of an educational and community-building model designed to scale Web3 adoption through accessible, structured, and context-adaptive learning experiences.
              </p>
              <p>
                The program demonstrated that Ethereum education can effectively translate across different environments—urban communities, coworking spaces, and academic institutions—while maintaining consistency in content and generating distinct forms of engagement and impact in each setting.
              </p>
              <p>
                More importantly, Q1 established clear signals that the model is not only operationally viable, but also capable of unlocking new distribution channels, particularly within academic ecosystems.
              </p>
            </div>
          </div>
        </section>

        <ProgramSection />
        <ParticipationSection />
        <ImpactSection />
        <ConclusionSection />
      </main>

      <footer className="bg-brand-dark-blue text-white py-24 text-center px-4 font-montserrat">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white">
              Q1 2026 CONSOLIDATED REPORT
            </h3>
            <p className="text-white/80 font-medium">Submission Date: 23/04/2026</p>
          </div>

          <div className="space-y-1 text-sm md:text-base text-white/90 font-medium">
            <p>Prepared by: Frutero Team - Regional Coordinators</p>
            <p>Program: Meetups Frutales - ETHCDM</p>
            <p>Grant: Localism Fund Round 02</p>
          </div>

          <div className="pt-8 space-y-4">
            <h4 className="font-bold text-sm text-white">Contact</h4>
            <div className="space-y-1">
              <p className="font-bold text-sm md:text-base">Jazmín Orozco - Community Lead</p>
              <a href="mailto:jazz@frutero.club" className="text-brand-yellow font-bold hover:underline block">
                jazz@frutero.club
              </a>
            </div>
          </div>

          <div className="pt-12 flex justify-center items-center gap-10 opacity-90">
            <img src="https://res.cloudinary.com/dpzywidxy/image/upload/v1772054625/eth_white_p0q0zj.png" alt="ETH" className="h-12" />
            <img src="https://res.cloudinary.com/dpzywidxy/image/upload/v1772054668/localism_white_uq3v6y.png" alt="Localism" className="h-8" />
            <img src="https://res.cloudinary.com/dpzywidxy/image/upload/v1772056454/logo-frutero_uu089k.png" alt="Frutero" className="h-8 brightness-0 invert" />
            <img src="https://res.cloudinary.com/dpzywidxy/image/upload/v1772054705/eth-qr_white_k9o1x8.png" alt="ETH QR" className="h-12" />
          </div>

          <div className="pt-16 space-y-2 opacity-50">
            <p className="text-xs">© 2026 Frutero Club. All rights reserved.</p>
            <p className="text-xs font-bold uppercase tracking-widest">Let's Fruta Build!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
