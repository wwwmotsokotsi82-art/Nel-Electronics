import { useState } from 'react';
import { Search, Filter, SlidersHorizontal, ShoppingBag, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 1, name: "Latitude 7490", brand: "Dell", category: "Laptop", specs: "i5 8th Gen | 8GB RAM | 256GB SSD", price: 4499, oldPrice: 5999, img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400", bestseller: true },
  { id: 2, name: "MacBook Air M1", brand: "Apple", category: "Laptop", specs: "8GB RAM | 256GB SSD | Space Grey", price: 12999, oldPrice: 14999, img: "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=400", bestseller: true },
  { id: 3, name: "EliteBook 840 G5", brand: "HP", category: "Laptop", specs: "i7 8th Gen | 16GB RAM | 512GB SSD", price: 6199, oldPrice: 7500, img: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=400", bestseller: false },
  { id: 4, name: "ThinkPad X1 Carbon", brand: "Lenovo", category: "Laptop", specs: "i7 7th Gen | 16GB RAM | 256GB SSD", price: 5499, oldPrice: 6800, img: "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?auto=format&fit=crop&q=80&w=400", bestseller: false },
  { id: 5, name: "OptiPlex 3060 Micro", brand: "Dell", category: "Desktop", specs: "i5 8th Gen | 8GB RAM | 256GB SSD", price: 3299, oldPrice: 4200, img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=400", bestseller: false },
  { id: 6, name: "iMac 21.5-inch", brand: "Apple", category: "Desktop", specs: "i5 | 8GB RAM | 1TB HDD | 4K Display", price: 8999, oldPrice: 11000, img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400", bestseller: true },
  { id: 7, name: "EliteDesk 800 G4", brand: "HP", category: "Desktop", specs: "i5 8th Gen | 16GB RAM | 256GB SSD", price: 3899, oldPrice: 4800, img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=400", bestseller: false },
  { id: 8, name: "Yoga 720 2-in-1", brand: "Lenovo", category: "Laptop", specs: "Touch | i5 | 8GB RAM | 256GB SSD", price: 5999, oldPrice: 8000, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400", bestseller: false },
];

const BRANDS = ["All", "Dell", "Apple", "HP", "Lenovo"];
const CATEGORIES = ["All", "Laptop", "Desktop"];

export default function Shop() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [category, setCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                         p.brand.toLowerCase().includes(search.toLowerCase());
    const matchesBrand = brand === "All" || p.brand === brand;
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesBrand && matchesCategory;
  });

  return (
    <div className="bg-[#0a0c10] min-h-screen pt-12 pb-24 text-white">
      <div className="container mx-auto px-4">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-500 font-black text-[10px] uppercase tracking-[0.4em]">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              In Stock & Ready to Ship
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">OUR SHOP</h1>
            <p className="text-gray-500 text-lg font-medium">Top-tier refurbished tech at unbeatable prices.</p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-black text-gray-600 uppercase tracking-widest">
            <span>Showing {filteredProducts.length} of {PRODUCTS.length} devices</span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white/5 p-6 rounded-2xl shadow-sm border border-white/10 mb-12 flex flex-col lg:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search by model, brand, or specs..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-blue-500 outline-none text-sm font-medium transition-all"
            />
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center bg-white/5 rounded-lg p-1 shrink-0 border border-white/10">
              {BRANDS.map(b => (
                <button
                  key={b}
                  onClick={() => setBrand(b)}
                  className={cn(
                    "px-4 py-2 rounded text-[10px] uppercase font-black tracking-widest transition-all",
                    brand === b ? "bg-blue-600 text-white" : "text-gray-500 hover:text-white"
                  )}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <motion.div 
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8 }}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 group flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden bg-black/40">
                  {p.bestseller && (
                    <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded italic animate-pulse">
                      Popular
                    </div>
                  )}
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  />
                </div>

                <div className="p-6 space-y-4 flex flex-col flex-1">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{p.brand}</p>
                    <h3 className="text-xl font-bold leading-tight">{p.name}</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-2">{p.specs}</p>
                  </div>

                  <div className="mt-auto space-y-6 pt-6 border-t border-white/5">
                    <div className="flex items-end justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-500 line-through font-bold tracking-widest">R{p.oldPrice.toLocaleString()}</span>
                        <span className="text-2xl font-black">R{p.price.toLocaleString()}</span>
                      </div>
                      <Link to="/contact" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-all">
                        <ShoppingBag className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center space-y-4">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto text-slate-700 border border-white/10">
                <Search className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight">No products found</h2>
              <p className="text-slate-500">Try adjusting your filters or search terms.</p>
              <button 
                onClick={() => { setSearch(""); setBrand("All"); setCategory("All"); }}
                className="text-blue-500 font-bold hover:underline uppercase text-xs tracking-widest"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Benefits Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Safe Nationwide Delivery", desc: "We ship to every corner of South Africa using door-to-door courier." },
             { title: "Certified Performance", desc: "Every device is tested beyond factory requirements for your peace of mind." },
             { title: "Personal Support", desc: "Ongoing Tech support available to every customer who buys from us." }
           ].map((item, idx) => (
             <div key={idx} className="bg-white/5 p-10 rounded-3xl border border-white/10 text-center space-y-4 hover:bg-white/10 transition-colors">
               <h3 className="font-black text-white uppercase tracking-[0.2em] text-xs">{item.title}</h3>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
