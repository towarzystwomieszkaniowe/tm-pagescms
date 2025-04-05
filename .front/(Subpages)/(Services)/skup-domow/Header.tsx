import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="w-full relative">
      <div className="w-full h-[300px] md:h-[400px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10"></div>
        <Image 
          src="/images/skup.webp" 
          alt="Skup domów - FlatScout" 
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <div className="text-center px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            {title || "Skup domów"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;