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
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KDPWS2HX"
        />
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZVYFV6XNTE');
          `}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased`}
      >
        {/* Google Tag Manager noscript (dla przeglądarek bez JS) */}
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