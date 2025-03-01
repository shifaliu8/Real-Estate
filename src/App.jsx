import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Getstarted from './components/Getstarted/Getstarted';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div>
        <div className='white-gradient'>
      <Header/>
        <Hero/>
    </div>
    <Companies/>
    <Residencies/> 
    <Value/>   
    <Getstarted/>
    <Footer/> 
    </div>
    </div>
  );
}

export default App;
