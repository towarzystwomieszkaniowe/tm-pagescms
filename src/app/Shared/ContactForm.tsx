'use client';

import Form, { FormData } from './Form';
import Link from 'next/link';

interface ContactFormProps {
  onSubmit?: (formData: FormData) => void;
}

interface RegionLink {
  id: string;
  title: string;
}

const REGIONS: RegionLink[] = [
  { id: 'wielkopolskie', title: 'Skup nieruchomości Wielkopolskie' },
  { id: 'dolnoslaskie', title: 'Skup nieruchomości Dolnośląskie' },
  { id: 'pomorskie', title: 'Skup nieruchomości Pomorskie' },
  { id: 'slaskie', title: 'Skup nieruchomości Śląskie' },
  { id: 'kujawskopomorskie', title: 'Skup nieruchomości Kujawsko-pomorskie' },
  { id: 'swietokrzyskie', title: 'Skup nieruchomości Świętokrzyskie' },
  { id: 'mazowieckie', title: 'Skup nieruchomości Mazowieckie' },
  { id: 'podlaskie', title: 'Skup nieruchomości Podlaskie' },
  { id: 'malopolskie', title: 'Skup nieruchomości Małopolskie' },
  { id: 'warminskomazurskie', title: 'Skup nieruchomości Warmińsko-mazurskie' },
  { id: 'lubuskie', title: 'Skup nieruchomości Lubuskie' },
  { id: 'opolskie', title: 'Skup nieruchomości Opolskie' },
  { id: 'lodzkie', title: 'Skup nieruchomości Łódzkie' },
  { id: 'zachodniopomorskie', title: 'Skup nieruchomości Zachodniopomorskie' },
  { id: 'lubelskie', title: 'Skup nieruchomości Lubelskie' },
  { id: 'podkarpackie', title: 'Skup nieruchomości Podkarpackie' }
];

const convertToSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/ą/g, 'a')
    .replace(/ć/g, 'c')
    .replace(/ę/g, 'e')
    .replace(/ł/g, 'l')
    .replace(/ń/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ś/g, 's')
    .replace(/ź/g, 'z')
    .replace(/ż/g, 'z')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const RegionLink = ({ title }: { title: string }) => (
  <Link 
    href={`/${convertToSlug(title)}`} 
    className="flex items-center hover:text-[var(--button-primary)] transition-colors"
  >
    <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
    <span className="text-[var(--text-gray)]">{title}</span>
  </Link>
);

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const handleFormSubmit = (formData: FormData) => {
    console.log('Formularz kontaktowy wysłany:', formData);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]" id="kontakt">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Skontaktuj się z nami
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
          <p className="text-[var(--text-gray)] max-w-3xl mx-auto">
            Wypełnij formularz, a nasz ekspert skontaktuje się z Tobą w ciągu 24 godzin, aby omówić szczegóły Twojej nieruchomości.
          </p>
        </header>

        <div className="max-w-[500px] mx-auto mb-16">
          <Form onSubmit={handleFormSubmit} />
        </div>
        
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-[var(--text-black)] mb-8">
            Działamy w każdym województwie
          </h3>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-10"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-2 text-xs opacity-80">
            {REGIONS.map((region) => (
              <RegionLink key={region.id} title={region.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;