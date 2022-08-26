import React, { useEffect } from 'react'

// import Aos from "aos";
// import "aos/dist/aos.css"

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

  // useEffect(() => {
  //   Aos.init({ duration: 1000 });
  // })

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Pricing />
        <Gallery />
        <Contact />
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
