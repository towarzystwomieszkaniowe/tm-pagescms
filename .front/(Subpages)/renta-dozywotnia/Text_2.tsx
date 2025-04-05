'use client';

const Text_2 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Jak działa renta dożywotnia?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Renta dożywotnia to umowa, w której właściciel nieruchomości przekazuje prawo własności swojego mieszkania lub domu w
              zamian za comiesięczne świadczenie do końca życia. Umowa ta jest zawierana w formie aktu notarialnego, a prawo do
              dożywotniego zamieszkania zostaje zapisane w księdze wieczystej.
            </p>
            <p className="leading-relaxed mb-6">
              Fundusz hipoteczny nabywa nieruchomość i zobowiązuje
              się do wypłacania renty, co pozwala seniorowi na zachowanie prawa do zamieszkiwania do końca życia. Po śmierci seniora
              nieruchomość nie trafia do masy spadkowej. W Polsce renta jest popularnym rozwiązaniem umożliwiającym seniorom
              zapewnienie sobie stabilności finansowej na starość.
            </p>
            <p className="leading-relaxed">
              Fundusz hipoteczny dom może również oferować różne opcje wypłat,
              np. określoną kwotę zł miesięcznie, co dodatkowo zwiększa elastyczność tej formy wsparcia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_2;