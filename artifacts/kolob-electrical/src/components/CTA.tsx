import { motion } from "framer-motion";
import { PhoneCall, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-900 z-0" />
      
      {/* Abstract patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay z-0" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/20 rounded-full blur-3xl z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6"
        >
          Need an Electrician Today?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/80 mb-10"
        >
          Our licensed experts are standing by. Don't let electrical faults disrupt your day.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="tel:0679250042"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-accent text-accent-foreground shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            <PhoneCall className="w-5 h-5" />
            Call Now: 067 925 0042
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-black/30 border border-white/20 text-white backdrop-blur-md hover:bg-black/40 transition-all hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
