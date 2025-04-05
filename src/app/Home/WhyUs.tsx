'use client';
import { FaCheckCircle, FaMoneyBillWave, FaUserFriends, FaShieldAlt, FaTools } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]" id="dlaczego-my">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Dlaczego warto wybrać nasz skup nieruchomości?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center text-[var(--text-gray)]">
            Decydując się na współpracę z nami, wybierasz nie tylko szybkość i bezpieczeństwo, ale także szereg innych korzyści. Oto kilka powodów, dla których warto nam zaufać:
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]">
          {/* Korzyść 1 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm" itemScope itemType="https://schema.org/Service">
            <div className="flex items-start">
              <div className="bg-[var(--icon-bg)] p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                <FaCheckCircle className="text-[var(--button-primary)] text-xl" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-black)] mb-2" itemProp="name">
                  Szybka sprzedaż nieruchomości
                </h3>
                <p className="leading-relaxed text-[var(--text-gray)]" itemProp="description">
                  Nasz skup nieruchomości w całej Polsce gwarantuje szybką sprzedaż Twojej nieruchomości. Często jesteśmy w stanie zrealizować transakcję w bardzo krótkim czasie, co jest idealne dla osób potrzebujących szybkiego zastrzyku gotówki.
                </p>
              </div>
            </div>
          </div>

          {/* Korzyść 2 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm" itemScope itemType="https://schema.org/Service">
            <div className="flex items-start">
              <div className="bg-[var(--icon-bg)] p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                <FaUserFriends className="text-[var(--button-primary)] text-xl" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-black)] mb-2" itemProp="name">
                  Brak pośredników
                </h3>
                <p className="leading-relaxed text-[var(--text-gray)]" itemProp="description">
                  Skupując nieruchomości za gotówkę bezpośrednio, eliminujemy potrzebę korzystania z usług pośredników, co pozwala Ci zaoszczędzić na opłatach za pośrednictwo.
                </p>
              </div>
            </div>
          </div>

          {/* Korzyść 3 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm" itemScope itemType="https://schema.org/Service">
            <div className="flex items-start">
              <div className="bg-[var(--icon-bg)] p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                <FaMoneyBillWave className="text-[var(--button-primary)] text-xl" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-black)] mb-2" itemProp="name">
                  Korzystna cena
                </h3>
                <p className="leading-relaxed text-[var(--text-gray)]" itemProp="description">
                  Dzięki naszemu doświadczeniu, byciu bezpośrednim kupcem i znajomości rynku jesteśmy w stanie zaproponować Ci atrakcyjną cenę za Twoją nieruchomość.
                </p>
              </div>
            </div>
          </div>

          {/* Korzyść 4 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm" itemScope itemType="https://schema.org/Service">
            <div className="flex items-start">
              <div className="bg-[var(--icon-bg)] p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                <FaShieldAlt className="text-[var(--button-primary)] text-xl" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-black)] mb-2" itemProp="name">
                  Bezpieczeństwo transakcji
                </h3>
                <p className="leading-relaxed text-[var(--text-gray)]" itemProp="description">
                  Wszystkie transakcje realizujemy zgodnie z obowiązującymi przepisami prawnymi, co zapewnia bezpieczeństwo i spokój umysłu zarówno dla sprzedających, jak i kupujących.
                </p>
              </div>
            </div>
          </div>

          {/* Korzyść 5 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm" itemScope itemType="https://schema.org/Service">
            <div className="flex items-start">
              <div className="bg-[var(--icon-bg)] p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                <FaTools className="text-[var(--button-primary)] text-xl" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-black)] mb-2" itemProp="name">
                  Rozwiązanie problemów
                </h3>
                <p className="leading-relaxed text-[var(--text-gray)]" itemProp="description">
                  Dzięki naszej wiedzy i doświadczeniu jesteśmy w stanie szybko rozwiązać wszelkie problemy, które mogą pojawić się w trakcie sprzedaży nieruchomości, w tym kwestie związane ze stanem prawnym.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;