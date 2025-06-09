/** @format */

import Hero from './components/hero/hero';
import Calltoaction from './components/calltoaction/calltoaction';
import HomeAbout from './components/homeAbout/homeAbout';
import HomeProducts from './components/homeProducts/homeProducts';
import { Leading } from './components/leading/leading';
import Presence from './components/presence/presence';
import LatestPostsWidget from './components/recentblogs/reacentblogs';
import Herosection from './components/herosection/herosection';
import Services from './components/services/services';
import Awards from './components/awards/awards';
import Clients from './components/clients/clients';
import MarqueeText from './components/marquee/marquee';

export const metadata = {
  title: 'SD Pneumatics | Industrial Air Solutions & Compressors',
  description:
    'SD Pneumatics is a leading supplier of air compressors, gas generators, and pneumatic solutions for industries across India. Discover our innovative, energy-efficient products and services.',
  openGraph: {
    title: 'SD Pneumatics | Industrial Air Solutions & Compressors',
    description:
      'SD Pneumatics is a leading supplier of air compressors, gas generators, and pneumatic solutions for industries across India. Discover our innovative, energy-efficient products and services.',
    url: 'https://yourdomain.com/',
    siteName: 'SD Pneumatics',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'SD Pneumatics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Herosection />
      <MarqueeText />
      <Calltoaction />
      <Leading />
      <HomeAbout />
      <HomeProducts />
      <Presence />
      <Services />
      {/* <Awards /> */}
      <Clients />
      <LatestPostsWidget />
    </>
  );
}
