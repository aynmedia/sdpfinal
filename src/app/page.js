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
