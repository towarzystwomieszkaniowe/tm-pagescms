import React from 'react';
import Header from './Header';
import Map from './Map';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - FlatScout | Skontaktuj się z nami',
  description: 'Skontaktuj się z FlatScout - znajdziesz tutaj nasze dane kontaktowe, adres oraz mapę dojazdu. Jesteśmy do Twojej dyspozycji!',
};

const ContactPage = () => {
  return (
    <main className="w-full bg-[var(--background-base)]">
      <Header 
        title="Skontaktuj się z nami"
        subtitle="Jesteśmy do Twojej dyspozycji - skontaktuj się z nami w wybrany sposób"
      />
      <Map />
    </main>
  );
};

export default ContactPage;