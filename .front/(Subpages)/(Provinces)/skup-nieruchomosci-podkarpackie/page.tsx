import React from 'react';
import Header from './Header';
import type { Metadata } from 'next';
import Description from './Description';
import Text_1 from './Text_1';
import Text_2 from './Text_2';
import Text_3 from './Text_3';
import Text_4 from './Text_4';
import Text_5 from './Text_5';
import CTAphone from './CTAphone';

export const metadata: Metadata = {
  title: 'Skup nieruchomości w podkarpackim - FlatScout',
  description: 'Profesjonalny skup nieruchomości w województwie podkarpackim. Skupujemy mieszkania, domy, działki i lokale użytkowe w Rzeszowie, Przemyślu, Stalowej Woli i innych miastach. Szybka wycena i bezpieczna transakcja.',
  keywords: 'skup nieruchomości podkarpackie, skup mieszkań podkarpackie, skup domów podkarpackie, skup działek podkarpackie, skup nieruchomości Rzeszów, skup nieruchomości Przemyśl'
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
      <Text_5 />
      <CTAphone />
    </main>
  );
};

export default PropertyValuationPage;