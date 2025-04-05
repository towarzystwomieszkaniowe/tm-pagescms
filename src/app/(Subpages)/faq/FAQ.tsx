'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string | string[];
  isList?: boolean;
}

const FAQonas = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'Czym zajmuje się biuro skupu nieruchomości?',
      answer: 'Biuro skupu nieruchomości zajmuje się skupem za gotówkę różnego rodzaju nieruchomości w całej Polsce. Wyróżniają nas szybkie i przejrzyste procedury i najwyższe standardy obsługi klienta. Działamy zgodnie z przepisami prawa, a nasza oferta opiera się na rzetelnej wycenie i realiach rynkowych.'
    },
    {
      question: 'Jakiego rodzaju nieruchomości skupujecie?',
      answer: [
        'Skup mieszkań,',
        'Skup domów,',
        'Skup nieruchomości spadkowych,',
        'Skup nieruchomości z lokatorami,',
        'Skup udziałów w nieruchomości,',
        'Skup gruntów,',
        'Skup lokali komercyjnych,',
        'Skup nieruchomości bez określonego stanu prawnego, np. bez księgi wieczystej.'
      ],
      isList: true
    },
    {
      question: 'Jak mogę zgłosić do sprzedaży moją nieruchomość?',
      answer: 'Najprostszy i najszybszy sposób to wysłanie formularza zgłoszeniowego, który znajdziesz na naszej stronie. Pamiętaj, aby w zgłoszeniu znalazły się najważniejsze informacje o nieruchomości oraz zdjęcia. Opisz dokładnie swoje mieszkanie, dom czy lokal, podaj lokalizację oraz wskaż jakie udogodnienia znajdują się w budynku lub okolicy – dobry przykład to winda lub garaż. Na podstawie informacji pozyskanych od Ciebie, nasi specjaliści przygotują wycenę oraz ofertę kupna. Zazwyczaj oddzwaniamy do swoich klientów w ciągu jednego dnia.'
    },
    {
      question: 'W jaki sposób przygotowujecie wycenę i jaki jest jej koszt?',
      answer: 'Zacznijmy od tego, że wyceny nieruchomości, które przygotowujemy dla naszych klientów, są bezpłatne. Wykluczamy pobieranie jakichkolwiek opłat i prowizji od swoich klientów.\n\nNasi specjaliści przygotowują wycenę na podstawie:\n\nInformacji i zdjęć, które do nas wyślesz,\n\nCen transakcyjnych nieruchomości w danej okolicy o podobnych parametrach.\n\nWyceniając nieruchomość, bierzemy pod uwagę lokalizację, rok budowy, stan budynku, stan prawny, powierzchnię mieszkania, standard wykończenia, piętro, na którym znajduje się mieszkanie, udogodnienia tj. taras, winda czy garaż. Mamy dużą wiedzę i doświadczenie, dlatego jesteśmy w stanie przygotować rzetelną i profesjonalną wycenę w jeden dzień.'
    },
    {
      question: 'W jaki sposób przygotowujecie ofertę cenową zakupu nieruchomości?',
      answer: 'Nasza oferta cenowa wynosi zazwyczaj 90% wyceny nieruchomości. Z czego wynika dyskont cenowy 10%? Jako biuro skupu nieruchomości bierzemy na siebie spore ryzyko. Często skupujemy mieszkania lub domy zadłużone, z nieuregulowanym stanem prawnym, albo nieruchomości, które muszą przejść gruntowny remont. W tego typu nieruchomości musimy zainwestować spore środki. Ponosimy również koszty transakcji i koszty aktu notarialnego. Musisz wziąć pod uwagę to, że sprzedaż problematycznego mieszkania na wolnym rynku jest bardzo trudna. Może się okazać, że będziesz szukał kupca przez wiele miesięcy, a Twoje problemy finansowe będą narastać. Nawet jeśli Twoje mieszkanie jest bez zarzutu, to weź pod uwagę, że współpracując z typowym biurem nieruchomości, musisz zapłacić sporą prowizję. Nie masz też gwarancji, że agent znajdzie szybko kupca, który będzie w stanie wyłożyć gotówkę. W tym czasie musisz ponosić koszty utrzymania nieruchomości, które są niemałe.\n\nNasze biuro oferuje szybką sprzedaż bez żadnych opłat i prowizji. Gotówkę otrzymasz od nas w dniu podpisania aktu notarialnego. Nawet mimo dyskonta cenowego może się okazać, że współpraca z nami będzie dla Ciebie dużo korzystniejsza. Co więcej, zyskujesz też komfort i nie musisz się angażować w poszukiwania nabywcy.'
    },
    {
      question: 'Jeżeli transakcja dojdzie do skutku, to będę musiał zapłacić prowizję?',
      answer: 'Jak wspomnieliśmy wyżej, nie pobieramy żadnych opłat i prowizji od naszych klientów. Nie ma znaczenia, czy transakcja doszła do skutku, czy też nie. Nie działamy jak typowe biuro nieruchomości, tylko jesteśmy bezpośrednim kupującym.'
    },
    {
      question: 'Jak długo trwa proces sprzedaży mieszkania z Towarzystwem Mieszkaniowym?',
      answer: 'Nasze biuro skupu wyróżnia przede wszystkim skuteczność i szybkość w działaniu. Naszym dużym atutem jest to, że zamykamy większość transakcji w kilka dni. Zdarza się jednak, że cała procedura sprzedaży trwa tydzień albo dłużej. Kiedy proces sprzedaży się przedłuży? Zazwyczaj ma to miejsce, gdy mamy do czynienia z nieruchomością, która ma skomplikowany stan prawny lub brakuje dokumentacji potrzebnej do zawarcia umowy. Kiedy już zaakceptujesz naszą ofertę i wspólnie omówimy szczegóły, to wtedy umawiamy się na podpisanie umowy w kancelarii notarialnej. Po podpisaniu umowy otrzymasz od nas gotówkę lub wykonamy szybki przelew, który w kilka minut znajdzie się na Twoim koncie.'
    },
    {
      question: 'Jak dbacie o bezpieczeństwo transakcji i komfort swoich klientów?',
      answer: 'Jesteśmy firmą, która dysponuje własnym kapitałem, dzięki czemu możemy inwestować w nieruchomości i oferować naszym klientom skup mieszkań i domów za gotówkę. Nie musimy posiłkować się kredytami, dlatego szybko podejmujemy decyzję o zakupie nieruchomości i zamykamy transakcję w kilka dni. Nasi klienci od razu po podpisaniu umowy otrzymują środki w formie przelewu lub gotówki. Współpracujemy tylko ze sprawdzonymi i renomowanymi kancelariami notarialnymi, ale dajemy klientowi możliwość wyboru notariusza.\n\nWyróżniają nas najwyższe standardy i etyka oraz empatyczne podejście do klienta. Jeżeli zdecydujesz się na współpracę z Towarzystwem Mieszkaniowym, to otrzymasz wsparcie na każdym etapie transakcji. Nasi specjaliści to najlepsi fachowcy na rynku nieruchomości o dużej wiedzy i doświadczeniu. Oferujemy również poradę prawną w przypadku problematycznych nieruchomości.\n\nMożesz też zawsze liczyć na rzetelną i fachową wycenę oraz atrakcyjną ofertę zakupu Twojego mieszkania, domu lub lokalu'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            FAQ
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-[var(--text-black)]">{item.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-180' : ''} text-[var(--button-primary)]`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-4 text-[var(--text-gray)]">
                  {item.isList ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {(item.answer as string[]).map((point, i) => (
                        <li key={i} className="leading-relaxed">{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-relaxed">{item.answer as string}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQonas;