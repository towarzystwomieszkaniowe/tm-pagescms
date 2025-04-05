'use client';

const Text_5 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Proces sprzedaży nieruchomości do skupu w województwie świętokrzyskim
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <h3 className="text-xl font-semibold mb-4 text-[var(--text-black)]">
              Pierwszy krok – zgłoszenie nieruchomości
            </h3>
            <p className="leading-relaxed mb-6">
              Jeśli posiadasz nieruchomość i zastanawiasz się nad jej sprzedażą, pierwszym krokiem jest nawiązanie kontaktu z naszą firmą skupującą nieruchomości. Wypełniając formularz kontaktowy lub dzwoniąc, możesz szybko i łatwo zgłosić chęć sprzedaży. Specjalista od skupu nieruchomości omówi z Tobą wszelkie szczegóły i odpowie na pytania dotyczące procesu.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-[var(--text-black)]">
              Wycena i oferta zakupu – jak to wygląda?
            </h3>
            <p className="leading-relaxed mb-6">
              W Kielcach, Skarżysku-Kamiennej, ale też w innych miastach województwa świętokrzyskiego, wartość nieruchomości zależy od wielu czynników. Lokalizacja, dostępność komunikacyjna czy rozwój gospodarczy mają bezpośredni wpływ na ceny na rynku nieruchomości. Ekspertyza, przeprowadzona przez naszych specjalistów, zapewnia rzetelną i obiektywną ocenę wartości nieruchomości, co jest fundamentem do przedstawienia oferty zakupu.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-[var(--text-black)]">
              Finalizacja sprzedaży i płatność
            </h3>
            <p className="leading-relaxed">
              Po zaakceptowaniu oferty skupu, konieczne jest przygotowanie i zebranie wszystkich wymaganych dokumentów, co jest niezbędne do finalizacji sprzedaży nieruchomości. Wymagane dokumenty mogą obejmować umowę odsprzedaży, zaświadczenie o stanie prawnym nieruchomości, dowód osobisty sprzedającego, a także inne dokumenty potwierdzające własność. Procedura ta zazwyczaj kończy się w kancelarii notarialnej, gdzie odbywa się podpisanie aktu notarialnego.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_5;