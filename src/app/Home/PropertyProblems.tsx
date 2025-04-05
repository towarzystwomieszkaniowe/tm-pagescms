'use client';

const PropertyProblems = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4" itemProp="name">
            Nieruchomości z problemami – znajdź rozwiązanie z Towarzystwem Mieszkaniowym
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]">
          <div className="text-lg leading-relaxed" itemProp="description">
            <p className="mb-6">
              Stając przed wyzwaniem sprzedaży nieruchomości, której ciąży problem prawny czy finansowy, wiele osób czuje się
              zniechęconych i przytłoczonych. Właśnie w takich sytuacjach skup nieruchomości cały kraj może okazać się
              nieocenionym wsparciem. Oferując szybką transakcję, minimalizując stres i niepewność, które zwykle towarzyszą
              sprzedaży nieruchomości z problemami.
            </p>
            <p>
              To rozwiązanie jest szczególnie wartościowe dla właścicieli nieruchomości zadłużonych, wymagających remontu lub
              borykających się z innymi komplikacjami. Dzięki skupującej nieruchomości firmie, można uniknąć skomplikowanych
              procedur prawnych, uwolnić zablokowany kapitał i zredukować stres związany z niepewnością. Skup nieruchomości w
              całej Polsce daje możliwość szybkiego i efektywnego rozwiązania problemu, co dla wielu sprzedających jest bezcenną
              korzyścią.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyProblems;