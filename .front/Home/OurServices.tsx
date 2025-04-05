'use client';
import { FaClock, FaEnvelope, FaUserTie } from 'react-icons/fa';

const OurServices = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="uslugi">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Co oferujemy naszym klientom? Poznaj nasze usługi
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-6xl mx-auto">
          {/* Usługi w nowoczesnym układzie */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Usługa 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[var(--icon-bg)] p-6 rounded-full mb-6">
                <FaClock className="text-[var(--button-primary)] text-4xl" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-black)] mb-4">
                Szybki skup nieruchomości
              </h3>
              <p className="text-[var(--text-gray)] leading-relaxed">
                Szybki skup nieruchomości za gotówkę w całej Polsce. Oznacza to, że po podpisaniu
                umowy otrzymasz pieniądze do ręki lub szybki przelew.
              </p>
            </div>

            {/* Usługa 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[var(--icon-bg)] p-6 rounded-full mb-6">
                <FaEnvelope className="text-[var(--button-primary)] text-4xl" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-black)] mb-4">
                Bezpłatna wycena
              </h3>
              <p className="text-[var(--text-gray)] leading-relaxed">
                Oferujemy bezpłatną i profesjonalną wycenę każdej nieruchomości. Nasza
                wycena jest atrakcyjna i rzetelna. Na jej podstawie przygotowujemy uczciwą cenę
                skupu Twojego mieszkania lub domu.
              </p>
            </div>

            {/* Usługa 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[var(--icon-bg)] p-6 rounded-full mb-6">
                <FaUserTie className="text-[var(--button-primary)] text-4xl" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-black)] mb-4">
                Pomoc na każdym etapie
              </h3>
              <p className="text-[var(--text-gray)] leading-relaxed">
                Pomoc na każdym etapie procesu sprzedaży, wsparcie prawne i pomoc w
                skompletowaniu dokumentów. Od samego początku możesz polegać na naszym
                zespole specjalistów. Nasi klienci mogą czuć się w pełni komfortowo i bezpiecznie.
              </p>
            </div>
          </div>

          {/* Dodatkowy opis */}
          <div className="mt-16 text-center">
            <p className="text-[var(--text-gray)] max-w-4xl mx-auto leading-relaxed">
              Zdajemy sobie sprawę z tego, że nasi klienci oczekują bezpiecznej i sprawnej transakcji. Wyróżnia nas profesjonalizm, ale też
              empatia i zrozumienie potrzeb klientów. Niektóre sprawy wymagają fachowego podejścia i delikatności. Możesz na nas liczyć
              w każdej sytuacji. Odpowiemy na wszystkie Twoje pytania i wątpliwości.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;