'use client';

const Text_7 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Proces skupu nieruchomości z lokatorami
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              W Towarzystwie Mieszkaniowym dokładamy wszelkich starań, aby proces skupu nieruchomości z lokatorami 
              przebiegał sprawnie i bezpiecznie dla wszystkich stron. Poniżej przedstawiamy, jak wygląda cały proces.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-black)]">Etapy skupu nieruchomości:</h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Wstępna konsultacja</strong> - kontaktujesz się z nami telefonicznie lub przez formularz. 
                  Przedstawiasz swoją sytuację i uzyskujesz wstępne informacje.
                </li>
                <li>
                  <strong>Analiza dokumentacji</strong> - przekazujesz nam podstawowe dokumenty dotyczące nieruchomości 
                  i sytuacji prawnej lokatorów.
                </li>
                <li>
                  <strong>Wycena nieruchomości</strong> - nasi eksperci dokonują profesjonalnej wyceny, uwzględniając 
                  wszystkie aspekty, w tym obecność lokatorów.
                </li>
                <li>
                  <strong>Przedstawienie oferty</strong> - otrzymujesz od nas konkretną ofertę cenową, uwzględniającą 
                  aktualną sytuację nieruchomości.
                </li>
                <li>
                  <strong>Finalizacja transakcji</strong> - jeśli akceptujesz ofertę, przygotowujemy wszystkie dokumenty 
                  i umawiamy spotkanie u notariusza.
                </li>
              </ol>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-black)]">Gwarantujemy:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Pełną obsługę prawną transakcji</li>
                <li>Szybką wypłatę gotówki</li>
                <li>Przejęcie odpowiedzialności za lokatorów</li>
                <li>Brak dodatkowych kosztów</li>
                <li>Dyskrecję i profesjonalizm</li>
              </ul>
            </div>
            
            <p className="leading-relaxed mt-6">
              Skup nieruchomości z lokatorami wymaga doświadczenia i profesjonalnego podejścia. 
              Zaufaj ekspertom z wieloletnim doświadczeniem. Skontaktuj się z nami:
              <a href="tel:+48530190880" className="text-[var(--button-primary)] hover:text-[var(--button-hover)] font-semibold transition-colors ml-2">
                +48 530 190 880
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_7;