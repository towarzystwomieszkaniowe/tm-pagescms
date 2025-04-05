'use client';

const Text_3 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Dlaczego warto skorzystać z naszych usług?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Szybkie i proste procedury oraz profesjonalne podejście do klienta to nasze największe atuty. Gwarantujemy najwyższy
              standard usług, a nasi specjaliści ds. skupu nieruchomości od samego początku służą merytorycznym wsparciem.
            </p>
            <p className="leading-relaxed mb-6">
              Sprzedaż nieruchomości na własną rękę wymaga dużo cierpliwości i czasu. Musisz umieścić ogłoszenie o sprzedaży w
              Internecie i innych mediach, znaleźć czas na prezentowanie mieszkania i odpowiadać na telefony i e-maile. Jest to spory
              problem zwłaszcza dla tych osób, które pracują. Możesz zdecydować się na współpracę z typowym biurem nieruchomości,
              ale nawet najlepszy agent nie zagwarantuje Ci szybkiej sprzedaży.
            </p>
            <p className="leading-relaxed">
              Szukanie kupca może trwać długo, a w tym czasie wciąż musisz regulować opłaty za czynsz i media. Co więcej, w przypadku
              współpracy z agencją nieruchomości zapłacisz wysoką prowizję. Dlatego proponujemy współpracę z profesjonalnym biurem
              skupu nieruchomości, które zapewni Ci szybką i bezpieczną transakcję, bez zbędnych formalności i dodatkowych kosztów.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_3;