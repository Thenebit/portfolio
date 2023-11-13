import React from 'react'
import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Home />
      <Skill />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
