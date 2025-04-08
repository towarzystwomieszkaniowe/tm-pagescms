import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import ContactForm from './Shared/ContactForm';
import CookieBanner from './Shared/CookieBanner';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Towarzystwo Mieszkaniowe - Znajdź sprzedającego nieruchomość",
  description: "Towarzystwo Mieszkaniowe - Znajdź sprzedającego nieruchomość",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        {/* Google Tag Manager – klasyczny kod */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KDPWS2HX');
          `}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) – musi być zaraz po <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDPWS2HX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        {children}
        <ContactForm />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}