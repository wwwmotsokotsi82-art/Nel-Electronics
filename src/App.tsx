import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Sell from './pages/Sell';
import Repairs from './pages/Repairs';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-bg font-sans text-white selection:bg-blue-500/30">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/repairs" element={<Repairs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
