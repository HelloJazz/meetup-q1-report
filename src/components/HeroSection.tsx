import React from 'react';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen min-h-[600px] flex overflow-hidden font-montserrat">
      {/* TOP STRIPES */}
      <div className="absolute top-0 left-0 w-full h-16 flex z-30">
        <div className="w-1/3 bg-brand-red"></div>
        <div className="w-1/3 bg-brand-yellow"></div>
        <div className="w-1/3 bg-brand-red"></div>
      </div>

      {/* SIDEBAR */}
      <div className="w-[35%] bg-brand-red relative flex flex-col items-center justify-center z-10 px-6">
        <img 
          src="https://res.cloudinary.com/dpzywidxy/image/upload/v1772054366/pin_q3e6a9.png" 
          className="absolute top-24 left-10 w-16 animate-float" 
          alt="Piña" 
        />
        
        <div className="flex flex-col items-center gap-10 max-w-[200px]">
          <img src="https://res.cloudinary.com/dpzywidxy/image/upload/v1772054625/eth_white_p0q0zj.png" className="w-20" alt="ETH" />
          <img src="https://res.cloudinary.com/dpzywidxy/image/upload/v1772054668/localism_white_uq3v6y.png" className="w-full" alt="Localism" />
          <img src="https://res.cloudinary.com/dpzywidxy/image/upload/v1772056454/logo-frutero_uu089k.png" className="w-full brightness-0 invert" alt="Frutero" />
          <img src="https://res.cloudinary.com/dpzywidxy/image/upload/v1772054705/eth-qr_white_k9o1x8.png" className="w-24" alt="ETH QR" />
        </div>

        <img 
          src="https://res.cloudinary.com/dpzywidxy/image/upload/v1772054354/gra_m6u1o8.png" 
          className="absolute right-[-25px] top-1/2 w-12 animate-float-slow" 
          alt="Uva" 
        />
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 bg-brand-light-blue relative flex flex-col justify-center px-12 md:px-20">
        <img 
          src="https://res.cloudinary.com/dpzywidxy/image/upload/v1772054378/ora_yxyq7u.png" 
          className="absolute top-28 right-12 w-16 animate-float" 
          alt="Naranja" 
        />

        <div className="max-w-4xl space-y-4">
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Meetups Frutales Q1 2026<br />
            ¡Bienvenidos a Ethereum!
          </h1>
          <h2 className="text-brand-dark-blue text-2xl md:text-3xl font-black uppercase tracking-widest">
            ONBOARDING & FUNDAMENTOS
          </h2>
          <div className="text-white font-bold text-lg md:text-xl pt-4">
            📍 PUEBLA | MARCH 13, 2026
          </div>
        </div>

        {/* BUTTONS */}
        <div className="absolute bottom-16 left-12 md:left-20 flex gap-4">
          <button onClick={() => onNavigate('program')} className="bg-brand-dark-blue text-white px-8 py-3 rounded-lg font-black text-xs uppercase shadow-lg">METRICS</button>
          <button onClick={() => onNavigate('participation')} className="bg-brand-red text-white px-8 py-3 rounded-lg font-black text-xs uppercase shadow-lg">EXPERIENCE</button>
          <button onClick={() => onNavigate('impact')} className="bg-brand-yellow text-white px-8 py-3 rounded-lg font-black text-xs uppercase shadow-lg">IMPACT</button>
          <button onClick={() => onNavigate('conclusion')} className="bg-brand-dark-blue text-white px-8 py-3 rounded-lg font-black text-xs uppercase shadow-lg">GALLERY</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
