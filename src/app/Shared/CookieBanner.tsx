'use client';

import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookiePreferences({
      necessary: true,
      analytics: true,
      marketing: true
    });
    saveCookiePreferences({
      necessary: true,
      analytics: true,
      marketing: true
    });
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    setCookiePreferences({
      necessary: true,
      analytics: false,
      marketing: false
    });
    saveCookiePreferences({
      necessary: true,
      analytics: false,
      marketing: false
    });
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(cookiePreferences);
    setShowBanner(false);
  };

  const saveCookiePreferences = (preferences: typeof cookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
  };

  const handleCheckboxChange = (type: keyof typeof cookiePreferences) => {
    if (type === 'necessary') return;
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="max-w-2xl mx-auto bg-[var(--background-base)] rounded-lg shadow-lg overflow-hidden">
        {!showCustomize ? (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[var(--text-black)] mb-4">Ustawienia plików cookie</h2>
            <p className="text-[var(--text-gray)] mb-6">
              Używamy plików cookie, aby poprawić jakość przeglądania. Kontynuując korzystanie z naszej
              strony, zgadzasz się na naszą <a href="/polityka-prywatnosci" className="text-[var(--button-primary)] hover:underline">Politykę Prywatności</a>.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-end sm:flex-wrap gap-3">
              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto order-first sm:order-last px-6 py-3 sm:py-2 bg-[var(--button-primary)] text-[var(--background-base)] rounded-lg hover:bg-[var(--button-hover)] transition-colors"
              >
                Akceptuj wszystkie
              </button>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setShowCustomize(true)}
                  className="flex-1 sm:flex-initial px-4 sm:px-6 py-3 sm:py-2 border border-[var(--text-light-gray)] rounded-lg text-[var(--text-gray)] hover:bg-[var(--background-secondary)] transition-colors"
                >
                  Dostosuj
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 sm:flex-initial px-4 sm:px-6 py-3 sm:py-2 border border-[var(--text-light-gray)] rounded-lg text-[var(--text-gray)] hover:bg-[var(--background-secondary)] transition-colors"
                >
                  Odrzuć wszystkie
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[var(--text-black)] mb-4">Ustawienia plików cookie</h2>
            <p className="text-[var(--text-gray)] mb-6">
              Używamy plików cookie, aby poprawić jakość przeglądania. Kontynuując korzystanie z naszej
              strony, zgadzasz się na naszą <a href="/polityka-cookie" className="text-[var(--button-primary)] hover:underline">Politykę Cookie</a>.
            </p>
            
            <div className="mb-4 flex items-center justify-between p-4 bg-[var(--background-secondary)] rounded-lg">
              <div>
                <h3 className="font-semibold text-[var(--text-black)]">Niezbędne pliki cookie</h3>
                <p className="text-sm text-[var(--text-gray)]">Wymagane do prawidłowego funkcjonowania strony</p>
              </div>
              <div className="relative">
                <input 
                  type="checkbox" 
                  checked={cookiePreferences.necessary} 
                  disabled 
                  className="h-5 w-5 text-[var(--button-primary)] rounded border-[var(--text-light-gray)] focus:ring-[var(--button-primary)]"
                />
              </div>
            </div>
            
            <div className="mb-4 flex items-center justify-between p-4 bg-[var(--background-secondary)] rounded-lg">
              <div>
                <h3 className="font-semibold text-[var(--text-black)]">Analityczne pliki cookie</h3>
                <p className="text-sm text-[var(--text-gray)]">Pomagają nam ulepszyć naszą stronę</p>
              </div>
              <div className="relative">
                <input 
                  type="checkbox" 
                  checked={cookiePreferences.analytics} 
                  onChange={() => handleCheckboxChange('analytics')}
                  className="h-5 w-5 text-[var(--button-primary)] rounded border-[var(--text-light-gray)] focus:ring-[var(--button-primary)]"
                />
              </div>
            </div>
            
            <div className="mb-6 flex items-center justify-between p-4 bg-[var(--background-secondary)] rounded-lg">
              <div>
                <h3 className="font-semibold text-[var(--text-black)]">Marketingowe pliki cookie</h3>
                <p className="text-sm text-[var(--text-gray)]">Używane do reklam targetowanych</p>
              </div>
              <div className="relative">
                <input 
                  type="checkbox" 
                  checked={cookiePreferences.marketing} 
                  onChange={() => handleCheckboxChange('marketing')}
                  className="h-5 w-5 text-[var(--button-primary)] rounded border-[var(--text-light-gray)] focus:ring-[var(--button-primary)]"
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 bg-[var(--button-primary)] text-[var(--background-base)] rounded-lg hover:bg-[var(--button-hover)] transition-colors"
              >
                Zapisz preferencje
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;