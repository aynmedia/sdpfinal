/** @format */

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className='absolute inset-0 w-full h-screen'>
      <Particles
        className='w-full h-full'
        id='hero-particles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onHover: {
                enable: true,
                mode: 'grab',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.3,
                  color: '#ffffff',
                  width: 1,
                },
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            move: {
              attract: {
                enable: true,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: {
                enable: true,
                minimumValue: 2,
              },
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
