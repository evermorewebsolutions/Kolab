import { motion } from "framer-motion";
import { CheckCircle2, Zap, Sun, Battery } from "lucide-react";

const pillars = [
  { icon: Zap, label: "Electricians", color: "text-primary", bg: "bg-primary/10" },
  { icon: Sun, label: "Solar Installers", color: "text-accent", bg: "bg-accent/10" },
  { icon: Battery, label: "Backup Power Providers", color: "text-green-400", bg: "bg-green-400/10" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group"
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
            <img
              src={`${import.meta.env.BASE_URL}images/db-board-commercial.jpg`}
              alt="Professional electrical DB board installation by Kolob Electrical"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />

            {/* Stat Box */}
            <div className="absolute bottom-6 left-6 right-6 z-20 glass-card p-6 rounded-xl flex items-center justify-between">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">5.0</p>
                <p className="text-sm text-muted-foreground">Star Rating</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">24+</p>
                <p className="text-sm text-muted-foreground">Reviews</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-muted-foreground">Compliant</p>
              </div>
            </div>
          </motion.div>

          <div className="lg:pl-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block"
            >
              About Kolob Electrical
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight"
            >
              More Than Electricians —<br />
              <span className="text-primary">Energy Solution Experts</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-4 leading-relaxed"
            >
              Kolob Electrical and Projects is a trusted Cape Town-based company specializing in electrical installations, solar panel systems, and backup power solutions for homes and businesses.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              We're not just electricians anymore — we're moving into the energy solutions space. With loadshedding hitting South Africa hard, businesses and homeowners need reliable power, and that's exactly what we deliver.
            </motion.p>

            {/* Three pillars */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {pillars.map((p, i) => (
                <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full ${p.bg} border border-white/5`}>
                  <p.icon className={`w-4 h-4 ${p.color}`} />
                  <span className={`text-sm font-semibold ${p.color}`}>{p.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              {[
                "Fully Licensed & Insured Electricians",
                "Solar PV Installation & Grid-Tie Systems",
                "Inverter & Battery Backup Solutions",
                "Strict Adherence to SANS 10142-1 Standards",
                "Transparent Upfront Pricing — No Hidden Fees",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
