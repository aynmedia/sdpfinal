/** @format */

import Hero from './components/hero/hero';
import Calltoaction from './components/calltoaction/calltoaction';
import HomeAbout from './components/homeAbout/homeAbout';
import HomeProducts from './components/homeProducts/homeProducts';
import { Leading } from './components/leading/leading';
import Presence from './components/presence/presence';
import LatestPostsWidget from './components/recentblogs/reacentblogs';
import Herosection from './components/herosection/herosection';

export default function Home() {
  return (
    <>
      <Herosection />
      {/* <Hero /> */}
      <Calltoaction />
      <Leading />
      <HomeAbout />
      <HomeProducts />
      <Presence />
      <LatestPostsWidget />
    </>
  );
}
