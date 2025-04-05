'use client';

const Text_1 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-base)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Wycena nieruchomości przez rzeczoznawcę
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              W niektórych sytuacjach musimy skorzystać z usług rzeczoznawcy. Rzeczoznawca majątkowy jest to osoba, która nabyła odpowiednie uprawnienia. 
              Wycena przygotowana przez rzeczoznawcę, nazywana jest operatem szacunkowym. Będzie potrzebna w przypadku przekazania darowizny, spadku, 
              starania się o kredyt hipoteczny, amortyzacji lokalu i zeznania majątkowego.
            </p>

            <p className="leading-relaxed mb-6">
              Operat szacunkowy jest dokumentem urzędowym, który możemy przedłożyć w urzędzie skarbowym czy w sądzie. Musi mieć bezwzględnie formę 
              pisemną i zawierać precyzyjne obliczenia, dokładny opis nieruchomości i zdjęcia. Rzeczoznawca musi umieścić w dokumencie informację 
              o podstawach prawnych i metodzie, jaka była zastosowana w celu przygotowania wyceny.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-black)]">Elementy operatu szacunkowego:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>wskazanie nieruchomości i zakresu wyceny</li>
                <li>cel przygotowania operatu szacunkowego</li>
                <li>źródła, z którego pozyskano informacje o nieruchomości</li>
                <li>podstawa formalna</li>
                <li>szczegółowy opis stanu technicznego nieruchomości</li>
                <li>podanie przeznaczenia nieruchomości, który wynika z planu zagospodarowania przestrzeni</li>
                <li>analiza rynku nieruchomości, która jest konieczna do sporządzenia dokumentu</li>
                <li>opis zastosowanej metody oraz techniki szacowania</li>
              </ul>
            </div>

            <p className="leading-relaxed mb-6">
              Usługi rzeczoznawcy majątkowego nie są niestety tanie. Koszt rzeczoznawcy zależy od rodzaju i lokalizacji nieruchomości. 
              Przykładowo za wycenę mieszkania zapłacimy około 500-600 zł netto, za dom będziemy musieli zapłacić nawet ponad 1000 zł. 
              Za wycenę dużych nieruchomości, jak kamienica (tak, prowadzimy również skup kamienic) możemy zapłacić nawet kilka tysięcy zł.
            </p>

            <p className="leading-relaxed">
              Operat szacunkowy jest ważny przez 12 miesięcy i można go użyć tylko do celu, który został w nim wskazany. 
              Czy warto korzystać z usług rzeczoznawcy, gdy nie jest to konieczne? Sprawdź, jak wygląda wycena, gdy zlecisz ją np. do biura skupu nieruchomości.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_1;