import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import QuoteCalculator from './components/QuoteCalculator';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-body bg-surface text-on-surface">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <QuoteCalculator />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
