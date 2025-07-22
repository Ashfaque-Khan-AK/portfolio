
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import HeroHeading from './components/HeroHeading';

function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter_Display'] text-[#11181c] text-base leading-[1.2]">
      <CustomCursor />
      <Header />
      <HeroHeading/>
    </div>
  );
}

export default App;