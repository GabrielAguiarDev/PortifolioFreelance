import './App.css';

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Home from './components/Home'
import Pricing from './components/Pricing'
import Services from './components/Services'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
