import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';
import { AuroraBackground } from './components/ui/AuroraBackgrounds/AuroraBackground';

function App() {
  return (
    <div className="relative z-10 bg-white text-black min-h-screen">
      <AuroraBackground />
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
