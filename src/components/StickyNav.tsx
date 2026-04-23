import React from 'react';
import { Info, BarChart3, Users, Target, CheckCircle } from 'lucide-react';

interface StickyNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const StickyNav: React.FC<StickyNavProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: Info, activeColor: 'bg-brand-dark-blue' },
    { id: 'program', label: 'Program', icon: BarChart3, activeColor: 'bg-brand-red' },
    { id: 'participation', label: 'Participation', icon: Users, activeColor: 'bg-brand-yellow' },
    { id: 'impact', label: 'Impact', icon: Target, activeColor: 'bg-gray-500' },
    { id: 'conclusion', label: 'Conclusion', icon: CheckCircle, activeColor: 'bg-brand-dark-blue' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-xl rounded-full p-1.5 flex items-center gap-1 pointer-events-auto">
        <div className="flex items-center px-4 mr-2 border-r border-gray-100">
           <img 
            src="https://res.cloudinary.com/dpzywidxy/image/upload/v1772056454/logo-frutero_uu089k.png" 
            alt="Frutero" 
            className="h-5 md:h-6 opacity-80"
          />
        </div>
        
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-300
                ${isActive 
                  ? `${item.activeColor} text-white font-bold shadow-lg scale-105` 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50 font-medium'
                }
                text-[10px] md:text-sm
              `}
            >
              <Icon size={isActive ? 18 : 16} strokeWidth={isActive ? 3 : 2} className="transition-transform" />
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default StickyNav;
