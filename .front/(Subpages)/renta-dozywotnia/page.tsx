import React from 'react';
import Header from './Header';
import type { Metadata } from 'next';
import Description from './Description';
import Text_1 from './Text_1';
import Text_2 from './Text_2';
import Text_3 from './Text_3';
import Text_4 from './Text_4';
import Text_5 from './Text_5';
import Text_6 from './Text_6';
import Text_7 from './Text_7';
import CTAphone from './CTAphone';

export const metadata: Metadata = {
  title: 'Renta dożywotnia - FlatScout | Kompleksowe informacje',
  description: 'Dowiedz się wszystkiego o rencie dożywotniej - jak działa, ile wynosi, jakie są warunki umowy i korzyści. Profesjonalne doradztwo w zakresie renty dożywotniej.',
};

const RentaDozywotniaPage = () => {
  return (
    <main className="w-full bg-[var(--background-base)]">
      <Header 
        title="Renta dożywotnia" 
      />
      
      <Description />
      <Text_1 />
      <Text_2 />
      <Text_3 />
      <CTAphone />
      <Text_4 />
      <Text_5 />
      <Text_6 />
      <Text_7 />
    </main>
  );
};

export default RentaDozywotniaPage;