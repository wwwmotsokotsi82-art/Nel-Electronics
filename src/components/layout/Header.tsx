import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor, ShoppingBag, CreditCard, Wrench, Info, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Shop', href: '/shop', icon: ShoppingBag },
  { name: 'Sell Device', href: '/sell', icon: CreditCard },
  { name: 'Repairs', href: '/repairs', icon: Wrench },
  { name: 'About', href: '/about', icon: Info },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => setIsOpen(false), [location]);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled 
          ? "bg-[#0a0c10]/80 backdrop-blur-md border-white/10 py-3 shadow-2xl" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 w-8 h-8 rounded flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-105">
              <span className="text-white">N</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-white uppercase">Nel</span>
              <span className="text-[10px] font-black text-blue-500 tracking-[0.2em] uppercase">Electronics</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-xs font-bold uppercase tracking-widest transition-colors hover:text-white",
                  location.pathname === item.href ? "text-white border-b border-blue-500 pb-1" : "text-gray-400"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="bg-blue-600 text-white px-5 py-2 rounded text-xs font-bold uppercase tracking-tighter hover:bg-blue-700 transition-all active:scale-95 flex items-center gap-2"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-xl text-base font-medium transition-colors",
                    location.pathname === item.href ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="w-full bg-blue-600 text-white p-4 rounded-xl text-center font-bold shadow-lg shadow-blue-200"
              >
                Get a Quote Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
