'use client';

const Text_1 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-base)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Co to jest skup nieruchomości komercyjnych?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Skup nieruchomości komercyjnych to usługa, która zyskała na popularności w Polsce, ułatwiając właścicielom szybkie 
              pozbycie się obiektów komercyjnych. Obejmuje ona zakup różnorodnych obiektów takich jak lokale usługowe, biurowce, 
              magazyny, czy hale produkcyjne, a także działki pod zabudowę komercyjną. Proces sprzedaży charakteryzuje się szybkością i 
              efektywnością – właściciel otrzymuje gotówkę bezpośrednio po finalizacji umowy, co eliminuje potrzebę długotrwałego 
              poszukiwania kupca na rynku.
            </p>

            <p className="leading-relaxed mb-6">
              Kluczową zaletą jest sprawny proces sprzedaży, dzięki któremu sprzedający otrzymuje gotówkę bezpośrednio po finalizacji umowy. 
              Dzięki temu, skup nieruchomości komercyjnych stanowi idealne rozwiązanie dla osób dążących do szybkiej likwidacji swoich 
              aktywów komercyjnych.
            </p>

            <p className="leading-relaxed">
              Szybki skup nieruchomości komercyjnych oferuje szereg korzyści dla sprzedających. Przede wszystkim umożliwia to natychmiastowe 
              pozbycie się nieruchomości bez konieczności długotrwałego wyszukiwania potencjalnych nabywców. Proces sprzedaży jest wyjątkowo 
              sprawnie przeprowadzany, dzięki czemu sprzedający otrzymuje gotówkę bezpośrednio po finalizacji umowy. Co więcej, eliminacja 
              niepotrzebnych formalności i skomplikowanych procedur znacząco ułatwia cały proces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_1;