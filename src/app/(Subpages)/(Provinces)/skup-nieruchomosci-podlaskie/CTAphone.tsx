import React from 'react';

const CTAphone: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-black)] mb-6">
            Chcesz sprzedać nieruchomość w województwie podlaskim? Czekamy na Twój kontakt</h2>
          <a
            href="tel:+48530190880"
            className="inline-flex items-center justify-center bg-[var(--button-primary)] text-white hover:bg-[var(--button-hover)] hover:scale-105 focus:ring-2 focus:ring-[var(--button-hover)] focus:outline-none transition-all duration-300 font-bold py-3 px-8 rounded-lg text-xl"
            aria-label="Zadzwoń pod numer +48 530 190 880"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +48 530 190 880
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAphone;