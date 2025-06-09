/** @format */

import { Oswald, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'SD Pneumatics',
  description:
    'SD Pneumatics is a leading provider of industrial gas solutions, offering a range of oxygen and nitrogen generators for various industries.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='description' content={metadata.description} />
        <meta
          name='keywords'
          content='oxygen generators, nitrogen generators, industrial gas solutions'
        />
        <meta name='author' content='SD Pneumatics' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{metadata.title}</title>
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://sdpneumatics.in' />
        {/* <meta property='og:image' content='https://yourwebsite.com/image.jpg' /> */}
      </head>
      <body className={` ${poppins.variable} ${oswald.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-H27T8X8CB6'
          strategy='afterInteractive'
        />
        <Script id='gtag-init' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H27T8X8CB6');
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
