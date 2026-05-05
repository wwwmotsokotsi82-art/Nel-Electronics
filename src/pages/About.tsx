import { motion } from 'motion/react';
import { ShieldCheck, Heart, Users, Target, CheckCircle2, Monitor, Award, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#0a0c10] text-white">
      {/* Hero */}
      <section className="pt-24 pb-32 bg-[#0a0c10] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-none">
              Making Tech <br />
              <span className="text-blue-500 italic">For Everyone.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Nel Electronics was born out of a simple idea: premium computing shouldn't be reserved for the elite. 
              We're here to bridge the gap between "brand new prices" and "reliable performance."
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-[#0a0c10]">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="relative z-10 overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1549490349-864aa9d76328?auto=format&fit=crop&q=80&w=800" alt="Our workshop" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700 hover:scale-105" />
             </div>
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/20 rounded-3xl -rotate-12 z-0 backdrop-blur-3xl border border-blue-600/20" />
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl z-0" />
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
               <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs">Our Story</span>
               <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Started in a garage, <br /> Built on trust.</h2>
            </div>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
              <p>
                In 2018, Nel Electronics started as a small repair shop in Johannesburg. We noticed a massive problem: students and small businesses were either forced to buy low-quality new laptops or risk their money on unverified second-hand devices.
              </p>
              <p>
                We decided to change that. By focusing on **Grade-A refurbished units** and professional, transparent repairs, we've helped over 5,000 South Africans get back to work and study without breaking the bank.
              </p>
            </div>
            <div className="flex flex-wrap gap-12 pt-6 border-t border-white/5">
               <div className="space-y-1">
                 <p className="text-4xl font-black text-white italic tracking-tighter">5k+</p>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Happy Clients</p>
               </div>
               <div className="space-y-1">
                 <p className="text-4xl font-black text-white italic tracking-tighter">6yr</p>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Experience</p>
               </div>
               <div className="space-y-1">
                 <p className="text-4xl font-black text-white italic tracking-tighter">25pt</p>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Inspection</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight">Our Values</h2>
            <p className="text-slate-500 text-lg">The pillars that define Nel Electronics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Trust Over Profit", desc: "If a repair isn't worth it, we'll tell you. We'd rather keep a happy customer for life than make a quick buck.", icon: ShieldCheck },
              { title: "Technical Precision", desc: "No sticky tape or shortcuts. We follow manufacturer guidelines and use parts that last.", icon: Monitor },
              { title: "Circular Economy", desc: "Refurbishing tech reduces e-waste and gives powerful devices a second life. It's better for your wallet and the planet.", icon: Zap }
            ].map((v, idx) => (
              <div key={idx} className="p-10 bg-white/5 border border-white/10 rounded-[40px] space-y-6 hover:bg-white/[0.08] transition-all hover:-translate-y-2 group">
                 <div className="w-16 h-16 bg-blue-600/20 border border-blue-600/30 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <v.icon className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors" />
                 </div>
                 <h3 className="text-2xl font-black">{v.title}</h3>
                 <p className="text-slate-400 leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (Bento) */}
      <section className="py-32 bg-[#0a0c10]">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-min">
              <div className="md:col-span-8 bg-blue-600/5 rounded-[48px] p-12 flex flex-col justify-end space-y-6 overflow-hidden relative group border border-white/5">
                 <Monitor className="absolute top-10 right-10 w-80 h-80 text-blue-600/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                 <div className="relative z-10 max-w-xl space-y-6">
                   <h3 className="text-4xl md:text-6xl font-black text-white leading-none">Grade-A Quality <br /> Standard.</h3>
                   <p className="text-slate-400 text-lg leading-relaxed">We don't sell 'junk'. If it doesn't look like new and run like new, it doesn't leave our shop. Every unit undergoes a rigorous 25-point inspection.</p>
                 </div>
              </div>
              
              <div className="md:col-span-4 bg-white/5 rounded-[48px] p-10 flex flex-col justify-between text-white border border-white/10 group hover:bg-white/[0.08] transition-all">
                 <Award className="w-20 h-20 text-blue-500 mb-8" />
                 <div className="space-y-4">
                    <h3 className="text-3xl font-black italic underline decoration-blue-500 underline-offset-8">South African <br /> Owned</h3>
                    <p className="text-slate-500 leading-relaxed">Supporting local tech talent and the South African middle class since 2018. Based in Johannesburg.</p>
                 </div>
              </div>
              
              <div className="md:col-span-4 bg-orange-600/5 border border-orange-600/10 rounded-[48px] p-10 flex flex-col justify-center space-y-6 transition-all hover:bg-orange-600/10">
                 <Heart className="w-16 h-16 text-orange-500 fill-current opacity-50" />
                 <div className="space-y-2">
                    <h3 className="text-3xl font-black text-white">Student First</h3>
                    <p className="text-slate-400">Valid student card? Get an extra 5% off any refurbished unit, always. We support our future leaders.</p>
                 </div>
              </div>
              
              <div className="md:col-span-8 bg-white/5 border border-white/10 rounded-[48px] p-12 flex flex-col md:flex-row items-center justify-between gap-12 group hover:bg-white/[0.08] transition-all">
                 <div className="space-y-4 flex-1">
                    <h3 className="text-4xl font-black text-white">Expert Workshop</h3>
                    <p className="text-slate-400 text-lg">State-of-the-art diagnostic and repair tools in our Gauteng lab. Precision is our baseline.</p>
                 </div>
                 <div className="shrink-0 w-32 h-32 bg-blue-600 rounded-[32px] flex items-center justify-center shadow-2xl shadow-blue-600/20 group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-0">
                    <Zap className="w-16 h-16 text-white fill-current" />
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
