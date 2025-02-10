/** @format */

import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeText = () => {
  return (
    <div>
      <h1>
        <Marquee
          autoFill
          gradient
          gradientColor='#06091B'
          className='h-24 bg-[#06091B] text-white'>
          <h1 className='text-3xl font-medium'>
            • Auto Drain Valves • Air Dryers • Air Receivers Tanks • Pressure
            Gauges • AMC for Compressor Air Dryers • All Make Air Compressor
            Spare Parts • Air Receiver Tank, LPG, CO2 Tank & Safety Valve
            Testing •
          </h1>
        </Marquee>
      </h1>
    </div>
  );
};

export default MarqueeText;
