/** @format */
'use client';
import React, { useEffect, useState } from 'react';

const CloudBackground = () => {
  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden'>
      {/* Cloud layers */}
      <div className='absolute inset-0'>
        <div className='cloud-layer-1' />
        <div className='cloud-layer-2' />
        <div className='cloud-layer-3' />
      </div>
    </div>
  );
};

const OxygenBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  const createBubble = () => {
    const bubble = {
      id: Math.random(),
      left: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.6 + 0.2,
    };

    setBubbles((prev) => [...prev, bubble]);

    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== bubble.id));
    }, (bubble.duration + bubble.delay) * 1000);
  };

  useEffect(() => {
    const interval = setInterval(createBubble, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CloudBackground />
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className='absolute rounded-full bg-white/60 backdrop-blur-sm'
            style={{
              left: `${bubble.left}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              opacity: bubble.opacity,
              animation: `rise ${bubble.duration}s linear ${bubble.delay}s`,
              bottom: '-50px',
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes rise {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-50vh) rotate(180deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }

        .cloud-layer-1 {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.3;
          animation: drift1 60s linear infinite;
        }

        .cloud-layer-2 {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.2;
          animation: drift2 45s linear infinite;
        }

        .cloud-layer-3 {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.15;
          animation: drift3 30s linear infinite;
        }

        @keyframes drift1 {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(100%, 0);
          }
        }

        @keyframes drift2 {
          from {
            transform: translate(-100%, 0);
          }
          to {
            transform: translate(100%, 0);
          }
        }

        @keyframes drift3 {
          from {
            transform: translate(-50%, 0);
          }
          to {
            transform: translate(50%, 0);
          }
        }
      `}</style>
    </>
  );
};

export default OxygenBubbles;
