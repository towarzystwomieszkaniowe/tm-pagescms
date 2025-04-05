'use client';

const Text_1 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Co to jest renta dożywotnia?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Renta dożywotnia to finansowe rozwiązanie skierowane do osób powyżej 60. roku życia, które posiadają własnościowe
              prawo do lokalu. W zamian za prawo do nieruchomości po śmierci właściciela, beneficjent otrzymuje dożywotnio
              świadczenie pieniężne.
            </p>
            <p className="leading-relaxed mb-6">
              Wysokość świadczenia, czyli renty wypłacanej, zależy od kilku czynników:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>wieku,</li>
              <li>płci,</li>
              <li>wartości nieruchomości.</li>
            </ul>
            <p className="leading-relaxed mb-6">
              To pozwala poprawić sytuację finansową seniorów poprzez comiesięczne wpływy. Umowa renty, zwana również umową o
              dożywocie, jest formą umowy dożywocia, która gwarantuje dożywotnią wypłatę określonej kwoty.
            </p>
            <p className="leading-relaxed">
              W praktyce oznacza to, że właściciel nieruchomości, zawierając umowę renty, zgadza się na przeniesienie własności po
              swojej śmierci na beneficjenta. W zamian za to otrzymuje regularne, dożywotnie świadczenie pieniężne, co stanowi
              atrakcyjną alternatywę dla tradycyjnych form zabezpieczenia na starość. Renta odpłatna jest więc rozwiązaniem, które
              może znacznie poprawić jakość życia seniorów, dając im stabilność finansową i spokój ducha.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_1;