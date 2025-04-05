'use client';

const Text_1 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Towarzystwo Mieszkaniowe – odpowiadamy na pytania naszych klientów
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed">
              Skup mieszkań staje się coraz bardziej popularną usługą. Codziennie otrzymujemy wiele pytań od naszych klientów. Dlatego przygotowaliśmy krótki poradnik z odpowiedziami na najczęściej zadawane pytania. Możesz też na bieżąco kontaktować się z naszymi specjalistami. Zapraszamy!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_1;