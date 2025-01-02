import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/providers/LanguageProvider';
import { PaymentProvider } from '@/providers/PaymentProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Cure Saathi - Affordable Care for Every Home',
    template: '%s | Cure Saathi'
  },
  description: 'Quality-tested generic medicines from trusted sources like Jana Oushadhi, making healthcare accessible to everyone.',
  keywords: ['generic medicines', 'affordable healthcare', 'Jana Oushadhi', 'medicine delivery'],
  openGraph: {
    title: 'Cure Saathi - Affordable Care for Every Home',
    description: 'Quality-tested generic medicines from trusted sources',
    type: 'website',
    locale: 'en_IN',
    url: 'https://curesaathi.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <PaymentProvider>
            {children}
          </PaymentProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}