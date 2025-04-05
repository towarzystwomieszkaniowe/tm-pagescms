'use client';

const RegionsSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="regiony">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text-black)] mb-8">
          Działamy w każdym województwie
        </h2>
        <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-10"></div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-6">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Wielkopolskie</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Pomorskie</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Małopolskie</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Łódzkie</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Dolnośląskie</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Świętokrzyskie</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Warmińsko-mazurskie</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Zachodniopomorskie</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Mazowieckie</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Lubuskie</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Lubelskie</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Śląskie</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Podlaskie</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Opolskie</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[var(--button-primary)] rounded-full mr-2"></span>
            <span className="text-[var(--text-gray)]">Skup nieruchomości Podkarpackie</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;