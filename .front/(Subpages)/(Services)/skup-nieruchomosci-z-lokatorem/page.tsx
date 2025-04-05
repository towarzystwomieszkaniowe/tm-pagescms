import React from 'react';
import type { Metadata } from 'next';
import Header from './Header';
import Description from './Description';
import Text_1 from './Text_1';
import Text_2 from './Text_2';
import Text_3 from './Text_3';
import Text_4 from './Text_4';
import Text_5 from './Text_5';
import Text_6 from './Text_6';
import Text_7 from './Text_7';
import Text_8 from './Text_8';
import CTAphone from './CTAphone';

export const metadata: Metadata = {
  title: 'Skup nieruchomości z lokatorami. Kupimy mieszkanie z lokatorem - FlatScout',
  description: 'Dowiedz się, jak sprzedać mieszkanie z lokatorem. Oferujemy profesjonalny skup nieruchomości z lokatorami, zapewniając szybką i bezproblemową transakcję.',
};

export default function PropertyValuationPage() {
  return (
    <main className="w-full bg-[var(--background-base)]">
      <Header />
      <Description />
      <Text_1 />
      <Text_2 />
      <Text_3 />
      <Text_4 />
      <Text_5 />
      <Text_6 />
      <Text_7 />
      <Text_8 />
      <CTAphone />
    </main>
  );
}