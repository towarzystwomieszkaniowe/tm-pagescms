'use client';

const Text_1 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Kim jesteśmy?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Jesteśmy biurem skupu nieruchomości z wieloletnim doświadczeniem i mamy na swoim koncie setki udanych transakcji.
              Współpracujemy z najlepszymi specjalistami z branży nieruchomości, którzy mogą pochwalić się dużymi kompetencjami.
            </p>
            <p className="leading-relaxed">
              Czym zajmuje się biuro skupu? Część osób porównuje nas do biura pośrednictwa nieruchomości. Nasza działalność jednak
              diametralnie różni się od typowej agencji nieruchomości. Podstawowa różnica jest taka, że my nie szukamy kupca na Twoje
              mieszkania, ponieważ to my jesteśmy bezpośrednim nabywcą. Od naszych klientów nie pobieramy opłat i prowizji i
              pokrywamy koszty transakcji.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_1;