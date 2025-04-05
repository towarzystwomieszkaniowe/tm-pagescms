'use client';

const PurchaseProcess = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-primary)]" id="proces-skupu" itemScope itemType="https://schema.org/HowTo">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4" itemProp="name">
            Jak działamy? Proces skupu nieruchomości krok po kroku
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
          <p className="text-[var(--text-gray)] max-w-3xl mx-auto" itemProp="description">
            My skupujemy mieszkania od ręki i płacimy gotówką zaraz po podpisaniu aktu notarialnego. Naszym klientom oferujemy
            pełne wsparcie na każdym etapie transakcji, empatię i przyjazną atmosferę. Przeprowadzamy szybką i rzetelną wycenę, a
            nasza oferta skupu jest zawsze uczciwa i dopasowana do realiów rynkowych. Możemy pochwalić się zaufaniem klientów i
            wieloma rekomendacjami. Działamy profesjonalnie i skutecznie, skupując nieruchomości na terenie całej Polski.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <ol className="space-y-8 list-none">
            {/* Krok 1 */}
            <li className="pb-6 border-b border-gray-200" itemScope itemProp="step" itemType="https://schema.org/HowToStep">
              <meta itemProp="position" content="1" />
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--button-primary)] text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[var(--text-black)] mb-3" itemProp="name">
                    Wysyłasz do nas formularz zgłoszeniowy
                  </h3>
                  <p className="text-[var(--text-gray)]" itemProp="text">
                    Wysyłasz do nas formularz zgłoszeniowy z opisem nieruchomości i zdjęciami. Możesz też wysłać e-mail lub zadzwonić, a z chęcią odpowiemy na wszystkie pytania.
                  </p>
                </div>
              </div>
            </li>

            {/* Krok 2 */}
            <li className="py-6 border-b border-gray-200" itemScope itemProp="step" itemType="https://schema.org/HowToStep">
              <meta itemProp="position" content="2" />
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--button-primary)] text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[var(--text-black)] mb-3" itemProp="name">
                    Przygotowujemy wycenę i ofertę zakupu
                  </h3>
                  <p className="text-[var(--text-gray)]" itemProp="text">
                    Przygotowujemy wycenę i ofertę zakupu Twojej nieruchomości. Otrzymasz ją najpóźniej kolejnego dnia po zgłoszeniu.
                  </p>
                </div>
              </div>
            </li>

            {/* Krok 3 */}
            <li className="py-6 border-b border-gray-200" itemScope itemProp="step" itemType="https://schema.org/HowToStep">
              <meta itemProp="position" content="3" />
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--button-primary)] text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[var(--text-black)] mb-3" itemProp="name">
                    Wspólnie przygotowujemy dokumenty
                  </h3>
                  <p className="text-[var(--text-gray)]" itemProp="text">
                    Jeżeli zaakceptujesz naszą ofertę, to wspólnie przygotowujemy listę dokumentów, które są potrzebne do sfinalizowania transakcji. Pamiętaj, że jesteśmy otwarci na rozmowy i negocjacje.
                  </p>
                </div>
              </div>
            </li>

            {/* Krok 4 */}
            <li className="py-6 border-b border-gray-200" itemScope itemProp="step" itemType="https://schema.org/HowToStep">
              <meta itemProp="position" content="4" />
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--button-primary)] text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[var(--text-black)] mb-3" itemProp="name">
                    Ustalamy datę i miejsce podpisania umowy
                  </h3>
                  <p className="text-[var(--text-gray)]" itemProp="text">
                    Ustalamy datę i miejsce podpisania umowy, które są dogodne dla obu stron.
                  </p>
                </div>
              </div>
            </li>

            {/* Krok 5 */}
            <li className="py-6" itemScope itemProp="step" itemType="https://schema.org/HowToStep">
              <meta itemProp="position" content="5" />
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--button-primary)] text-white font-bold text-lg">
                    5
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[var(--text-black)] mb-3" itemProp="name">
                    Płatność gotówką lub przelewem
                  </h3>
                  <p className="text-[var(--text-gray)]" itemProp="text">
                    Po podpisaniu umowy wykonujemy szybki przelew na Twoje konto lub płacimy gotówką na miejscu.
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default PurchaseProcess;