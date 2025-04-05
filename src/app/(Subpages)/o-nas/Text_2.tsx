'use client';

const Text_2 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Na czym polega proces skupu nieruchomości?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Nasze biuro skupu nieruchomości wyróżniają przede wszystkim proste i zrozumiałe dla każdego klienta procedury. Doskonale
              zdajemy sobie sprawę z tego, że chcesz sprzedać nieruchomość, która jest ważnym składnikiem Twojego majątku. Dlatego
              Twój komfort i poczucie bezpieczeństwa są dla nas najważniejsze.
            </p>
            <p className="leading-relaxed mb-6">
              Cała procedura sprzedaży trwa od kilku dni do tygodnia i można ją podzielić na kilka podstawowych etapów.
            </p>
            <p className="leading-relaxed mb-6">
              Pierwszy ruch należy do Ciebie. Skontaktuj się z naszym biurem skupu i prześlij do nas najważniejsze informacje o
              nieruchomości przeznaczonej do sprzedaży. Na podstawie informacji otrzymanych od Ciebie nasi eksperci przygotują
              bezpłatną i rzetelną wycenę nieruchomości. Razem z wyceną otrzymasz od nas ofertę kupna Twojego mieszkania lub domu.
              Zastanów się, czy nasza oferta spełnia Twoje oczekiwania. Jeżeli uznasz, że jest atrakcyjna, to wspólnie skompletujemy
              dokumenty, które są potrzebne do zawarcia umowy kupna-sprzedaży.
            </p>
            <p className="leading-relaxed">
              Został nam ostatni i najważniejszy etap, czyli podpisanie umowy w kancelarii notarialnej. Zaraz po sfinalizowaniu transakcji
              przelejemy pieniądze na Twoje konto, korzystając z opcji szybkiego przelewu. Możesz też otrzymać gotówkę do ręki.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_2;