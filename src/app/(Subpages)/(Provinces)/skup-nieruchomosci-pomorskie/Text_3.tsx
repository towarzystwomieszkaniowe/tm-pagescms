'use client';

const Text_3 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-base)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Płatność gotówką i proste procedury
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Naszą przewagą konkurencyjną są szybkość i proste procedury. Dzięki temu Twoje zaangażowanie w proces będzie minimalne. Z reguły już po paru dniach od zgłoszenia nasi klienci mogą cieszyć się gotówką.
            </p>

            <p className="leading-relaxed mb-6">
              Nasz proces krok po kroku:
            </p>

            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li>Wysyłasz do nas formularz zgłoszeniowy z opisem i zdjęciami nieruchomości.</li>
              <li>W ciągu 24 godzin od wysłania formularza otrzymasz od nas wycenę i ofertę kupna.</li>
              <li>Jeśli zaakceptujesz naszą propozycję, to na tym etapie wspólnie zajmiemy się skompletowaniem dokumentów potrzebnych do sprzedaży lokalu.</li>
              <li>Umawiamy się w dogodnym dla Ciebie terminie u notariusza na podpisanie umowy.</li>
              <li>Po podpisaniu umowy, od razu płacimy Ci gotówką lub przelewem.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_3;