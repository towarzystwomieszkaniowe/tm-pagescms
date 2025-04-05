'use client';

const Text_3 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-base)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Jak zgłosić nieruchomość komercyjną do biura skupu?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Cały proces sprzedaży do naszego biura skupu opiera się na jasnych i prostych zasadach. Chcesz do nas zgłosić lokal 
              komercyjny? Skorzystaj z formularza zgłoszeniowego, który znajdziesz na naszej stronie. Podaj nam jak najwięcej informacji 
              na temat Twojej nieruchomości. Są to lokalizacja, powierzchnia, liczba pięter, piętro, na którym lokal się znajduje. 
              Opisz, jaka działalność była prowadzona pod danym adresem.
            </p>

            <p className="leading-relaxed">
              Jest to ważne, ponieważ na podstawie danych, które otrzymamy od Ciebie, przygotujemy wycenę i zależy nam, żeby była 
              precyzyjna i rzetelna. Kiedy wycena będzie gotowa, przejdziemy do następnych etapów.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_3;