'use client';

const Text_2 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Jak przebiega proces skupu mieszkań w FlatScout?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Chcesz sprzedać mieszkanie szybko i bez zbędnych formalności? Skorzystaj z usługi skupu mieszkań FlatScout. 
              Oferujemy uczciwe warunki, konkurencyjne ceny i profesjonalną obsługę na każdym etapie transakcji.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-black)]">Czynniki, które uwzględniamy przy wycenie mieszkania:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>lokalizacja – dzielnica, dostęp do komunikacji, infrastruktura</li>
                <li>metraż i układ pomieszczeń</li>
                <li>piętro i liczba kondygnacji w budynku</li>
                <li>rok budowy i stan techniczny budynku</li>
                <li>standard wykończenia mieszkania</li>
                <li>stan prawny nieruchomości</li>
                <li>potencjalne obciążenia (hipoteka, zadłużenie)</li>
                <li>aktualna sytuacja na lokalnym rynku nieruchomości</li>
              </ul>
            </div>
            
            <p className="leading-relaxed mb-6">
              Nasza wycena jest zawsze bezpłatna i niezobowiązująca. Dzięki doświadczeniu i znajomości rynku nieruchomości, 
              jesteśmy w stanie zaoferować konkurencyjne ceny, które odzwierciedlają realną wartość Twojego mieszkania, 
              uwzględniając jednocześnie szybkość i wygodę transakcji.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-[var(--text-black)]">Proces skupu mieszkania krok po kroku:</h3>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Kontakt i wstępna wycena</strong> - skontaktuj się z nami telefonicznie lub wypełnij formularz na naszej stronie. 
                Podaj podstawowe informacje o mieszkaniu i dołącz zdjęcia, jeśli to możliwe.
              </li>
              <li>
                <strong>Oględziny mieszkania</strong> - w dogodnym dla Ciebie terminie nasz przedstawiciel odwiedzi Twoją nieruchomość, 
                aby dokonać dokładnej oceny jej stanu i wartości.
              </li>
              <li>
                <strong>Przedstawienie oferty</strong> - po oględzinach przedstawimy Ci ostateczną ofertę zakupu. Nasza propozycja 
                jest zawsze uczciwa i uwzględnia wszystkie aspekty nieruchomości.
              </li>
              <li>
                <strong>Podpisanie umowy i wypłata gotówki</strong> - jeśli akceptujesz naszą ofertę, umawiamy się na podpisanie umowy 
                u notariusza. Płatność otrzymujesz od razu po podpisaniu umowy - gotówką lub przelewem, według Twojego wyboru.
              </li>
            </ol>
            
            <p className="leading-relaxed mt-6">
              Cały proces od pierwszego kontaktu do finalizacji transakcji może trwać zaledwie kilka dni. Nie musisz martwić się 
              o żadne formalności - zajmujemy się wszystkimi dokumentami i procedurami. Skontaktuj się z nami już dziś i przekonaj się, 
              jak szybko i bezproblemowo możesz sprzedać swoje mieszkanie! Zadzwoń: 
              <a href="tel:+48530190880" className="text-[var(--button-primary)] hover:text-[var(--button-hover)] font-semibold transition-colors">
                +48 530 190 880
              </a>
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-[var(--text-black)]">Procedura wyceny w naszym biurze skupu:</h3>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                Wysyłasz do nas formularz zgłoszeniowy, który znajdziesz na www.towarzystwomieszkaniowe.pl. 
                Zamieszczasz w nim dokładny opis nieruchomości oraz wyraźne zdjęcia każdego pomieszczenia.
              </li>
              <li>
                Nasi eksperci przygotowują dokładną i profesjonalną wycenę, biorąc pod uwagę informacje przesłane w formularzu 
                oraz ceny transakcyjne mieszkań o zbliżonych parametrach z najbliższej okolicy. Wycenę otrzymasz od nas w ciągu 
                jednego dnia od wysłania formularza. Razem z wyceną otrzymasz od nas ofertę zakupu Twojej nieruchomości. 
                Nasza oferta cenowa wynosi zazwyczaj około 90% wartości nieruchomości.
              </li>
              <li>
                Nasza oferta do niczego Cię nie zobowiązuje, ale jeśli ją przyjmiesz, to wtedy umówimy się na podpisanie umowy u notariusza. 
                W tym czasie przygotuj potrzebne dokumenty, jak akt notarialny, który potwierdzi, że jesteś właścicielem nieruchomości 
                oraz numer księgi wieczystej.
              </li>
              <li>
                W umówionym terminie spotykamy się w kancelarii notarialnej i podpisujemy umowę. Gotówkę otrzymasz od ręki. 
                Możemy też wykonać szybki przelew.
              </li>
            </ol>
            
            <p className="leading-relaxed mt-6">
              Jeżeli potrzebujesz szybko sprzedać swoje mieszkanie i zależy Ci na bezproblemowej transakcji, 
              to skorzystaj z usług naszego biura skupu mieszkań. Zapraszamy już dziś! Zadzwoń: 
              <a href="tel:+48530190880" className="text-[var(--button-primary)] hover:text-[var(--button-hover)] font-semibold transition-colors">
                +48 530 190 880
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_2;