import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Script from 'next/script';

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
      <body>
        {/* Facebook Pixel Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '702613076172667');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=''
            src="https://www.facebook.com/tr?id=702613076172667&ev=PageView&noscript=1"
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
