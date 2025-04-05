'use client';

const CashOffer = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="oferta-skupu">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Oferta skupu mieszkań za gotówkę w całej Polsce
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Service">
          <div className="p-8" itemProp="description">
            <p className="leading-relaxed mb-6">
              W obliczu dynamicznie zmieniającego się rynku nieruchomości w Polsce, firmy – takie jak Towarzystwo Mieszkaniowe – oferujące skup mieszkań za gotówkę stanowią alternatywę dla tradycyjnych metod sprzedaży. Oferujemy szybką realizację transakcji, minimalizując potrzebę przechodzenia przez zawiłości formalne, które często wydłużają proces sprzedaży o długie miesiące. Działamy w różnorodnych lokalizacjach, obejmując swoim zasięgiem miasta takie jak Warszawa, Kraków, Łódź, Katowice, Wrocław czy Gdańsk, ale nie ograniczamy się tylko do wielkich aglomeracji co umożliwia sprzedającym dostęp do szerokiego rynku potencjalnych kupujących.
            </p>
            <p className="leading-relaxed mb-8">
              Skup nieruchomości cała Polska to hasło, które gwarantuje, że niezależnie od lokalizacji mieszkania, domu czy działki, istnieje możliwość szybkiej sprzedaży. Co istotne, jesteśmy również otwarci na skup nieruchomości obciążonych długiem lub zajętych przez komornika, oferując wyjście z trudnej sytuacji finansowej dla wielu osób.
            </p>
            
            <div className="text-center mt-8">
              <a 
                href="/kontakt" 
                className="inline-block bg-[var(--button-primary)] hover:bg-[var(--button-hover)] text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
              >
                Kontakt <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashOffer;