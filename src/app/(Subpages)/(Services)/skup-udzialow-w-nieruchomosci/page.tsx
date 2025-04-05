import React from 'react';
import Header from './Header';
import type { Metadata } from 'next';
import Description from './Description';
import Text_1 from './Text_1';
import Text_2 from './Text_2';
import Text_3 from './Text_3';
import Text_4 from './Text_4';

export const metadata: Metadata = {
  title: 'Skup udziałów w nieruchomościach - FlatScout',
  description: 'Dowiedz się, jak przebiega proces wyceny nieruchomości. Oferujemy profesjonalną i rzetelną wycenę domów, mieszkań i innych nieruchomości.',
};

const PropertyValuationPage = () => {
  return (
    <main className="w-full bg-[var(--background-base)]">
      <Header />
      <Description />
      <Text_1 />
      <Text_2 />
      <Text_3 />
      <Text_4 />
    </main>
  );
};

export default PropertyValuationPage;