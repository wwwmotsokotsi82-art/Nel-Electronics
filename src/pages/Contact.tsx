import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Facebook, Instagram, Twitter, Send, Zap, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0a0c10] min-h-screen text-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#0a0c10] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none text-white">Get In Touch</h1>
          <p className="text-xl text-slate-400 max-w-xl mx-auto font-medium">Have a question? We're here to help you solve your tech problems.</p>
        </div>
      </section>

      <section className="py-24 bg-[#0a0c10]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-10">
                <h2 className="text-3xl md:text-4xl font-black text-white">How to reach us</h2>
                <div className="space-y-8">
                   <div className="flex gap-6 group">
                      <div className="shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                         <Phone className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Call or WhatsApp</p>
                         <p className="text-xl font-bold text-white tracking-tight">+27 12 345 6789</p>
                         <a href="https://wa.me/27123456789" className="text-blue-500 text-sm font-black flex items-center gap-1 hover:text-blue-400 transition-colors">
                            Message on WhatsApp <ChevronRight className="w-4 h-4" />
                         </a>
                      </div>
                   </div>

                   <div className="flex gap-6 group">
                      <div className="shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                         <Mail className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Email Us</p>
                         <p className="text-xl font-bold text-white tracking-tight">hello@nelelectronics.co.za</p>
                      </div>
                   </div>

                   <div className="flex gap-6 group">
                      <div className="shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                         <MapPin className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Visit our Workshop</p>
                         <p className="text-xl font-bold text-white leading-tight tracking-tight">
                            Office 4, Business Park A <br />
                            Sandton, Johannesburg, 2196
                         </p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="space-y-8">
                 <h2 className="text-3xl font-black text-white">Trading Hours</h2>
                 <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 space-y-6">
                    <div className="flex justify-between items-center text-sm">
                       <span className="font-bold text-slate-400">Monday - Friday</span>
                       <span className="font-black text-white">08:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-t border-white/5 pt-6">
                       <span className="font-bold text-slate-400">Saturday</span>
                       <span className="font-black text-white">09:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-t border-white/5 pt-6">
                       <span className="font-bold text-slate-400">Sunday & Holidays</span>
                       <span className="font-black text-slate-600 italic uppercase tracking-widest">Closed</span>
                    </div>
                 </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-black rounded-[48px] flex flex-col items-center justify-center border border-white/10 relative overflow-hidden group">
                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500" />
                 <MapPin className="w-12 h-12 text-blue-500 relative z-10 mb-2 drop-shadow-2xl" />
                 <span className="font-black text-white relative z-10 text-xs uppercase tracking-[0.3em]">Sandton, JHB</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
               <div className="bg-black rounded-[64px] p-8 md:p-20 text-white shadow-2xl relative overflow-hidden border border-white/5">
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                  
                  {submitted ? (
                     <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-20 space-y-10"
                     >
                        <div className="w-24 h-24 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-green-500/10">
                           <CheckCircle2 className="w-12 h-12 text-green-500" />
                        </div>
                        <div className="space-y-4">
                           <h2 className="text-4xl md:text-5xl font-black">Message Sent!</h2>
                           <p className="text-slate-400 text-lg">Thank you for reaching out. A technician will get back to you within 2 business hours.</p>
                        </div>
                        <button onClick={() => setSubmitted(false)} className="bg-white/5 border border-white/10 px-8 py-3 rounded-full text-blue-500 font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
                           Send another message
                        </button>
                     </motion.div>
                  ) : (
                     <div className="space-y-16 relative z-10">
                        <div className="space-y-4">
                           <h2 className="text-4xl md:text-6xl font-black leading-none">Ready to <br /><span className="text-blue-500 italic">start?</span></h2>
                           <p className="text-slate-400 text-lg">Fill out the form below and we'll handle the rest.</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-10">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              <div className="space-y-3">
                                 <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Your Name</label>
                                 <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-[24px] p-5 focus:border-blue-500 outline-none transition-colors text-white placeholder:text-slate-700" />
                              </div>
                              <div className="space-y-3">
                                 <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Email Address</label>
                                 <input required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-[24px] p-5 focus:border-blue-500 outline-none transition-colors text-white placeholder:text-slate-700" />
                              </div>
                           </div>
                           
                           <div className="space-y-3">
                              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Subject</label>
                              <div className="relative">
                                 <select className="w-full bg-white/5 border border-white/10 rounded-[24px] p-5 focus:border-blue-500 outline-none transition-colors text-white appearance-none cursor-pointer [&>option]:bg-[#0a0c10] [&>option]:text-white">
                                    <option>Buying a laptop</option>
                                    <option>Repairing my device</option>
                                    <option>Selling my tech</option>
                                    <option>General Inquiry</option>
                                 </select>
                                 <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 rotate-90" />
                              </div>
                           </div>

                           <div className="space-y-3">
                              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">How can we help?</label>
                              <textarea required rows={5} placeholder="Tell us more about your device or issue..." className="w-full bg-white/5 border border-white/10 rounded-[32px] p-5 focus:border-blue-500 outline-none transition-colors text-white placeholder:text-slate-700 resize-none"></textarea>
                           </div>

                           <button type="submit" className="w-full bg-white text-black py-6 rounded-3xl font-black text-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-4 shadow-2xl shadow-white/5">
                               Send Message
                               <Send className="w-6 h-6" />
                           </button>
                        </form>
                        
                        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                           <div className="flex items-center gap-3">
                              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.15em]">Live support: Active</span>
                           </div>
                           <div className="flex gap-6">
                              <Facebook className="w-6 h-6 text-slate-500 hover:text-white transition-colors cursor-pointer" />
                              <Instagram className="w-6 h-6 text-slate-500 hover:text-white transition-colors cursor-pointer" />
                              <Twitter className="w-6 h-6 text-slate-500 hover:text-white transition-colors cursor-pointer" />
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
