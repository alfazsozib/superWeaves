import Banner from './components/Banner';
import Hero from './components/Hero';
import Meta from './components/Meta';
import ThirdSection from './components/ThirdSection';


function App() {
  return (
    <>
    <div className="App max-w-[1880px] mx-[300px]">
      <Hero/>
      <Meta/>
    </div>
    <ThirdSection />
    </>
  );
}

export default App;
