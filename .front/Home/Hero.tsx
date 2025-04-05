'use client';

import Image from 'next/image';
import Form, { FormData } from '../Shared/Form';

const Hero = () => {
  const handleFormSubmit = (formData: FormData) => {
    // Tutaj można dodać logikę wysyłania formularza
    console.log('Formularz wysłany:', formData);
  };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Tło - zdjęcie */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero.webp" 
          alt="Tło strony głównej" 
          fill 
          priority 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      

      
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Lewa strona - tekst */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 text-white text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Skup nieruchomości w całej Polsce za gotówkę
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8">
            Skontaktuj się z nami już dziś!
          </h2>
          <div className="hidden md:block">
            <p className="text-lg mb-4">Oferujemy:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Szybką wycenę nieruchomości</li>
              <li>Płatność gotówką w ciągu 24h</li>
              <li>Brak ukrytych kosztów</li>
              <li>Pomoc w formalnościach</li>
            </ul>
          </div>
        </div>
        
        {/* Prawa strona - formularz */}
        <div className="w-full md:w-5/12">
          <Form onSubmit={handleFormSubmit} />
        </div>
      </div>
    </section>
  );
};

export default Hero;