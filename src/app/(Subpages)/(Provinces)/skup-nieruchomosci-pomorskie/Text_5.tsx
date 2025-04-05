'use client';

const Text_5 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-base)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Bezpłatna wycena i fachowe doradztwo
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Każdy klient, który wyśle do nas formularz zgłoszeniowy, otrzyma od nas bezpłatną i fachową wycenę, która zostanie przygotowania przez naszych ekspertów. Nasza wycena jest w pełni profesjonalna i rzetelna. Bardzo ważne są informacje, które otrzymamy od Ciebie, ale korzystamy również z danych rynkowych i z informacji o cenach transakcyjnych. Możesz też liczyć na nasze wsparcie i poradę prawną na każdym etapie sprzedaży.
            </p>
            <p className="leading-relaxed">
              Jesteśmy biurem skupu, które ma ugruntowaną pozycję na rynku nieruchomości. Jako solidna i sprawdzona firma dbamy o interes naszych klientów, a etyka zawodowa jest dla nas bardzo ważna. Nie pobieramy żadnych opłat od naszych klientów i bierzemy na siebie koszt aktu notarialnego. Dysponujemy kapitałem własnym, dzięki czemu możemy inwestować w skup nieruchomości, a naszym klientom płacić gotówką.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_5;