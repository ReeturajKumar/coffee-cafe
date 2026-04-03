import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PremiumBeans from './components/PremiumBeans';
import StoreStats from './components/StoreStats';
import CoffeeInsights from './components/CoffeeInsights';
import OurCoffee from './components/OurCoffee';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative min-h-screen w-full bg-forest overflow-x-hidden antialiased">
      <Navbar />
      <Hero />
      <TrustBar />
      <OurCoffee />
      <PremiumBeans />
      <StoreStats />
      <CoffeeInsights />
      <Footer />
    </main>
  );
}

export default App;
