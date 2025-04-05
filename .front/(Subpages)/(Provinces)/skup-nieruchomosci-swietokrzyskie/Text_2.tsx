'use client';

const Text_2 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Dlaczego warto rozważyć skup nieruchomości za gotówkę w województwie świętokrzyskim?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Rozważając skup nieruchomości za gotówkę, kluczowym atutem jest możliwość szybkiego uzyskania finansów. W przeciwieństwie do długotrwałego procesu poszukiwania nabywcy i finalizacji umowy, co może się przeciągać miesiącami, skup nieruchomości oferuje realizację transakcji w znacznie krótszym czasie.
            </p>

            <p className="leading-relaxed mb-6">
              Dodatkowym plusem jest uniknięcie dodatkowych kosztów, takich jak opłaty pośrednictwa czy inne związane ze standardową sprzedażą na rynku nieruchomości. Można więc zaoszczędzić nie tylko czas, ale i pieniądze.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_2;