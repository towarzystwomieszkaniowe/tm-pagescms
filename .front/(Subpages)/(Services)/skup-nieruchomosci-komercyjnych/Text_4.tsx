'use client';

const Text_4 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Jakie typy nieruchomości komercyjnych skupujemy?
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-5xl mx-auto space-y-6 text-[var(--text-gray)]" itemScope itemType="https://schema.org/Article">
          <div itemProp="articleBody">
            <p className="leading-relaxed mb-6">
              Wśród różnorodnych typów nieruchomości komercyjnych, które kwalifikują się do skupu, znajdują się między innymi:
            </p>
            
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>lokale użytkowe i usługowe,</li>
              <li>magazyny oraz hale produkcyjne,</li>
              <li>biurowce i pomieszczenia biurowe,</li>
              <li>hotele i pensjonaty,</li>
              <li>nieruchomości gruntowe.</li>
            </ul>
            
            <p className="leading-relaxed">
              Do skupu mogą być kierowane obiekty niegdyś służące działalności gospodarczej, obecnie jednak niepełniące tej roli. 
              Dodatkowo, na listę kwalifikują się apartamenty w biurowcach, place składowe, centra handlowe oraz mieszkania 
              adaptowane na potrzeby działalności gospodarczej.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text_4;