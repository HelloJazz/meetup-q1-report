import React, { useEffect, useState } from 'react';
import { LayoutDashboard, Users, Target, CheckCircle, Info } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'program', label: 'Program', icon: LayoutDashboard },
    { id: 'participation', label: 'Participation', icon: Users },
    { id: 'impact', label: 'Impact', icon: Target },
    { id: 'conclusion', label: 'Conclusion', icon: CheckCircle },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-center md:justify-between items-center">
        {/* Branding Logo (Small version for navbar) */}
        <div 
          className={`hidden md:block transition-all duration-500 cursor-pointer ${
            scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="https://res.cloudinary.com/dpzywidxy/image/upload/v1772053919/logo-frutero_y67oqr.png" 
            className="h-10 object-contain"
            alt="Frutero"
          />
        </div>

        {/* Navigation Items */}
        <div className="flex bg-gray-100/50 p-1 rounded-2xl border border-gray-200/50">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 px-3 md:px-6 py-2 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-brand-dark-blue text-white shadow-lg' 
                    : 'text-gray-500 hover:text-brand-dark-blue'
                }`}
              >
                <Icon size={16} className={isActive ? 'animate-bounce-gentle' : ''} />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
