import React from 'react';
import Feature from './components/feature/Feature';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import ShowCase from './components/ShowCase/ShowCase';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <ShowCase />
    <Feature/>
    <Footer />
    </>
    
    
  );
}

export default App;
