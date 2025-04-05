'use client';

const Text_2 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Wycena w biurze skupu nieruchomości – Towarzystwo Mieszkaniowe
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Chcesz sprzedać mieszkanie, ale nie wiesz, jak je wycenić? Zgłoś się do biura skupu Towarzystwo Mieszkaniowe. 
              Nie tylko wycenimy Twoje mieszkanie, ale otrzymasz od nas również ofertę zakupu nieruchomości w atrakcyjnej cenie.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-black)]">Elementy wpływające na wycenę nieruchomości:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>rodzaj nieruchomości, czyli np. dom, mieszkanie</li>
                <li>lokalizacja – duże czy małe miasto, popularna dzielnica itd.</li>
                <li>przeznaczenie nieruchomości</li>
                <li>powierzchnia użytkowa</li>
                <li>standard wykończenia</li>
                <li>stan techniczny lokalu, czy np. konieczny jest generalny remont, czy wystarczy home staging i delikatny &quot;lifting&quot; mieszkania</li>
                <li>aktualna sytuacja na rynku nieruchomości</li>
                <li>plany zagospodarowania przestrzennego okolicy</li>
                <li>stan prawny nieruchomości, np. mieszkanie z księgą wieczystą lub bez księgi, prawo dożywocia</li>
                <li>ewentualne obciążenia nieruchomości, czyli hipoteka, komornik</li>
              </ul>
            </div>
            
            <p className="leading-relaxed mb-6">
              Nasza wycena jest zawsze bezpłatna i niezobowiązująca. Dzięki doświadczeniu i znajomości rynku nieruchomości, jesteśmy w stanie zaoferować konkurencyjne ceny, które odzwierciedlają realną wartość Twojego domu, uwzględniając jednocześnie szybkość i wygodę transakcji.
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
              Jeżeli nie potrzebujesz wyceny przygotowanej przez rzeczoznawcę i potrzebujesz jej do celów prywatnych, np. do sprzedaży, 
              to możesz skorzystać z usług naszego biura skupu nieruchomości. Zapraszamy już dziś! Zadzwoń: 
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