import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 w-8 h-8 rounded flex items-center justify-center font-bold text-xl">
                 <span className="text-white">N</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight text-white uppercase">Nel</span>
                <span className="text-[10px] font-black text-blue-500 tracking-[0.2em] uppercase">Electronics</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              South Africa's trusted partner for high-quality refurbished tech, fair device trade-ins, and expert electronics repairs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 border border-white/10 rounded hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 border border-white/10 rounded hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 border border-white/10 rounded hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8">Our Services</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/shop" className="hover:text-blue-400 transition-colors">Buy Refurbished</Link></li>
              <li><Link to="/sell" className="hover:text-blue-400 transition-colors">Sell Your Device</Link></li>
              <li><Link to="/repairs" className="hover:text-blue-400 transition-colors">Computer Repairs</Link></li>
              <li><Link to="/shop?category=accessories" className="hover:text-blue-400 transition-colors">PC Accessories</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8">Company</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Information</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8">Location</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-gray-400">Sandton, Johannesburg <br/> South Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-gray-400">+27 12 345 6789</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-gray-500">
          <p>© {new Date().getFullYear()} Nel Electronics.</p>
          <div className="flex gap-6">
            <span>Online Avg Response: <span className="text-green-500">5 Mins</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
