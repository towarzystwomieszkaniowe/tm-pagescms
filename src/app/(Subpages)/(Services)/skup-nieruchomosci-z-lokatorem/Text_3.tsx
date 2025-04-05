'use client';

const Text_3 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-base)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Sprzedaż mieszkania a prawo dożywocia
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Są też sytuacje, kiedy eksmisja nie wchodzi w grę. Nie możemy żądać wyprowadzki od lokatora z prawem dożywocia. Jedyne rozwiązanie, jakie przewiduje nasze prawo to zamiana prawa dożywocia na dożywotnią rentę. Postępowanie eksmisyjne również nie wchodzi w grę. Jedyna możliwość pozbycia się problemu to pozbycie się nieruchomości. Koszty renty dożywotniej ponosi zawsze właściciel mieszkania. Oczywiście musi mieć na to zgodę lokatora.
            </p>
            
            <p className="leading-relaxed mb-6">
              Zapis o prawie lokatora dożywocia znajduje się w III dziale księgi wieczystej nieruchomości.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-[var(--text-black)]">
              Czy można sprzedać mieszkanie z lokatorem z grupy chronionej?
            </h3>
            <p className="leading-relaxed mb-6">
              W przypadku osób niepełnosprawnych i kobiet w ciąży eksmisja nie będzie skuteczna, ponieważ takiemu lokatorowi należy w pierwszej kolejności zapewnić mieszkanie zastępcze. Za zapewnienie takiego lokalu odpowiedzialny jest urząd gminy. Niestety taki proces trwa kilka lat, ponieważ lokali zastępczych jest mało.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_3;