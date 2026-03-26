import { motion } from "framer-motion";
import { Star, PhoneCall, ArrowRight, ShieldCheck, Sun } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/90 to-background z-10" />
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract Electrical Background"
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] z-10" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <div className="flex items-center text-accent">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-semibold text-white/90">5.0 Rated Service in Cape Town</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6"
          >
            Reliable <span className="text-gradient-primary">Electrical</span> Solutions You Can Trust
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
          >
            Expert electrical installations, solar panel systems, maintenance, and COC Certification across Cape Town, Kuils River, and Bellville.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:0679250042"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <PhoneCall className="w-5 h-5" />
              Call 067 925 0042
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-5 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Licensed & Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-accent" />
              <span>Solar Installers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Available for Emergencies</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </motion.div>
    </section>
  );
}
