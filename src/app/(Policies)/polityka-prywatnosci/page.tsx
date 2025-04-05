import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <main className="w-full py-16 md:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Polityka Prywatności
          </h1>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
        </header>

        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-black)] mb-4">I Informacje ogólne</h2>
            <p className="text-[var(--text-gray)] mb-4">
              Niniejsza Polityka Prywatności określa sposób pozyskiwania, przetwarzania oraz zabezpieczania danych osobowych w rozumieniu ustawy o ochronie danych osobowych z dnia 29 sierpnia 1997 roku (Dz.U. Nr 133, poz. 883 z póź. zm.) oraz ustawą o świadczeniu usług drogą elektroniczną z dnia 18 lipca 2002 r. (Dz.U. Nr 144, poz. 1204 z póź. zm.) oraz z art. 13 ust. 1 i ust. 2 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO)
            </p>
            <p className="text-[var(--text-gray)]">
              Właścicielem strony internetowej www.towarzystwomieszkaniowe.com oraz administratorem danych osobowych jest firma SEZARO Sp. z o.o., z siedzibą w Świebodzicach, 58-160, przy ul. Piłsudskiego 31c, , NIP 8842810985, REGON 521143851, telefon: 530 235 962, wpisana do Krajowego Rejestru Sądowego pod numerem 0000949519
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-black)] mb-4">II Dane osobowe</h2>
            <ul className="list-disc pl-6 text-[var(--text-gray)] space-y-2">
              <li>Serwis zbiera informacje podane dobrowolnie przez użytkownika.</li>
              <li>Dane osobowe są pozyskiwane podczas wypełniania formularza.</li>
              <li>Dane osobowe są wykorzystywane wyłącznie w celu wysyłania newslettera, kontaktu oraz informacji odnośnie usług na które zapisał się użytkownik o ile wyraził na to zgodę.</li>
              <li>Zawartość strony internetowej można przeglądać bez podawania jakichkolwiek danych osobowych.</li>
              <li>Każda osoba, która udostępniła swoje dane osobowe ma prawo do dostępu do ich treści oraz możliwość ich poprawiania, uaktualniania, uzupełniania, jak i również żądania zaprzestania przetwarzania danych osobowych oraz wniesienia sprzeciwu wobec przetwarzania danych osobowych. Wymienione czynności można dokonać poprzez wysłanie stosownego oświadczenia na adres email: kontakt@odkupimymieszkanie.com</li>
              <li>Pozyskane przez administratora dane osobowe są przechowywane, przetwarzane i chronione zgodnie z obowiązującymi przepisami prawa.</li>
            </ul>
            <p className="text-[var(--text-gray)] mt-4">Administrator chroni zgromadzone dane osobowe korzystając z następujących środków:</p>
            <ul className="list-disc pl-10 text-[var(--text-gray)] space-y-2 mt-2">
              <li>szyfrowanie danych służących do zapisu do newslettera</li>
              <li>zabezpieczenie zbioru danych przed nieuprawnionym dostępem</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-black)] mb-4">III Informacja o plikach cookies.</h2>
            <ul className="list-disc pl-6 text-[var(--text-gray)] space-y-2">
              <li>Serwis korzysta z plików cookies.</li>
              <li>Pliki cookies (tzw. &quot;ciasteczka&quot;) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.</li>
              <li>Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.</li>
              <li>Pliki cookies wykorzystywane są w następujących celach:</li>
            </ul>
            <ul className="list-disc pl-10 text-[var(--text-gray)] space-y-2 mt-2">
              <li>tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;</li>
              <li>utrzymania sesji Użytkownika Serwisu (po zalogowaniu), dzięki której Użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;</li>
              <li>określania profilu użytkownika w celu wyświetlania mu dopasowanych materiałów w sieciach reklamowych, w szczególności sieć Google.</li>
            </ul>
            <p className="text-[var(--text-gray)] mt-4">W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: &quot;sesyjne&quot; (session cookies) oraz &quot;stałe&quot; (persistent cookies). Cookies &quot;sesyjne&quot; są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). &quot;Stałe&quot; pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.</p>
            <p className="text-[var(--text-gray)] mt-4">Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.</p>
            <p className="text-[var(--text-gray)] mt-4">Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.</p>
            <p className="text-[var(--text-gray)] mt-4">Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu i wykorzystywane mogą być również przez współpracujących z operatorem Serwisu reklamodawców oraz partnerów.</p>
            <p className="text-[var(--text-gray)] mt-4">Zalecamy przeczytanie polityki ochrony prywatności tych firm, aby poznać zasady korzystania z plików cookies wykorzystywane w statystykach: Polityka ochrony prywatności Google Analytics.</p>
            <p className="text-[var(--text-gray)] mt-4">Pliki cookies mogą być wykorzystane przez sieci reklamowe, w szczególności sieć Google, do wyświetlenia reklam dopasowanych do sposobu, w jaki użytkownik korzysta z Serwisu. W tym celu mogą zachować informację o ścieżce nawigacji użytkownika lub czasie pozostawania na danej stronie.</p>
            <p className="text-[var(--text-gray)] mt-4">W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: <a href="https://www.google.com/ads/preferences/" className="text-[var(--button-primary)] hover:underline">https://www.google.com/ads/preferences/</a></p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-black)] mb-4">IV Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</h2>
            <p className="text-[var(--text-gray)] mb-4">Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www.</p>
            <p className="text-[var(--text-gray)] mb-4">W celu zarządzania ustawieniami cookies wybierz z listy poniżej przeglądarkę internetową/ system i postępuj zgodnie z instrukcjami:</p>
            <ul className="list-disc pl-10 text-[var(--text-gray)] space-y-2">
              <li><a href="http://windows.microsoft.com/pl-pl/windows7/block-enable-or-allow-cookies" className="text-[var(--button-primary)] hover:underline">Internet Explorer</a></li>
              <li><a href="https://support.google.com/chrome/answer/95647?hl=pl" className="text-[var(--button-primary)] hover:underline">Chrome</a></li>
              <li><a href="http://support.apple.com/kb/PH5042" className="text-[var(--button-primary)] hover:underline">Safari</a></li>
              <li><a href="http://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%82%C4%85czanie%20obs%C5%82ugi%20ciasteczek" className="text-[var(--button-primary)] hover:underline">Firefox</a></li>
              <li><a href="http://help.opera.com/Windows/12.10/pl/cookies.html" className="text-[var(--button-primary)] hover:underline">Opera</a></li>
              <li><a href="https://support.google.com/chrome/answer/95647?hl=pl" className="text-[var(--button-primary)] hover:underline">Android</a></li>
              <li><a href="http://support.apple.com/kb/HT1677?viewlocale=pl_PL" className="text-[var(--button-primary)] hover:underline">Safari (iOS)</a></li>
              <li><a href="http://www.windowsphone.com/pl-pl/how-to/wp7/web/changing-privacy-and-other-browser-settings" className="text-[var(--button-primary)] hover:underline">Windows Phone</a></li>
              <li><a href="http://docs.blackberry.com/en/smartphone_users/deliverables/32004/Turn_off_cookies_in_the_browser_60_1072866_11.jsp" className="text-[var(--button-primary)] hover:underline">Blackberry</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-black)] mb-4">V Udostępnienie danych</h2>
            <ul className="list-disc pl-6 text-[var(--text-gray)] space-y-2">
              <li>Dane podlegają udostępnieniu podmiotom zewnętrznym wyłącznie w granicach prawnie dozwolonych.</li>
              <li>Operator może mieć obowiązek udzielania informacji zebranych przez Serwis upoważnionym organom na podstawie zgodnych z prawem żądań w zakresie wynikającym z żądania.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-black)] mb-4">VI Postanowienia końcowe</h2>
            <ul className="list-disc pl-6 text-[var(--text-gray)] space-y-2">
              <li>Sprzedający ma prawo do zmian w niniejszej Polityce Prywatności. Osoby udostępniające swoje dane osobowe obowiązuje aktualnie obowiązująca wersja Polityki Prywatności, dostępna na stronie www.bibliataniegospania.pl/politykaprywatnosci</li>
              <li>W sprawach nieuregulowanych niniejszą Polityką Prywatności stosuje się odpowiednio zapisy Regulaminu strony internetowej www.odkupimymieszkanie.com oraz obowiązujące przepisy prawa polskiego.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--text-black)] mb-4">REGULAMIN</h2>
            <ol className="list-decimal pl-6 text-[var(--text-gray)] space-y-4">
              <li>
                <p className="text-[var(--text-gray)]">Właścicielem strony internetowej, działającej pod adresem internetowym:</p>
                <p className="text-[var(--text-gray)] mt-2">www.towarzystwomieszkaniowe.pl jest firma SEZARO Sp. z o.o. (zwana dalej Właścicielem) z siedzibą w Świebodzicach 58-160, Piłsudskiego 31c, NIP 8842810985, REGON 521143851, telefon: 530 235 962, wpisana do Krajowego Rejestru Sądowego pod numerem 0000949519.</p>
              </li>
              <li>
                <p className="text-[var(--text-gray)]">Niniejszy regulamin (zwany dalej &quot;Regulaminem&quot;) określa zasady korzystania ze strony internetowej www.odkupimymieszkanie.com zwanej dalej &quot;Stroną internetową&quot;.</p>
              </li>
              <li>
                <p className="text-[var(--text-gray)]">Zapisy niniejszego regulaminu obowiązują każdą osobę korzystającą ze Strony internetowej.</p>
              </li>
              <li>
                <p className="text-[var(--text-gray)]">Strona internetowa ma charakter informacyjny oraz edukacyjny</p>
              </li>
              <li>
                <p className="text-[var(--text-gray)]">Dane osobowe osób korzystających ze Strony internetowej są gromadzone, wykorzystywane i chronione zgodnie z ustawą z dnia 29 sierpnia 1997 roku o ochronie danych osobowych (Dz.U. Nr 133, poz. 833 z późn. zm.).</p>
              </li>
              <li>
                <p className="text-[var(--text-gray)]">Zakres gromadzenia, wykorzystywania oraz sposób ochrony danych osobowych określa Polityka Prywatności.</p>
              </li>
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;