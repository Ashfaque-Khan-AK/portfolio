import React from 'react';

const Header = () => {
  return (
    <nav className="fixed left-0 top-0 right-0 z-[100] bg-white/70 backdrop-blur-[12px] transition-all duration-200 dark:bg-[rgba(21,23,24,0.7)] dark:text-[#ecedee]">
      <div className="px-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative flex py-[6px] justify-center items-center border-b border-[rgba(2,23,53,0.1)] transition-all duration-200 dark:border-[rgba(223,243,253,0.1)]">
            <a 
              href="/" 
              aria-current="page" 
              className="absolute left-0 z-[102] ml-[-16px] py-[6px] px-4 text-xl font-medium  transition-colors"
              cursor-ix="true"
            >
              <div>Ashfaque Ali</div>
              
            </a>
            <div className="flex">
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
            <a 
              href="#project-request" 
              className="absolute right-0 z-[102] mr-[-20px] flex py-2 px-5 items-center text-[#006adc] text-base font-medium dark:text-[#54a4eb] hover:opacity-80 transition-opacity"
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
      </div>
    </nav>
  );
};

export default Header;