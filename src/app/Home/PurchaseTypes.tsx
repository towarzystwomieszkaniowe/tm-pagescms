'use client';

const PurchaseTypes = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="jakie-nieruchomosci">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Jakie nieruchomości skupujemy?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]">
            <p className="leading-relaxed mb-6">
              Jesteśmy doświadczonym biurem skupu nieruchomości i działamy na terenie całej Polski. Zgłasza się do nas wielu klientów, 
              którym zależy na szybkiej sprzedaży, ponieważ potrzebują gotówki lub po prostu chcą sprzedać problematyczną 
              nieruchomość na terenie Polski. Są to też często osoby, które otrzymały w spadku lub w darowiźnie mieszkanie w innej 
              miejscowości lub osoby, które potrzebują środków na inwestycję czy spłatę zadłużenia.
            </p>
            <p className="leading-relaxed mb-6">
              Dobra wiadomość jest taka, że nie boimy się żadnych wyzwań i skupujemy również mieszkania i domy z problemami. 
              Działamy szybko, a cena, którą proponujemy, jest atrakcyjna i uczciwa. Mamy duże doświadczenie i wiedzę, dzięki czemu prowadzimy:
            </p>

            <ul className="list-none space-y-3 pl-4">
              <li className="flex items-start">
                <span className="text-[var(--button-primary)] mr-2">•</span>
                <span>Skup domów i mieszkań w większych i mniejszych miejscowościach,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--button-primary)] mr-2">•</span>
                <span>Skup nieruchomości w gorszym stanie technicznym oraz tych przeznaczonych do generalnego remontu,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--button-primary)] mr-2">•</span>
                <span>Skup nieruchomości, których stan prawny nie jest wyjaśniony lub nie mają założonej księgi wieczystej,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--button-primary)] mr-2">•</span>
                <span>Skup udziałów w nieuchomości,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--button-primary)] mr-2">•</span>
                <span>Skup mieszkań lub domów z długami, a nawet z komornikiem,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--button-primary)] mr-2">•</span>
                <span>Skup działek budowlanych,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--button-primary)] mr-2">•</span>
                <span>Skup lokali komercyjnych na biuro lub usługi,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--button-primary)] mr-2">•</span>
                <span>Skup kamienic.</span>
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default PurchaseTypes;