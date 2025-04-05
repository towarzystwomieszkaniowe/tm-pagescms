'use client';

const TimeFrame = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="czas-procesu">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Ile czasu zajmuje cały proces skupu nieruchomości za gotówkę?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Długość procesu skupu nieruchomości za gotówkę może się różnić w zależności od kilku czynników, takich jak stan prawny i
              techniczny nieruchomości oraz szybkość zgromadzenia wymaganej dokumentacji. Jednak w większości przypadków cały
              proces, od pierwszego kontaktu po otrzymanie pieniędzy, może trwać zaledwie kilka dni.
            </p>
            <p className="leading-relaxed">
              Warto zaznaczyć, że skup nieruchomości za gotówkę działa na terenie całej Polski, co oznacza, że bez względu na lokalizację
              Twojej nieruchomości, możesz skorzystać z tej formy sprzedaży. Spotkanie u notariusza i otrzymanie pieniędzy następuje
              zazwyczaj niezwłocznie po akceptacji oferty skupu, co sprawia, że jest to jedna z najszybszych dostępnych metod sprzedaży.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeFrame;