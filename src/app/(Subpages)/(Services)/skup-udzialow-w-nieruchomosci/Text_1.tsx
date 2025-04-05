'use client';

const Text_1 = () => {
  return (
    <section className="w-full py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Czy można sprzedać udział w nieruchomości?</h2>
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-4">
              Sprzedaż udziału w nieruchomości jest jak najbardziej możliwa, a cała transakcja nie różni się zbytnio od sprzedaży całego mieszkania czy innego lokalu. Nasi klienci mają jednak wątpliwości, czy mogą sprzedać swój udział bez zgody innych współwłaścicieli.
            </p>
            <p className="leading-relaxed mb-4">
              Kodeks Cywilny, a dokładnie artykuł 1051 mówi o tym, że każdy udziałowiec ma prawo zbycia spadku. Jak widzisz, w przypadku współwłasności ułamkowej zgoda współwłaścicieli nie jest Ci potrzebna. Możesz zgłosić swój udział do sprzedaży w każdej chwili.
            </p>
            <p className="leading-relaxed">
              Warto w tym momencie wspomnieć o współwłasności łącznej, czyli ustawowej wspólności małżeńskiej. W takiej sytuacji do sprzedaży udziałów, czy całego mieszkania potrzebna jest zgoda każdego z małżonków.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_1;