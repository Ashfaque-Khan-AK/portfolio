import React from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Navbar from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter_Display'] text-[#11181c] text-base leading-[1.2]">
      <CustomCursor />
      <Navbar />
      {/* Other components would go here */}
    </div>
  );
}

export default App;