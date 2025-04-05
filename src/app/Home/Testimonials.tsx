'use client';

import React from 'react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      text: "Jestem pod wrażeniem kompetencji i zaangażowania specjalistów z biura skupu. Od samego początku do końca mogłem liczyć na wsparcie w sprzedaży mojej nieruchomości. Otrzymałem odpowiedzi na wszystkie moje pytania, a cała transakcja przebiegła szybko i bezproblemowo",
      name: "Piotr",
      age: 37,
      profession: "Architekt"
    },
    {
      text: "Odziedziczyłam udziały w nieruchomości i miałam problem z ich sprzedażą. Zgłosiłam się do Towarzystwa Mieszkaniowego, gdzie otrzymałam fachową pomoc. Cała transakcja zamknęła się w kilka dni, a ja otrzymałam gotówkę, którą mogę teraz przeznaczyć na rozwój swojego biznesu",
      name: "Ania",
      age: 48,
      profession: "Właścicielka butiku"
    },
    {
      text: "Z całego serca polecam biuro skupu Towarzystwo Mieszkaniowe. Jestem osobą zapracowaną i nie mam czasu na zajęcie się sprzedażą mieszkania. Czas ten wolę poświęcić swoim pacjentom. Dzięki współpracy z Towarzystwem Mieszkaniowym mogłam szybko sprzedać swój dom i przeprowadzić się do nowego mieszkania. Całkowicie zaskoczył mnie profesjonalizm i empatia osoby, która zajęła się moją nieruchomością",
      name: "Katarzyna",
      age: 52,
      profession: "Lekarz"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    if (isDesktop) {
      return [
        testimonials[currentSlide % testimonials.length],
        testimonials[(currentSlide + 1) % testimonials.length],
        testimonials[(currentSlide + 2) % testimonials.length]
      ];
    }
    return [testimonials[currentSlide]];
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]" id="opinie" itemScope itemType="https://schema.org/Review">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Opinie klientów, którzy skorzystali z naszych usług
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-6xl mx-auto relative px-16">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-[var(--text-gray)] hover:text-[var(--button-primary)]"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-[var(--text-gray)] hover:text-[var(--button-primary)]"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm"
              >
                <div className="mb-6">
                  <p className="text-[var(--text-gray)] text-lg italic leading-relaxed" itemProp="reviewBody">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-[var(--text-black)]" itemProp="author">
                      {testimonial.name}, lat {testimonial.age}
                    </p>
                    <p className="text-[var(--button-primary)]" itemProp="reviewRating">
                      {testimonial.profession}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 mb-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`mx-1 h-3 w-3 rounded-full transition-all ${index === currentSlide ? 'bg-[var(--button-primary)] w-6' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;