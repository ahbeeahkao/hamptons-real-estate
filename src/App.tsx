import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Residences from './components/Residences';
import Properties from './components/Properties';
import WhyChoose from './components/WhyChoose';
import HamptonsDifference from './components/HamptonsDifference';
import Testimonials from './components/Testimonials';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-charcoal-950">
      <Navigation />
      <Hero />
      <TrustBar />
      <Residences />
      <Properties />
      <WhyChoose />
      <HamptonsDifference />
      <Testimonials />
      <Enquiry />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
