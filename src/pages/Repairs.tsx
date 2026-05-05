import { motion } from 'motion/react';
import { Wrench, Zap, Clock, ShieldCheck, CheckCircle2, ChevronRight, Monitor, Laptop, HardDrive, Cpu, Battery, Wifi } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Repairs() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    { id: 'screen', title: 'Screen Replacement', icon: Monitor, price: 'From R850', duration: '2-4 Hours' },
    { id: 'battery', title: 'Battery Swap', icon: Battery, price: 'From R450', duration: '1 Hour' },
    { id: 'upgrade', title: 'SSD & RAM Upgrades', icon: HardDrive, price: 'From R600', duration: '2 Hours' },
    { id: 'liquid', title: 'Liquid Damage', icon: Wifi, price: 'Assessment Required', duration: '2-3 Days' },
    { id: 'software', title: 'Software Cleanup', icon: Cpu, price: 'From R350', duration: 'Same Day' },
    { id: 'motherboard', title: 'Motherboard Repairs', icon: Zap, price: 'Quote Required', duration: '3-5 Days' },
  ];

  return (
    <div className="bg-[#0a0c10] text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-[#0a0c10] relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 text-center md:text-left">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 border border-orange-600/30"
              >
                <Zap className="w-4 h-4 fill-current" />
                Emergency Repairs Available
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-black text-white leading-[1.1]"
              >
                Broken PC? <br />
                <span className="text-blue-500">We Fix It Fast.</span>
              </motion.h1>
              
              <motion.p
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
                className="text-lg text-slate-400 leading-relaxed"
              >
                Don't wait weeks for a repair. Our professional technicians in Johannesburg 
                offer same-day service for most common laptop and computer issues.
              </motion.p>

              <motion.div
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <a href="#booking" className="bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-200 shadow-xl shadow-white/5 transition-all">
                  Book a Repair
                </a>
                <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                   <Clock className="w-5 h-5 text-blue-500" />
                   <span className="font-bold text-white">Most Repairs: 4 Hours</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex-1 relative hidden lg:block"
            >
              <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=600" alt="Repair workshop" className="rounded-[40px] shadow-2xl skew-y-3 grayscale opacity-80" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0a0c10]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Our Expertise</h2>
            <p className="text-slate-400 max-w-xl mx-auto">From high-end MacBooks to gaming desktops, we have the tools to handle any hardware or software failure.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <motion.div 
                key={s.id}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedService(s.id)}
                className={cn(
                  "p-8 rounded-[40px] border-2 transition-all cursor-pointer group",
                  selectedService === s.id ? "border-blue-600 bg-blue-600/10" : "border-white/5 hover:border-white/20 bg-white/5"
                )}
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors",
                  selectedService === s.id ? "bg-blue-600 text-white" : "bg-white/5 text-slate-500 group-hover:bg-blue-600/20 group-hover:text-blue-500"
                )}>
                  <s.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{s.title}</h3>
                <div className="flex flex-col gap-1 mb-6">
                   <span className="text-sm font-bold text-blue-500">{s.price}</span>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-widest flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {s.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">
                  Select this service <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-5xl font-black leading-tight text-white">Professional standards, <br /> local heart.</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We're not just swapping parts. Every repair includes a full internal cleaning 
                and thermal paste refresh for desktops—absolutely free.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                   <ShieldCheck className="w-8 h-8 text-blue-500" />
                   <h4 className="font-bold">90-Day Guarantee</h4>
                   <p className="text-slate-500 text-sm">On all parts and labor.</p>
                </div>
                <div className="space-y-2">
                   <Clock className="w-8 h-8 text-blue-500" />
                   <h4 className="font-bold">No Fix, No Fee</h4>
                   <p className="text-slate-500 text-sm">If we can't repair it, we don't charge.</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-md bg-white/5 backdrop-blur-sm border border-white/10 rounded-[48px] p-8 md:p-12">
               <div className="space-y-8">
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-bold">Free Diagnostics</h3>
                    <p className="text-slate-400">Bring it in, we'll tell you what's wrong.</p>
                  </div>
                  
                  <ul className="space-y-4">
                    {['Original Parts Used', 'Certified Technicians', 'Same-Day Turnaround', 'Anti-Static Lab Environment'].map((t, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <a href="https://wa.me/27123456789" className="block text-center bg-blue-600 text-white py-4 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20">
                      Chat to Technician
                    </a>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-24 bg-[#0a0c10]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Book Your Slot</h2>
           <p className="text-slate-400 mb-12">Skip the queue by letting us know when you're coming.</p>
           
           <div className="bg-white/5 p-8 md:p-12 rounded-[48px] border border-white/10 text-left backdrop-blur-md">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-500">Device Description</label>
                    <input type="text" placeholder="e.g. MacBook Pro 2019" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-600 font-medium outline-none" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-500">Main Issue</label>
                    <select className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-blue-600 font-medium outline-none [&>option]:bg-[#0a0c10] [&>option]:text-white">
                       <option>Screen Replacement</option>
                       <option>Battery Service</option>
                       <option>Software / Virus</option>
                       <option>Not Powering On</option>
                       <option>Other / Not Sure</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-500">Your Name</label>
                    <input type="text" placeholder="Full name" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-600 font-medium outline-none" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-500">Phone / WhatsApp</label>
                    <input type="text" placeholder="071 234 5678" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-600 font-medium outline-none" />
                 </div>
                 <div className="md:col-span-2 pt-4">
                    <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/10">
                      Confirm Booking
                    </button>
                    <p className="mt-4 text-center text-xs font-bold text-slate-500 uppercase tracking-widest italic flex items-center justify-center gap-2">
                      <Zap className="w-3 h-3" /> No payment required until the fix is done.
                    </p>
                 </div>
              </form>
           </div>
        </div>
      </section>
    </div>
  );
}
