'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Column 1: Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start md:col-span-6 lg:col-span-7">
            <Link href="/" className="mb-4 inline-block">
              <div className="relative h-10 w-48">
                <Image 
                  src="/vectors/tm-logo.png" 
                  alt="Towarzystwo Mieszkaniowe" 
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-[var(--text-gray)] mb-4 max-w-xs text-center md:text-left">
              Profesjonalny skup nieruchomości za gotówkę w całej Polsce. Szybka wycena, bezpieczna transakcja i płatność gotówką w ciągu 24h.
            </p>
            <div className="space-y-2">
              <a href="tel:+48530190880" className="flex items-center text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                <FaPhone className="mr-2" />
                +48 530 190 880
              </a>
              <a href="mailto:kontakt@flatscout.pl" className="flex items-center text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                <FaEnvelope className="mr-2" />
                biuro@towarzystwomieszkaniowe.pl
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start md:col-span-3 lg:col-span-3">
            <h3 className="text-lg font-semibold text-[var(--text-black)] mb-4 text-center md:text-left">Usługi</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="/skup-nieruchomosci-komercyjnych" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                  Skup nieruchomości komercyjnych
                </Link>
              </li>
              <li>
                <Link href="/skup-udzialow" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                  Skup udziałów w nieruchomości
                </Link>
              </li>
              <li>
                <Link href="/skup-nieruchomosci-spadkowych" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                  Skup nieruchomości spadkowych
                </Link>
              </li>
              <li>
                <Link href="/skup-nieruchomosci-z-lokatorem" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                  Skup nieruchomości z lokatorem
                </Link>
              </li>
              <li>
                <Link href="/skup-mieszkan" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                  Skup mieszkań
                </Link>
              </li>
              <li>
                <Link href="/skup-kamienic" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                  Skup kamienic
                </Link>
              </li>
              <li>
                <Link href="/skup-gruntow" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                  Skup gruntów
                </Link>
              </li>
              <li>
                <Link href="/skup-domow" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                  Skup domów
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Information */}
          <div className="flex flex-col items-center md:items-start md:col-span-3 lg:col-span-2">
            <h3 className="text-lg font-semibold text-[var(--text-black)] mb-4 text-center md:text-left">Informacje</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="/kontakt" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/o-nas" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/polityka-prywatnosci" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-sm text-[var(--text-gray)] text-center">
              © {currentYear} Towarzystwo Mieszkaniowe. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;