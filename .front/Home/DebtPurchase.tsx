'use client';

import Image from 'next/image';

const DebtPurchase = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4" itemProp="name">
            Skup nieruchomości zadłużonych
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center text-[var(--text-gray)]">
            Pomagamy właścicielom nieruchomości wyjść z trudnej sytuacji finansowej poprzez szybki i bezpieczny skup nieruchomości zadłużonych.
          </p>
        </header>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-[var(--text-gray)]">
            <div className="text-lg leading-relaxed" itemProp="description">
              <p className="mb-6">
                Borykasz się z zadłużeniem nieruchomości? Nie wiesz jak wyjść z trudnej sytuacji finansowej? 
                Nasza firma specjalizuje się w skupie nieruchomości zadłużonych, oferując szybkie i profesjonalne 
                rozwiązanie Twoich problemów.
              </p>
              <p className="mb-6">
                Skupujemy nieruchomości z różnymi rodzajami zadłużeń:
              </p>
              <ul className="list-none space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-[var(--button-primary)] mr-2">•</span>
                  <span>Zaległości w spłacie kredytu hipotecznego</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--button-primary)] mr-2">•</span>
                  <span>Zadłużenia w czynszu i opłatach administracyjnych</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--button-primary)] mr-2">•</span>
                  <span>Zaległości podatkowe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--button-primary)] mr-2">•</span>
                  <span>Nieruchomości z komornikiem</span>
                </li>
              </ul>
              <p>
                Oferujemy uczciwe warunki, szybką realizację transakcji oraz pełną obsługę prawną. 
                Pomagamy w negocjacjach z wierzycielami i przejmujemy na siebie wszystkie formalności 
                związane z procesem sprzedaży.
              </p>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/debt.webp"
              alt="Skup nieruchomości zadłużonych"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DebtPurchase;