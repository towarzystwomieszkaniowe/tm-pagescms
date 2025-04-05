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
      question: 'Jak mogę zgłosić do sprzedaży moją nieruchomość?',
      answer: 'Możesz napisać do nas e-mail lub wypełnić formularz zgłoszeniowy. Opisz szczegółowo swoją nieruchomość i załącz zdjęcia. Na podstawie informacji pozyskanych od Ciebie, przygotujemy wycenę i ofertę kupna Twojej nieruchomości.'
    },
    {
      question: 'Jak przygotowujemy ofertę zakupu nieruchomości?',
      answer: 'Przygotowując ofertę cenową, bierzemy pod uwagę miejscowość, dokładną lokalizację, standard wykończenia, stan i wygląd budynku, udogodnienia, tj. ogródek, balkon, garaż, winda, otoczenie i dostęp do komunikacji. W większości przypadków wystarczą nam Twoje zdjęcia, ale czasami konieczna jest wizyta w mieszkaniu.'
    },
    {
      question: 'Jak długo trwa sprzedaż i kiedy otrzymam gotówkę?',
      answer: 'Sprzedaż mieszkania do biura skupu trwa zazwyczaj kilka dni. W przypadku skomplikowanych spraw i gdy nie możemy szybko wyjaśnić stanu prawnego nieruchomości, transakcja zajmuje tydzień lub dłużej. Gotówkę otrzymasz od nas w dniu podpisania aktu notarialnego. Możesz też zdecydować się na szybki przelew.'
    },
    {
      question: 'Jakie nieruchomości skupujemy?',
      answer: [
        'Mieszkania i domy',
        'Udziały w nieruchomości',
        'Działki i grunty',
        'Lokale komercyjne',
        'Mieszkania i domy zadłużone lub z komornikiem',
        'Nieruchomości bez określonego stanu prawnego',
        'Lokale i mieszkania wymagające remontu',
        'Mieszkania z lokatorami',
        'Domy z lokatorami'
      ],
      isList: true
    },
    {
      question: 'Jak dbamy o bezpieczeństwo transakcji?',
      answer: 'Przestrzegamy przepisów prawa i działamy zgodnie z najwyższymi standardami. Współpracujemy tylko z renomowanymi kancelariami notarialnymi, ale każdy klient może wybrać swoją.'
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
            Nasz poradnik
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