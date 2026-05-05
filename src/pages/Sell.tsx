import { motion } from 'motion/react';
import { CreditCard, ArrowRight, Zap, CheckCircle2, ShieldCheck, DollarSign, Camera, Monitor, Smartphone, Laptop, Star } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Sell() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    deviceType: '',
    brand: '',
    model: '',
    condition: 'working',
    specs: '',
    name: '',
    whatsapp: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("In a real app, this would send your data to our team! We'll contact you shortly.");
  };

  return (
    <div className="bg-[#0a0c10] min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-[#0a0c10] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
           <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full border border-blue-600/20 text-xs font-bold uppercase tracking-wider"
          >
            <DollarSign className="w-4 h-4" />
            Highest Payouts in South Africa
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-none text-white"
          >
            Sell Your Device <br />
            <span className="text-blue-500">Get Paid Instantly.</span>
          </motion.h1>
          
          <motion.p
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto"
          >
            Don't let your old or broken laptop collect dust. Turn it into cash today with our transparent evaluation process.
          </motion.p>

          <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.3 }}
          >
             <a href="#quote-form" className="inline-block bg-white text-black px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-200 transition-all shadow-2xl shadow-white/10">
               Get My Quote Now
             </a>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-[#0a0c10] border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white">How It Works</h2>
            <p className="text-slate-500">As easy as 1, 2, 3.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Submit Details", desc: "Fill in our quick form with your device's model and condition.", icon: Camera },
              { step: "02", title: "Get Offer", desc: "Our team will review and send you a market-leading cash offer within hours.", icon: Zap },
              { step: "03", title: "Get Paid", desc: "Deliver your device and get paid via Instant EFT or Cash.", icon: DollarSign }
            ].map((s, idx) => (
              <div key={idx} className="relative p-8 bg-white/5 rounded-[40px] border border-white/10">
                <span className="absolute -top-6 left-8 bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-500/20">{s.step}</span>
                <h3 className="text-2xl font-black text-white mt-4 mb-4">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="quote-form" className="py-24 bg-[#0a0c10] relative">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Copy */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Getting a quote <br /> takes <span className="text-blue-500 underline underline-offset-8 decoration-blue-500/30">less than 2 minutes.</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Our pricing experts use real-time market data to ensure you get the best price for your laptop, PC, or high-end components.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Fair Market Value", desc: "We track current selling prices so you don't get low-balled.", icon: ShieldCheck },
                { title: "Any Condition", desc: "We buy broken, old, or brand new devices.", icon: CreditCard },
                { title: "Instant EFT", desc: "Payments reflect in your account before you leave our shop.", icon: CheckCircle2 },
                { title: "Safe & Private", desc: "We professionally wipe all your data from every device.", icon: Zap }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{benefit.title}</h4>
                    <p className="text-sm text-slate-500">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-12 rounded-[48px] border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step Indicators */}
              <div className="flex gap-2 mb-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className={cn("h-1.5 flex-1 rounded-full", step >= i ? "bg-blue-600" : "bg-white/10")} />
                ))}
              </div>

              {step === 1 && (
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-500">What are you selling?</label>
                    <div className="grid grid-cols-2 gap-4">
                      {['Laptop', 'Desktop', 'Monitor', 'Component'].map(type => (
                        <button 
                          key={type}
                          type="button"
                          onClick={() => setFormData({...formData, deviceType: type})}
                          className={cn(
                            "flex items-center justify-center gap-3 p-4 rounded-2xl border-2 transition-all font-bold",
                            formData.deviceType === type ? "bg-white text-black border-white shadow-lg shadow-white/10" : "bg-white/5 border-white/10 hover:border-white/20 text-white"
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Brand & Model (e.g. Dell Latitude 7490)" 
                      className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-600 font-medium outline-none"
                      value={formData.model}
                      onChange={e => setFormData({...formData, model: e.target.value})}
                    />
                    <button 
                      type="button"
                      disabled={!formData.deviceType || !formData.model}
                      onClick={() => setStep(2)}
                      className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-sm font-black uppercase tracking-widest text-slate-500">Condition</label>
                     <div className="space-y-3">
                        {['Working Perfectly', 'Minor Issues', 'Broken / Not Turning On'].map(c => (
                          <button 
                            key={c}
                            type="button"
                            onClick={() => setFormData({...formData, condition: c})}
                            className={cn(
                              "w-full text-left p-4 rounded-2xl border-2 transition-all font-bold",
                              formData.condition === c ? "bg-white text-black border-white" : "bg-white/5 border-white/10 hover:border-white/20 text-white"
                            )}
                          >
                            {c}
                          </button>
                        ))}
                     </div>
                  </div>
                  <textarea 
                    placeholder="Short description of specs (RAM, Storage, CPU...)"
                    className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-600 font-medium h-32 outline-none"
                    value={formData.specs}
                    onChange={e => setFormData({...formData, specs: e.target.value})}
                  />
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 bg-white/5 text-white py-4 rounded-2xl font-bold border border-white/10">Back</button>
                    <button type="button" onClick={() => setStep(3)} className="flex-[2] bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all">Last Step</button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-widest text-slate-500">Contact Details</label>
                      <input 
                        type="text" 
                        placeholder="Your Full Name" 
                        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-600 font-medium outline-none"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="WhatsApp Number" 
                        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-600 font-medium outline-none"
                        value={formData.whatsapp}
                        onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(2)} className="flex-1 bg-white/5 text-white py-4 rounded-2xl font-bold border border-white/10">Back</button>
                    <button type="submit" className="flex-[2] bg-blue-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">Get My Quote</button>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 max-w-4xl text-center text-white space-y-8">
           <div className="flex justify-center gap-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-orange-400 fill-current" />)}
           </div>
           <blockquote className="text-3xl md:text-4xl font-bold italic opacity-90 leading-relaxed">
             "Transparent, fair, and incredibly fast. I got my quote at 10 AM, dropped my device at 2 PM, and had the money in my Capitec account before I got home."
           </blockquote>
           <div className="space-y-1">
             <p className="font-black uppercase tracking-[0.2em] text-blue-400">Thabo Mdluli</p>
             <p className="text-slate-500">Johannesburg Seller</p>
           </div>
        </div>
      </section>
    </div>
  );
}
