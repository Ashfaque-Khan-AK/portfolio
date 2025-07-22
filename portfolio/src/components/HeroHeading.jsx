import React from 'react';
import { motion } from 'framer-motion';
import LogosMarquee from './LogosMarquee';

const HeroHeader = () => {
  return (
    <main className="font-['Inter_Display'] text-[#11181c] overflow-x-hidden">
      {/* Global styles */}
      <style jsx global>{`
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          box-sizing: border-box;
        }
        body {
          margin: 0;
          min-height: 100%;
          background-color: #fff;
          font-family: 'Inter Display', sans-serif;
          color: #11181c;
          font-size: 16px;
          line-height: 1.2;
          overflow-x: hidden;
        }
      `}</style>

      <header className="home-hero relative z-[2] flex min-h-[580px] flex-col items-center justify-center pb-[45px] pt-[60px] text-center md:h-[80vh]">
        <div className="w-full px-10 md:container">
          <div className="flex flex-col items-center">
            {/* Heading with gradient animation - added transform-style: preserve-3d */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, rotateZ: 0 }} // Explicitly set rotateZ to 0
              transition={{ 
                delay: 0.1, 
                duration: 0.4,
                rotateZ: { duration: 0 } // Ensure no rotation animation
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="home-hero-heading-wrap mb-[16px]"
            >
              <motion.h1
                className="home-hero-heading bg-gradient-to-r from-[#0f3058] via-[#006adc] to-[#11181c] bg-[length:300%_100%] bg-clip-text text-[95px] font-normal leading-none tracking-[-0.035em] text-transparent md:max-w-[830px] md:text-[115px] lg:text-[124px]"
                initial={{ backgroundPosition: '100% 0%' }}
                animate={{ backgroundPosition: '0% 0%', rotateZ: 0 }} // Explicit no rotation
                transition={{ 
                  delay: 0.5, 
                  duration: 1.8, 
                  ease: 'easeOut',
                  rotateZ: { duration: 0 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                Your Vision, Our Code.
              </motion.h1>
            </motion.div>

            {/* Subheading with fade animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, rotateZ: 0 }}
              transition={{ 
                delay: 0.2, 
                duration: 0.4,
                rotateZ: { duration: 0 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="home-hero-subheading mb-[2px] max-w-[560px] text-[20px] leading-[1.4] tracking-[0.01em] text-[#687076] md:max-w-[610px] md:text-[22px] lg:text-[24px]" 
            >
              <p>
                Transforming ideas into stunning, high-performance websites with expert MERN, PHP, and C# development for design-driven companies.
              </p>
            </motion.div>

            {/* CTA button with fade animation */}
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, rotateZ: 0 }}
              transition={{ 
                delay: 0.3, 
                duration: 0.4,
                rotateZ: { duration: 0 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
              href="#project-request"
              cursor-ix="true"
              className="cta flex items-center rounded-full px-5 py-2 text-[20px] font-medium text-[#006adc] transition-colors hover:opacity-80"
            >
              <span>Start a project request</span>
              <span className="ml-1.5">
                <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.293 1.707 1.707.293 7.414 6l-5.707 5.707-1.414-1.414L4.585 6z" fill="currentColor"/>
                </svg>
              </span>
            </motion.a>
          </div>
        </div>
      </header>
      <LogosMarquee/>
    </main>
  );
};

export default HeroHeader;