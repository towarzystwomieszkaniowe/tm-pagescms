'use client';

const Text_5 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Renta dożywotnia a odwrócony kredyt hipoteczny
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Renta dożywotnia, polegająca na przekazaniu nieruchomości świadczeniodawcy w zamian za regularne raty do końca życia,
              różni się od odwróconego kredytu hipotecznego — w którym prawo do nieruchomości przechodzi na bank, wypłacający
              kredytobiorcy comiesięczne kwoty. W rencie dożywotniej klient zachowuje prawo do zamieszkiwania, natomiast w
              odwróconym kredycie hipotecznym prawo własności przechodzi na bank po śmierci kredytobiorcy.
            </p>
            <p className="leading-relaxed mb-6">
              Renta hipoteczna niesie za sobą większe ryzyko, gdyż może być oferowana przez podmioty niepodlegające kontroli KNF. W
              przeciwieństwie do niej, odwrócony kredyt hipoteczny jest uregulowany prawnie, co zwiększa bezpieczeństwo transakcji.
            </p>
            <p className="leading-relaxed mb-6">
              Na rynku znajdziemy dwa główne rozwiązania:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>renta dożywotnia,</li>
              <li>odwrócony kredyt hipoteczny.</li>
            </ul>
            <p className="leading-relaxed">
              Warto rozważyć oba rozwiązania, zważywszy na różnice w przeniesieniu prawa własności oraz ryzyko związane z oferującymi
              podmiotami. Renta dożywotnia może wydawać się atrakcyjna dla tych, którzy chcą zachować prawo do zamieszkiwania,
              podczas gdy odwrócony kredyt hipoteczny oferuje większe bezpieczeństwo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_5;