'use client';
import { FaHandshake, FaShieldAlt, FaBolt, FaHome } from 'react-icons/fa';
import Head from 'next/head';

const AboutPurchase = () => {
  return (
    <>
      <Head>
        <title>Skup nieruchomości w całej Polsce za gotówkę | FlatScout</title>
        <meta name="description" content="Profesjonalny skup nieruchomości za gotówkę w całej Polsce. Szybka wycena, bezpieczna transakcja i płatność gotówką w ciągu 24h." />
        <meta name="keywords" content="skup nieruchomości, skup mieszkań, sprzedaż nieruchomości za gotówkę, szybka sprzedaż mieszkania, skup domów, wycena nieruchomości" />
      </Head>
      <section className="w-full bg-[var(--background-secondary)] py-16 md:py-24" itemScope itemType="https://schema.org/Service">
        <div className="container mx-auto px-4">
          <header className="mb-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4" itemProp="name">
              Skup nieruchomości cała Polska
            </h1>
            <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center text-[var(--text-gray)]" itemProp="description">
              Skup nieruchomości za gotówkę w całej Polsce to świetna opcja dla tych osób, które chcą szybko sprzedać swoje mieszkanie
              lub dom. Zależy Ci na szybkiej sprzedaży nieruchomości i potrzebujesz gotówki?
            </p>
          </header>
          
          <div className="max-w-5xl mx-auto space-y-12 text-[var(--text-gray)]">
            {/* Sekcja 1 */}
            <article className="bg-white/80 backdrop-blur-sm p-8 border-b border-gray-200 rounded-lg" itemScope itemType="https://schema.org/Service">
              <div className="flex items-center mb-6">
                <div className="bg-[var(--button-primary)] p-3 rounded-full mr-4 text-white">
                  <FaHandshake size={24} aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--text-black)]" itemProp="name">
                  Co oznacza współpraca z nami?
                </h2>
              </div>
              <div className="pl-4 border-l-4 border-[var(--button-primary)]" itemProp="description">
                <p className="leading-relaxed mb-4">
                  Działamy zupełnie inaczej niż zwykłe biuro nieruchomości, ponieważ jesteśmy <strong>bezpośrednim kupującym</strong>.
                </p>
                <p className="leading-relaxed mb-4">
                  Naszym klientom płacimy od ręki gotówką, a cała transakcja trwa zazwyczaj nie dłużej niż kilka dni.
                </p>
                <p className="leading-relaxed">
                  Dzięki temu oszczędzasz swój czas i pieniądze. Nie musisz czekać na kupca i ponosić dodatkowych kosztów związanych z pośrednictwem.
                </p>
              </div>
            </article>
            
            {/* Sekcja 2 */}
            <article className="bg-white/80 backdrop-blur-sm p-8 border-b border-gray-200 rounded-lg" itemScope itemType="https://schema.org/Service">
              <div className="flex items-center mb-6">
                <div className="bg-[var(--button-primary)] p-3 rounded-full mr-4 text-white">
                  <FaHome size={24} aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--text-black)]" itemProp="name">
                  Profesjonalna obsługa nieruchomości
                </h2>
              </div>
              <div className="pl-4 border-l-4 border-[var(--button-primary)]" itemProp="description">
                <p className="leading-relaxed mb-4">
                  Skupujemy nieruchomości w różnych miejscowościach, a stan prawny i techniczny nieruchomości nie ma dla nas większego znaczenia.
                </p>
                <p className="leading-relaxed">
                  Nasi specjaliści mają dużą wiedzę i doświadczenie, dzięki czemu wszystko przebiega szybko i sprawnie,
                  a formalności są ograniczone do minimum. Możesz liczyć na wysoki standard obsługi i fachową pomoc na każdym etapie
                  transakcji.
                </p>
              </div>
            </article>
            
            {/* Sekcja 3 */}
            <article className="bg-white/80 backdrop-blur-sm p-8 border-b border-gray-200 rounded-lg" itemScope itemType="https://schema.org/Service">
              <div className="flex items-center mb-6">
                <div className="bg-[var(--button-primary)] p-3 rounded-full mr-4 text-white">
                  <FaShieldAlt size={24} aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--text-black)]" itemProp="name">
                  Bezpieczeństwo transakcji nieruchomości
                </h2>
              </div>
              <div className="pl-4 border-l-4 border-[var(--button-primary)]" itemProp="description">
                <p className="leading-relaxed mb-4">
                  Podejmując decyzję o sprzedaży mieszkania za gotówkę, wybierasz nie tylko szybkość, ale także bezpieczeństwo transakcji.
                </p>
                <p className="leading-relaxed">
                  Dzięki skupowi mieszkań za gotówkę, możliwe staje się uniknięcie wielu przeszkód, które często
                  pojawiają się na tradycyjnym rynku nieruchomości. Prowadzimy skup mieszkań w sposób profesjonalny i transparentny,
                  z pełnym poszanowaniem dla Twoich potrzeb oraz stanu prawnego nieruchomości.
                </p>
              </div>
            </article>
            
            {/* Sekcja 4 */}
            <article className="bg-white/80 backdrop-blur-sm p-8 rounded-lg" itemScope itemType="https://schema.org/Service">
              <div className="flex items-center mb-6">
                <div className="bg-[var(--button-primary)] p-3 rounded-full mr-4 text-white">
                  <FaBolt size={24} aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--text-black)]" itemProp="name">
                  Szybki i uproszczony proces sprzedaży
                </h2>
              </div>
              <div className="pl-4 border-l-4 border-[var(--button-primary)]" itemProp="description">
                <p className="leading-relaxed mb-4">
                  Nasze doświadczenie pozwala nam na szybką wycenę nieruchomości, dzięki czemu możesz szybko sprzedać swoje domy,
                  mieszkania, nie czekając miesiącami na potencjalnych nabywców.
                </p>
                <p className="leading-relaxed">
                  Co więcej, cały proces sprzedaży jest maksymalnie uproszczony – odbywa się online lub telefonicznie, 
                  co eliminuje konieczność osobistych spotkań i długotrwałych negocjacji.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPurchase;