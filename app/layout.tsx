import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], 
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Financial Astrology Webinar - Learn Market Timing Secrets',
  description:
    'Join our exclusive webinar to learn how top 1% traders use financial astrology to predict market moves. Unlock proven strategies and cosmic timing secrets.',
  keywords:
    'financial astrology, stock market trading, market timing, webinar, trading strategies',
  openGraph: {
    title: 'Financial Astrology Webinar - Learn Market Timing Secrets',
    description:
      'Join our exclusive webinar to learn how top 1% traders use financial astrology to predict market moves.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
