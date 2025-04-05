'use client';

import { useState } from 'react';

interface FormProps {
  onSubmit?: (formData: FormData) => void;
}

export interface FormData {
  imie: string;
  nazwisko: string;
  email: string;
  rodzajNieruchomosci: string;
  telefon: string;
  lokalizacja: string;
  metraz: string;
  dodatkoweInfo: string;
  zgodaMarketing: boolean;
}

const Form = ({ onSubmit }: FormProps) => {
  const [formData, setFormData] = useState<FormData>({
    imie: '',
    nazwisko: '',
    email: '',
    rodzajNieruchomosci: 'Mieszkanie',
    telefon: '',
    lokalizacja: '',
    metraz: '',
    dodatkoweInfo: '',
    zgodaMarketing: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formularz wysłany:', formData);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 md:p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Wypełnij formularz kontaktowy</h3>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              name="imie"
              placeholder="Imię"
              value={formData.imie}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)] focus:border-transparent"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="nazwisko"
              placeholder="Nazwisko"
              value={formData.nazwisko}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)] focus:border-transparent"
              required
            />
          </div>
        </div>
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)] focus:border-transparent"
          required
        />
        
        <div>
          <label htmlFor="rodzajNieruchomosci" className="block text-xs font-medium text-[var(--text-gray)] mb-1">
            Rodzaj nieruchomości
          </label>
          <div className="relative">  
            <select
              id="rodzajNieruchomosci"
              name="rodzajNieruchomosci"
              value={formData.rodzajNieruchomosci}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)] focus:border-transparent text-gray-800 appearance-none pr-10"
              required
            >
            <option value="Mieszkanie">Mieszkanie</option>
            <option value="Dom">Dom</option>
            <option value="Grunt">Grunt</option>
            <option value="Udział">Udział</option>
            <option value="Inne">Inne</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <input
          type="tel"
          name="telefon"
          placeholder="Telefon"
          value={formData.telefon}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)] focus:border-transparent"
          required
        />
        
        <input
          type="text"
          name="lokalizacja"
          placeholder="Lokalizacja"
          value={formData.lokalizacja}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)] focus:border-transparent"
          required
        />
        
        <input
          type="text"
          name="metraz"
          placeholder="Metraż"
          value={formData.metraz}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)] focus:border-transparent"
          required
        />
        
        <textarea
          name="dodatkoweInfo"
          placeholder="Dodatkowe informacje np. stan nieruchomości, piętro, oczekiwana cena..."
          value={formData.dodatkoweInfo}
          onChange={handleChange}
          rows={2}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)] focus:border-transparent resize-none"
        />
        
        <div className="flex items-start">
          <input
            type="checkbox"
            id="zgodaMarketing"
            name="zgodaMarketing"
            checked={formData.zgodaMarketing}
            onChange={handleCheckboxChange}
            className="mt-1 h-4 w-4 text-[var(--button-primary)] focus:ring-[var(--button-primary)] border-gray-300 rounded"
            required
          />
          <label htmlFor="zgodaMarketing" className="ml-2 block text-xs text-[var(--text-gray)]">
            Wyrażam zgodę na przetwarzanie moich danych osobowych oraz otrzymywanie e-maili marketingowych.
            <a href="/polityka-prywatnosci" className="text-[var(--button-primary)] hover:text-[var(--button-hover)] ml-1">Zobacz Politykę Prywatności więcej informacji.</a>
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-[var(--button-primary)] hover:bg-[var(--button-hover)] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          Wyślij
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Form;