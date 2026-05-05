import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, CreditCard, Wrench, ShieldCheck, Zap, Heart, ArrowRight, Star, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '../lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="overflow-hidden bg-[#0a0c10]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-widest"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Certified Refurbished Specialist
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95]"
              >
                RELIABLE TECH.<br />
                <span className="text-gray-500">BUDGET PRICES.</span>
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Premium refurbished laptops and professional repairs for students and small businesses across South Africa.
              </motion.p>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link 
                  to="/shop" 
                  className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded font-bold text-sm uppercase tracking-tighter hover:bg-gray-200 transition-all shadow-xl shadow-white/5"
                >
                  Browse Shop
                </Link>
                <Link 
                  to="/sell" 
                  className="w-full sm:w-auto bg-transparent text-white px-10 py-5 rounded font-bold text-sm uppercase tracking-tighter border border-white/20 hover:bg-white/5 transition-all"
                >
                  Sell Device
                </Link>
              </motion.div>

              <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                    6-Month Warranty
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    Certified Testing
                 </div>
              </div>
            </div>

            {/* Featured Hero Card */}
            <motion.div 
               initial={{ x: 40, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.5, duration: 1 }}
               className="hidden lg:block flex-1 relative"
            >
               <div className="relative bg-gradient-to-br from-[#1a1c23] to-[#0a0c10] border border-white/10 p-10 rounded-3xl overflow-hidden shadow-2xl">
                 <div className="absolute top-4 right-6 bg-blue-600 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest animate-pulse italic">Deal of the Week</div>
                 <div className="w-full aspect-video bg-gray-900 rounded-lg mb-8 flex items-center justify-center border border-white/5 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600" 
                      alt="Dell Laptop" 
                      className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" 
                    />
                 </div>
                 <h4 className="text-2xl font-bold mb-1">Dell Latitude 7490 Business</h4>
                 <p className="text-sm text-gray-400 mb-6 font-medium">Core i5 | 8GB RAM | 256GB SSD | Windows 11</p>
                 <div className="flex items-end justify-between">
                   <div className="flex flex-col">
                      <span className="text-xs text-gray-500 line-through font-bold tracking-widest">R5,999</span>
                      <span className="text-4xl font-black">R4,499</span>
                   </div>
                   <Link to="/shop" className="px-6 py-3 bg-blue-600 rounded text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors">
                      View Details
                   </Link>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality Stock",
                tag: "Buy.",
                desc: "Browse certified laptops from R2,500. Grade-A stock only.",
                icon: ShoppingBag,
              },
              {
                title: "Cash for Tech",
                tag: "Sell.",
                desc: "Get an instant quote and immediate cash for your used device.",
                icon: CreditCard,
              },
              {
                title: "Fast Repairs",
                tag: "Fix.",
                desc: "Screen, battery, and logic board specialist. 24hr turnaround.",
                icon: Wrench,
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group p-10 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all cursor-pointer"
              >
                <div className="text-blue-500 text-xs font-black uppercase tracking-widest mb-2 group-hover:translate-x-1 transition-transform">{service.tag}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-0">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: "1000+", label: "Satisfied Clients" },
                { val: "24HR", label: "Repair Turnaround" },
                { val: "6-MO", label: "Standard Warranty" },
                { val: "25PT", label: "Safety Inspection" }
              ].map((s, i) => (
                <div key={i} className="text-center md:text-left border-l-2 border-blue-600/30 pl-6 h-full flex flex-col justify-center">
                   <div className="text-4xl font-black">{s.val}</div>
                   <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] mt-1">{s.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Flash Deals <br /><span className="text-blue-600">Selected Inventory</span></h2>
              <p className="text-slate-500">Limited stock available. All units tested & certified.</p>
            </div>
            <Link to="/shop" className="text-blue-500 font-bold flex items-center gap-2 hover:underline tracking-tighter uppercase text-xs">
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Latitude 7490",
                brand: "Dell",
                specs: "i5 8th Gen | 8GB RAM | 256GB SSD",
                price: "R 4,499",
                oldPrice: "R 5,999",
                tag: "Student Choice",
                img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "MacBook Air M1",
                brand: "Apple",
                specs: "8GB RAM | 256GB SSD | Space Grey",
                price: "R 12,999",
                oldPrice: "R 14,999",
                tag: "Bestseller",
                img: "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "EliteBook 840 G5",
                brand: "HP",
                specs: "i7 8th Gen | 16GB RAM | 512GB SSD",
                price: "R 6,199",
                oldPrice: "R 7,500",
                tag: "Business Grade",
                img: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=400"
              }
            ].map((p, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden group bg-black/40">
                  <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full italic">
                    {p.tag}
                  </div>
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" />
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">{p.brand}</p>
                    <h3 className="text-xl font-bold text-white tracking-tight">{p.name}</h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-relaxed mt-2">{p.specs}</p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-600 line-through font-black tracking-widest uppercase">{p.oldPrice}</span>
                      <span className="text-2xl font-black text-white">{p.price}</span>
                    </div>
                    <Link to="/shop" className="bg-white text-black p-3 rounded-xl hover:bg-gray-200 transition-colors shadow-lg shadow-white/5">
                      <ShoppingBag className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0a0c10]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Tech you can trust, <br />
                <span className="text-blue-500">Without the risk.</span>
              </h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed">
                Buying refurbished shouldn't feel like a gamble. We've built our reputation in South Africa on honesty and quality.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "25-Point Inspection", desc: "Every device goes through a rigorous testing phase before sale." },
                  { title: "Real 6-Month Warranty", desc: "If it fails, we fix or replace it. No excuses." },
                  { title: "Same-Day Professional Repairs", desc: "Most repairs completed while you wait in our workshop." },
                  { title: "Best Cash Prices", desc: "We pay fair market value for your used electronics." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 border border-blue-600/30">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl skew-y-1">
                 <img 
                   src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800" 
                   alt="Expert repair" 
                   className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                 />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl z-[-1]" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl z-[-1]" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black text-white overflow-hidden relative border-y border-white/10">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Local Stories, <span className="text-gray-500">Real Trust.</span></h2>
            <p className="text-gray-500">Join thousands of happy customers across South Africa.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {[
              {
                text: "Nel Electronics saved my degree! My laptop died 2 days before a final project. They fixed it same-day for a great price.",
                author: "Sarah M.",
                role: "University Student"
              },
              {
                text: "I was skeptical about refurbished PCs, but the Dell I bought has been perfect for my small business. 6 months in and no issues.",
                author: "John D.",
                role: "Entrepreneur"
              },
              {
                text: "Best place to sell your old tech. They gave me R2,000 more than most other shops in Joburg. Fast transaction.",
                author: "Michael P.",
                role: "Graphic Designer"
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white/5 p-10 rounded-2xl space-y-8 border border-white/10">
                <div className="flex gap-1 text-blue-500">
                   {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center font-bold text-lg">
                    {t.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white leading-none">{t.author}</h4>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0a0c10]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center tracking-tighter">QUESTIONS?</h2>
            <p className="text-gray-500 uppercase tracking-widest font-black text-[10px]">Information Desk</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "What does 'refurbished' actually mean?", a: "Our refurbished units are used devices that have been professionally cleaned, inspected, and repaired where necessary. They are tested against a 25-point checklist to ensure performance is on par with new units." },
              { q: "Do you offer a warranty?", a: "Yes! Every computer we sell comes with a standard 6-month carry-in warranty that covers hardware failure. We want you to buy with complete peace of mind." },
              { q: "How long does a typical repair take?", a: "Screen replacements and battery swaps usually take 2-4 hours." }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-white/10 last:border-0">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left hover:text-white transition-colors group"
                >
                  <span className="text-lg font-bold text-gray-400 group-hover:text-white transition-colors">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-gray-600 transition-transform", activeFaq === idx && "rotate-180 text-blue-500")} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-500 leading-relaxed text-sm">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to upgrade <br />your tech life?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/shop" className="w-full sm:w-auto bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all shadow-2xl">
              Shop Now
            </Link>
            <Link to="/contact" className="w-full sm:w-auto bg-blue-700 text-white border-2 border-white/20 px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-800 transition-all">
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
