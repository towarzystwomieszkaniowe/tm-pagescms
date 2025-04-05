import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full relative">
      {/* Header background image */}
      <div className="w-full h-[300px] md:h-[400px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10"></div>
        <Image 
          src="/images/skup.webp" 
          alt="Skup kamienic - FlatScout" 
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Centered text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <div className="text-center px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            {title || "Skup kamienic - szybka wycena i uczciwa cena"}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;