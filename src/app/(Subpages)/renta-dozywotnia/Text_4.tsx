'use client';

const Text_4 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Ile wynosi renta dożywotnia?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Wysokość renty dożywotniej zależy od kilku kluczowych czynników — przede wszystkim od wartości mieszkania.
              Rzeczoznawca przeprowadza wyceny nieruchomości, co pozwala precyzyjnie oszacować kwotę, jaką można otrzymać.
              Średnia renta dożywotnia wynosi około 1000-1500 zł miesięcznie, choć w wyjątkowych przypadkach może sięgać nawet 3000
              zł.
            </p>
            <p className="leading-relaxed mb-6">
              Warto zauważyć, że na wysokość renty wpływają nie tylko wartości mieszkania, ale również wiek, stan zdrowia
              wnioskującego oraz lokalizacja nieruchomości. Im wyższa wycena nieruchomości i lepszy stan zdrowia, tym wyższa może
              być miesięczna renta.
            </p>
            <p className="leading-relaxed">
              Umowa podpisywana jest po dokładnym oszacowaniu wszystkich tych elementów, co pozwala na
              transparentność i bezpieczeństwo transakcji. Kluczowe jest, aby przed podpisywania umowy dokładnie zapoznać się z
              wszelkimi warunkami i szczegółami, aby uniknąć nieporozumień.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_4;