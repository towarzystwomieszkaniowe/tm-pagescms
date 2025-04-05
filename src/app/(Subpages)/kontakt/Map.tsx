'use client';
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Map = () => {
  return (
    <section className="w-full py-8 md:py-16 bg-[var(--background-secondary)] min-h-[calc(100vh-400px)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch h-full">
          {/* Contact Information */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg h-full flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-black)] mb-12">Dane kontaktowe</h2>
              
              <div className="space-y-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--button-primary)] p-3 rounded-full text-white">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--text-black)] mb-2">Adres</h3>
                    <p className="text-[var(--text-gray)]">
                      Marszałka Józefa Piłsudskiego 31C<br />
                      58-160 Świebodzice
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--button-primary)] p-3 rounded-full text-white">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--text-black)] mb-2">Telefon</h3>
                    <a href="tel:+48123456789" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                      +48 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--button-primary)] p-3 rounded-full text-white">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--text-black)] mb-2">Email</h3>
                    <a href="mailto:kontakt@flatscout.pl" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors">
                      kontakt@flatscout.pl
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-full min-h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.556047942952!2d16.31749738936804!3d50.85790485367011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e54bbfc071b01%3A0x73be2f0ad7404a4b!2sMarsza%C5%82ka%20J%C3%B3zefa%20Pi%C5%82sudskiego%2031C%2C%2058-160%20%C5%9Awiebodzice!5e0!3m2!1sen!2spl!4v1740832373653!5m2!1sen!2spl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;