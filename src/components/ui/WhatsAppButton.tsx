import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const phoneNumber = "27123456789"; // Replace with real number
  const message = encodeURIComponent("Hi Nel Electronics, I'm interested in your services!");
  
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="absolute right-full mr-3 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-slate-100">
        Chat with us
      </span>
    </motion.a>
  );
}
