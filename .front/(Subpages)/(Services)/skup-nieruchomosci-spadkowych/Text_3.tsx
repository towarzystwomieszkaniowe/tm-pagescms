'use client';

const Text_3 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-base)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Jakie nieruchomości kwalifikują się do skupu?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              W szerokim spektrum możliwości, jakie oferuje nasz skup nieruchomości spadkowych, znajdują się różnorodne typy majątków, które mogą być przedmiotem transakcji.
            </p>

            <p className="leading-relaxed mb-6">
              Prowadzimy:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Skup mieszkań, od kompaktowych kawalerek po przestronne apartamenty.</li>
              <li>Skup domów spadkowych.</li>
              <li>Skup nieruchomości zadłużonych i z komornikiem.</li>
              <li>Skup mieszkań i domów, które wymagają generalnego remontu.</li>
              <li>Skup kamienic.</li>
              <li>Skup lokali komercyjnych, takie jak sklepy, biura czy magazyny, również cieszy się zainteresowaniem ze względu na ich potencjalną wartość inwestycyjną.</li>
              <li>Skup gruntów oraz działek budowlanych stanowi kolejną kategorię nieruchomości, która może być objęta skupem.</li>
            </ul>

            <p className="leading-relaxed">
              Warto podkreślić, że niezależnie od typu, każda nieruchomość objęta spadkiem ma szansę na szybką sprzedaż. Skup nieruchomości spadkowych jest elastycznym rozwiązaniem, które umożliwia spadkobiercom uniknięcie zaangażowania w czasochłonny i skomplikowany proces spadkowy, zapewniając jednocześnie dostęp do szybkiej gotówki.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_3;