'use client';

const SharesPurchase = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4" itemProp="name">
            Skup udziałów w nieruchomościach – jak to działa?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]">
          <div className="text-lg leading-relaxed" itemProp="description">
            <p className="mb-6">
              Decydując się na sprzedaż udziałów w nieruchomościach, wiele osób staje przed wyzwaniem znalezienia kupca, który byłby
              zainteresowany taką formą transakcji. Tutaj z pomocą przychodzi Towarzystwo Mieszkaniowe. Specjalizujemy się w skupie
              udziałów w nieruchomości, oferując bezpośrednie kupno za gotówkę na terenie całej Polski. Procedura sprzedaży udziałów
              jest prosta i przejrzysta, co stanowi dużą ulgę dla osób, które pragną uniknąć problematycznej współwłasności, na przykład
              w przypadku dziedziczenia czy rozwodu.
            </p>
            <p>
              W obrocie nieruchomościami, gdzie czas i pewność sprzedaży są na wagę złota, skup nieruchomości, w tym skup zadłużonych
              nieruchomości oraz skup udziałów, stanowi realną szansę na rozwiązanie wielu problemów. Dzięki profesjonalnemu podejściu
              i indywidualnej ocenie każdego przypadku, jesteśmy w stanie zaoferować sprawiedliwe warunki sprzedaży.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SharesPurchase;