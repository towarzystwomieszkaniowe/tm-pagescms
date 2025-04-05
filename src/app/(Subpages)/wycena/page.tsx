import React from 'react';
import Header from './Header';
import type { Metadata } from 'next';
import Description from './Description';
import Text_1 from './Text_1';
import Text_2 from './Text_2';

export const metadata: Metadata = {
  title: 'Wycena nieruchomości - FlatScout | Profesjonalna wycena',
  description: 'Dowiedz się, jak przebiega proces wyceny nieruchomości. Oferujemy profesjonalną i rzetelną wycenę domów, mieszkań i innych nieruchomości.',
};

const PropertyValuationPage = () => {
  return (
    <main className="w-full bg-[var(--background-base)]">
      <Header 
        title="Wycena nieruchomości - poznaj proces i jego znaczenie" 
      />
      <Description />
      <Text_1 />
      <Text_2 />
    </main>
  );
};

export default PropertyValuationPage;