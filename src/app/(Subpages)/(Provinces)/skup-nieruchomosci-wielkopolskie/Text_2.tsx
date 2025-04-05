'use client';

const Text_2 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Skup nieruchomości za gotówkę Wielkopolskie – co to za usługa?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Jak już wspomnieliśmy wyżej, nasza działalność polega na bezpośrednim skupie mieszkań Wielkopolskie. Nie jesteśmy pośrednikiem i nie szukamy kupców na Twoje mieszkanie. To my jesteśmy bezpośrednim kupującym. Od typowego biura nieruchomości odróżnia nas również to, że za nasze usługi nie pobieramy żadnych opłat i prowizji. Jest to duża oszczędność zwłaszcza dla tych osób, które borykają się ze sporym zadłużeniem lub potrzebują pieniędzy np. na rozwój biznesu.
            </p>

            <p className="leading-relaxed mb-6">
              Naszą przewagą konkurencyjną jest darmowa i szybka wycena, którą przygotujemy w ciągu jednego dnia. W jaki sposób przygotowujemy wycenę? Zdajemy sobie sprawę, że prawidłowe oszacowanie wartości nieruchomości jest ważne dla jednej i drugiej strony transakcji. Wycenę przygotowują nasi eksperci, którzy biorą pod uwagę:
            </p>

            <div className="mb-6">
              <ul className="list-disc list-inside space-y-4">
                <li>Informacje, które pozyskaliśmy od Ciebie w formularzu zgłoszeniowym.</li>
                <li>Centy transakcyjne i analiza porównawcza – bierzemy pod uwagę mieszkania, które znajdują się w tej samej miejscowości czy dzielnicy i mają podobne parametry.</li>
                <li>Realia rynku nieruchomości i kondycji gospodarki.</li>
                <li>Stan techniczny i prawny nieruchomości.</li>
              </ul>
            </div>

            <p className="leading-relaxed">
              Działamy na terenie całego województwa wielkopolskiego, a prestiż i wielkość miasta nie ma dla nas większego znaczenia. Dlatego kupimy od Ciebie mieszkanie w Poznaniu, ale też w Chodzieży, Szamotułach i Złotowie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_2;