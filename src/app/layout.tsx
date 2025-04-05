import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <ContactForm />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}