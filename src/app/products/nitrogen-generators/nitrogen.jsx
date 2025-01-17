/** @format */

'use client';
import React, { useEffect, useState } from 'react';

const CloudBackground = () => {
  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden'>
      <div className='absolute inset-0'>
        <div className='smoke-layer-1' />
        <div className='smoke-layer-2' />
        <div className='smoke-layer-3' />
      </div>
    </div>
  );
};

const SmokeEffect = () => {
  const [smokeParticles, setSmokeParticles] = useState([]);

  const createSmokeParticle = () => {
    const particle = {
      id: Math.random(),
      left: 40 + Math.random() * 20, // More concentrated in the middle
      size: Math.random() * 100 + 50, // Even larger size for more visible smoke
      duration: Math.random() * 8 + 6, // Slightly faster for better visibility
      delay: Math.random(),
      opacity: Math.random() * 0.8 + 0.4, // Higher opacity
      spread: Math.random() * 60 - 30, // Controlled spread
    };

    setSmokeParticles((prev) => [...prev, particle]);

    setTimeout(() => {
      setSmokeParticles((prev) => prev.filter((p) => p.id !== particle.id));
    }, (particle.duration + particle.delay) * 1000);
  };

  useEffect(() => {
    const interval = setInterval(createSmokeParticle, 200); // More frequent particles
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CloudBackground />
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        {smokeParticles.map((particle) => (
          <div
            key={particle.id}
            className='absolute rounded-full blur-xl'
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `smokeRise ${particle.duration}s ease-out ${particle.delay}s`,
              bottom: '-50px',
              transform: `translateX(${particle.spread}px)`,
              background:
                'radial-gradient(circle at center, rgba(75, 75, 75, 0.8) 0%, rgba(100, 100, 100, 0.4) 60%, transparent 100%)',
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes smokeRise {
          0% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-50vh) scale(1.5) rotate(120deg);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) scale(2) rotate(240deg);
            opacity: 0;
          }
        }

        .smoke-layer-1 {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.3;
          filter: contrast(150%) brightness(80%);
          animation: smokeDrift1 60s linear infinite;
          mix-blend-mode: multiply;
        }

        .smoke-layer-2 {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.25;
          filter: contrast(180%) brightness(75%);
          animation: smokeDrift2 45s linear infinite;
          mix-blend-mode: multiply;
        }

        .smoke-layer-3 {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.2;
          filter: contrast(200%) brightness(70%);
          animation: smokeDrift3 30s linear infinite;
          mix-blend-mode: multiply;
        }

        @keyframes smokeDrift1 {
          from {
            transform: translate(-10%, -10%) scale(1.1);
          }
          to {
            transform: translate(10%, -20%) scale(1.2);
          }
        }

        @keyframes smokeDrift2 {
          from {
            transform: translate(10%, -5%) scale(1.05);
          }
          to {
            transform: translate(-10%, -15%) scale(1.15);
          }
        }

        @keyframes smokeDrift3 {
          from {
            transform: translate(-5%, 0%) scale(1);
          }
          to {
            transform: translate(5%, -10%) scale(1.1);
          }
        }
      `}</style>
    </>
  );
};

export default SmokeEffect;
