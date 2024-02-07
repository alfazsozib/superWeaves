import Banner from './components/Banner';
import Hero from './components/Hero';
import Meta from './components/Meta';
import ThirdSection from './components/ThirdSection';


function App() {
  return (
    <>
    <div className="App max-w-[1200px] mx-auto bg-red-300">
      <Hero/>
      <Meta/>
    </div>
    <ThirdSection />
    </>
  );
}

export default App;
