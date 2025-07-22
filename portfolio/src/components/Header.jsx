import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 right-0 z-[100] bg-white/70 backdrop-blur-[12px] transition-all duration-200 dark:bg-[rgba(21,23,24,0.7)] dark:text-[#ecedee]">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative flex h-16 items-center justify-between border-b border-[rgba(2,23,53,0.1)] transition-all duration-200 dark:border-[rgba(223,243,253,0.1)]">
            {/* Logo */}
            <a 
              href="/" 
              aria-current="page" 
              className="z-[102] py-2 text-xl font-medium transition-colors"
              cursor-ix="true"
            >
              <div>Ashfaque Ali</div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <a 
                href="/#work" 
                className="relative z-[102] py-2 px-[14px] text-[#687076] hover:text-[#151718] dark:text-[#9ba1a6] dark:hover:text-[#ecedee] transition-colors"
                cursor-ix="true"
              >
                Work
              </a>
              <a 
                href="/#benefits" 
                className="relative z-[102] py-2 px-[14px] text-[#687076] hover:text-[#151718] dark:text-[#9ba1a6] dark:hover:text-[#ecedee] transition-colors"
                cursor-ix="true"
              >
                Benefits
              </a>
              <a 
                href="/#process" 
                className="relative z-[102] py-2 px-[14px] text-[#687076] hover:text-[#151718] dark:text-[#9ba1a6] dark:hover:text-[#ecedee] transition-colors"
                cursor-ix="true"
              >
                Process
              </a>
              <a 
                href="#about" 
                className="relative z-[102] py-2 px-[14px] text-[#687076] hover:text-[#151718] dark:text-[#9ba1a6] dark:hover:text-[#ecedee] transition-colors"
                cursor-ix="true"
              >
                About
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-[102] p-2 rounded-md text-[#687076] hover:text-[#151718] focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              cursor-ix="true"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Project Request Button - Desktop */}
            <a 
              href="#project-request" 
              className="hidden md:flex z-[102] py-2 px-5 items-center text-[#006adc] text-base font-medium dark:text-[#54a4eb] hover:opacity-80 transition-opacity"
              cursor-ix="true"
            >
              Project request
              <span className="ml-1.5">
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.566.434 6.131 5 1.566 9.566.434 8.434 3.869 5 .434 1.566z" fill="currentColor"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-[rgba(21,23,24,0.95)] backdrop-blur-[12px] z-[101] border-b border-[rgba(2,23,53,0.1)] dark:border-[rgba(223,243,253,0.1)]">
              <div className="flex flex-col px-4 py-2">
                <a 
                  href="/#work" 
                  className="py-3 px-4 text-[#687076] hover:text-[#151718] dark:text-[#9ba1a6] dark:hover:text-[#ecedee] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  cursor-ix="true"
                >
                  Work
                </a>
                <a 
                  href="/#benefits" 
                  className="py-3 px-4 text-[#687076] hover:text-[#151718] dark:text-[#9ba1a6] dark:hover:text-[#ecedee] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  cursor-ix="true"
                >
                  Benefits
                </a>
                <a 
                  href="/#process" 
                  className="py-3 px-4 text-[#687076] hover:text-[#151718] dark:text-[#9ba1a6] dark:hover:text-[#ecedee] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  cursor-ix="true"
                >
                  Process
                </a>
                <a 
                  href="#about" 
                  className="py-3 px-4 text-[#687076] hover:text-[#151718] dark:text-[#9ba1a6] dark:hover:text-[#ecedee] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  cursor-ix="true"
                >
                  About
                </a>
                <a 
                  href="#project-request" 
                  className="py-3 px-4 text-[#006adc] font-medium dark:text-[#54a4eb] hover:opacity-80 transition-opacity flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                  cursor-ix="true"
                >
                  Project request
                  <span className="ml-1.5">
                    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.566.434 6.131 5 1.566 9.566.434 8.434 3.869 5 .434 1.566z" fill="currentColor"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;