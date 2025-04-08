'use client';
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Map = () => {
  return (
    <section className="w-full py-8 md:py-16 bg-[var(--background-secondary)] min-h-[calc(100vh-400px)]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-full">
          {/* Contact Information */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[var(--text-black)] mb-12">Dane kontaktowe</h2>

              <div className="space-y-12 md:flex md:space-y-0 md:space-x-8 md:justify-center">
                <div className="flex flex-col items-center">
                  <div className="bg-[var(--button-primary)] p-3 rounded-full text-white mb-4">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg text-[var(--text-black)] mb-2">Adres</h3>
                    <p className="text-[var(--text-gray)]">
                      Marszałka Józefa Piłsudskiego 31C<br />
                      58-160 Świebodzice
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-[var(--button-primary)] p-3 rounded-full text-white mb-4">
                    <FaPhone size={24} />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg text-[var(--text-black)] mb-2">Telefon</h3>
                    <a href="tel:+48123456789" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                      +48 530 190 880
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-[var(--button-primary)] p-3 rounded-full text-white mb-4">
                    <FaEnvelope size={24} />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg text-[var(--text-black)] mb-2">Email</h3>
                    <a href="mailto:kontakt@flatscout.pl" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                      biuro@towarzystwomieszkaniowe.pl
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;