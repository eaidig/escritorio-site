import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Artists from './components/Artists';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Artists />
      </main>
      <Footer />
    </div>
  );
}

export default App;