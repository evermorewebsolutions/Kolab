import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Cape Town CBD",
  "Kuils River",
  "Bellville",
  "Goodwood",
  "Parow",
  "Brackenfell",
  "Durbanville",
  "Surrounding Areas"
];

export function ServiceArea() {
  return (
    <section id="areas" className="py-20 border-y border-white/5 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold text-white mb-4"
            >
              Areas We Serve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              Our mobile units are ready to be dispatched across the greater Cape Town area to assist you promptly.
            </motion.p>
          </div>
          
          <div className="md:w-2/3 flex flex-wrap gap-3 justify-start md:justify-end">
            {areas.map((area, idx) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-white text-sm font-medium">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
