'use client';

const Text_1 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-base)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Dlaczego warto skorzystać z usługi skupu mieszkań?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Sprzedaż mieszkania na tradycyjnym rynku nieruchomości może być długotrwałym i skomplikowanym procesem. 
              Wymaga przygotowania nieruchomości do prezentacji, organizowania pokazów, negocjacji z potencjalnymi 
              nabywcami oraz załatwiania licznych formalności. Skup mieszkań to alternatywne rozwiązanie, które 
              eliminuje te problemy i oferuje szereg korzyści.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-black)]">Główne zalety skorzystania z usługi skupu mieszkań:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Szybka transakcja - sprzedaż mieszkania nawet w ciągu kilku dni</li>
                <li>Płatność gotówką - natychmiastowy dostęp do środków</li>
                <li>Brak konieczności przygotowania mieszkania do sprzedaży</li>
                <li>Kupujemy mieszkania w każdym stanie technicznym</li>
                <li>Brak prowizji i ukrytych kosztów</li>
                <li>Minimum formalności - zajmujemy się wszystkimi dokumentami</li>
                <li>Bezpieczeństwo transakcji - gwarancja zapłaty</li>
                <li>Możliwość sprzedaży mieszkania z obciążeniami (hipoteka, zadłużenie)</li>
              </ul>
            </div>

            <p className="leading-relaxed mb-6">
              Nasza firma specjalizuje się w skupie mieszkań o różnorodnym charakterze - od małych kawalerek po duże apartamenty, 
              w różnych lokalizacjach i o różnym standardzie. Kupujemy mieszkania zarówno w dobrym stanie technicznym, jak i te 
              wymagające remontu czy modernizacji. Nie stanowią dla nas przeszkody również problemy prawne, takie jak nieuregulowany 
              stan prawny, brak księgi wieczystej czy zadłużenie.
            </p>

            <p className="leading-relaxed">
              Jeśli zależy Ci na szybkiej sprzedaży mieszkania bez zbędnych formalności i stresu, skup mieszkań 
              jest idealnym rozwiązaniem. Skontaktuj się z nami, aby otrzymać bezpłatną wycenę i ofertę zakupu Twojego mieszkania.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_1;