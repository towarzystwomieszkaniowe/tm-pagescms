import React from 'react';
import Header from './Header';
import type { Metadata } from 'next';
import Text_1 from './Text_1';
import FAQ from './FAQ';
import CTAphone from './CTAphone';

export const metadata: Metadata = {
  title: 'O nas - FlatScout | Dowiedz się, czym się zajmujemy',
  description: 'Poznaj FlatScout - dowiedz się kim jesteśmy, jakie mamy doświadczenie i jak możemy pomóc w sprzedaży Twojej nieruchomości.',
};

const AboutUsPage = () => {
  return (
    <main className="w-full bg-[var(--background-base)]">
      <Header 
        title="Towarzystwo Mieszkaniowe – dowiedz się, czym się zajmujemy" 
      />
      
      <Text_1 />
      <FAQ />
      <CTAphone />
    </main>
  );
};

export default AboutUsPage;