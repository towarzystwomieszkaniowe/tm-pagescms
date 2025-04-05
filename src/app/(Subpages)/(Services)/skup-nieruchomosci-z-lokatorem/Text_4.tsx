'use client';

const Text_4 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Współpraca ze skupem nieruchomości – kim jesteśmy?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Nasze profesjonalne biuro skupu działa na polskim rynku już od wielu lat. Mamy duże doświadczenie w skupie nieruchomości z lokatorami, a naszym klientom jesteśmy stanie zapewnić najlepszą obsługę i przyjazne procedury. Cieszymy się zaufaniem klientów, którzy są zadowolenie z transakcji i dzięki nam mogli szybko sprzedać problematyczną nieruchomość.
            </p>
            
            <p className="leading-relaxed mb-6">
              Od wielu lat prowadzimy skup kamienic, mieszkań domów na terenie całej Polski. Nie boimy się wyzwań, dlatego skupujemy również mieszkania z długami, nieruchomości z niejasnym stanem prawnym i z lokatorami.
            </p>
            
            <p className="leading-relaxed">
              Chcesz szybko sprzedać mieszkanie z lokatorem? Zgłoś się do Towarzystwa Mieszkaniowego. Jesteśmy po to, żeby Ci pomóc i znaleźć rozwiązanie, które będzie korzystne dla dwóch stron.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_4;