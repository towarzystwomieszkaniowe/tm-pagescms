'use client';

const Text_8 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-base)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Dlaczego warto wybrać Towarzystwo Mieszkaniowe?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Towarzystwo Mieszkaniowe to lider na rynku skupu nieruchomości z lokatorami. 
              Nasza wieloletnia praktyka i profesjonalne podejście gwarantują bezpieczną i korzystną transakcję.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[var(--text-black)]">Dla właścicieli:</h3>
                <ul className="space-y-3">
                  <li>✓ Szybka wycena nieruchomości</li>
                  <li>✓ Natychmiastowa płatność</li>
                  <li>✓ Brak ukrytych kosztów</li>
                  <li>✓ Pomoc prawna</li>
                  <li>✓ Minimum formalności</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[var(--text-black)]">Nasze doświadczenie:</h3>
                <ul className="space-y-3">
                  <li>✓ Setki zadowolonych klientów</li>
                  <li>✓ Profesjonalny zespół prawników</li>
                  <li>✓ Znajomość rynku nieruchomości</li>
                  <li>✓ Skuteczne rozwiązywanie problemów</li>
                  <li>✓ Działamy w całej Polsce</li>
                </ul>
              </div>
            </div>

            <div className="bg-[var(--background-secondary)] p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-[var(--text-black)] mb-4">
                Skontaktuj się z nami już dziś!
              </h3>
              <p className="mb-6">
                Otrzymasz bezpłatną wycenę i profesjonalne doradztwo
              </p>
              <a 
                href="tel:+48530190880" 
                className="inline-block bg-[var(--button-primary)] text-white px-8 py-3 rounded-lg hover:bg-[var(--button-hover)] transition-colors font-semibold"
              >
                Zadzwoń: +48 530 190 880
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_8;