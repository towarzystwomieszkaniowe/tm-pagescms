import React from 'react';
import Header from './Header';
import type { Metadata } from 'next';
import Description from './Description';
import Text_1 from './Text_1';
import Text_2 from './Text_2';

export const metadata: Metadata = {
  title: 'Skup mieszkań - FlatScout | Szybka i uczciwa wycena',
  description: 'Oferujemy skup mieszkań za gotówkę. Szybka wycena, uczciwa cena i minimum formalności. Sprawdź naszą ofertę skupu mieszkań.',
};

const PropertyValuationPage = () => {
  return (
    <main className="w-full bg-[var(--background-base)]">
      <Header />
      <Description />
      <Text_1 />
      <Text_2 />
    </main>
  );
};

export default PropertyValuationPage;