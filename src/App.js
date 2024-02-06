import Hero from './components/Hero';
import Meta from './components/Meta';
import ThirdSection from './components/ThirdSection';


function App() {
  return (
    <div className="App max-w-[1880px] mx-[240px] md:mx-[150px]">
      <Hero/>
      <Meta/>
      <ThirdSection />
    </div>
  );
}

export default App;
