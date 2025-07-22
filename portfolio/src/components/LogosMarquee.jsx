
import { motion } from 'framer-motion';

const LogosMarquee = () => {
  // Your skills data
  const skills = [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Express",
    "Tailwind CSS",
    "Framer Motion",
    "GraphQL",
    "Python",
    "Django",
    "PHP",
    "Laravel",
    "C#",
    ".NET",
    "AWS",
    "Docker"
  ];

  return (
    <>
      {/* Global styles */}
      <style jsx global>{`
        @keyframes marquee-horizontal {
          from {
            transform: translateX(0) translateZ(0);
          }
          to {
            transform: translateX(-100%) translateZ(0);
          }
        }
        .marquee-row {
          animation: marquee-horizontal 40s linear infinite;
        }
        @media (max-width: 768px) {
          .marquee-row {
            animation-duration: 30s;
          }
        }
      `}</style>

      {/* Skills section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="home-hero-skills mx-auto mb-10 md:mb-[54px] w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex w-full items-center overflow-hidden whitespace-nowrap rounded-xl bg-gray-50/50 p-4 font-medium backdrop-blur-sm">
          <div className="mr-4 flex items-center justify-center whitespace-nowrap text-lg font-semibold text-gray-600 md:mr-6 md:text-xl">
            Tech Stack
          </div>

          <div className="home-hero-carousel-wrap relative flex flex-1 overflow-hidden py-2">
            {/* Gradient overlay */}
            <div className="home-hero-skills-overlay absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-white/0"></div>
            <div className="home-hero-skills-overlay absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-white/0"></div>

            {/* First row of skills */}
            <div className="marquee-row flex flex-shrink-0 items-center">
              {skills.map((skill, index) => (
                <div 
                  key={`first-${index}`} 
                  className="mx-3 flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm md:mx-4 md:text-base"
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Second row of skills (duplicate for seamless looping) */}
            <div className="marquee-row flex flex-shrink-0 items-center">
              {skills.map((skill, index) => (
                <div 
                  key={`second-${index}`} 
                  className="mx-3 flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm md:mx-4 md:text-base"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LogosMarquee;