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
                  src="/vectors/flatscout_logo.png" 
                  alt="FlatScout" 
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
                kontakt@towarzystwomieszkaniowe.pl
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[var(--text-gray)] mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
              © {currentYear} FlatScout. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-4 justify-center md:justify-end w-full md:w-auto">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;