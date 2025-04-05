import React from 'react';
import Header from './Header';
import type { Metadata } from 'next';
import Text_1 from './Text_1';
import Text_2 from './Text_2';
import Text_3 from './Text_3';
import FAQ from './FAQ';

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
      <Text_2 />
      <Text_3 />
      <FAQ />
    </main>
  );
};

export default AboutUsPage;