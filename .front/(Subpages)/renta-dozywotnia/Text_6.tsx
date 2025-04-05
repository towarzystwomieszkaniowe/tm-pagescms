'use client';

const Text_6 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Jak wygląda umowa renty dożywotniej?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Umowa renty dożywotniej zawiera istotne zapisy, które gwarantują zabezpieczenia dla obu stron. Przede wszystkim, umowa
              ta ma charakter cywilnoprawny i ustala świadczenie pieniężne na rzecz uprawnionego do jego śmierci. Co więcej, istnieje
              możliwość przeniesienia prawa własności nieruchomości, co czyni ją atrakcyjną dla wielu osób.
            </p>
            <p className="leading-relaxed mb-6">
              Najważniejsze jest to, że umowa powinna być zawarta w formie aktu notarialnego. Taki dokument daje pewność prawną i
              chroni interesy zarówno świadczeniodawcy, jak i uprawnionego. Strony mają pełną swobodę w ustalaniu czasu trwania
              obowiązku uiszczania renty oraz terminów płatności, co umożliwia elastyczne dostosowanie warunków do indywidualnych
              potrzeb.
            </p>
            <p className="leading-relaxed">
              Należy również pamiętać, że umowy o rentę mają charakter osobisty, co oznacza, że wygasają z chwilą śmierci
              uprawnionego. Dzięki temu, strony mogą mieć pewność, że zobowiązania nie będą trwały wiecznie. Własność nieruchomość
              może być kluczowym elementem tej umowy, zapewniając dodatkowe zabezpieczenie finansowe dla świadczeniodawcy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_6;