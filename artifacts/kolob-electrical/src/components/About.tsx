import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
            <img
              src={`${import.meta.env.BASE_URL}images/about-electrician.png`}
              alt="Electrical Panel"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            
            {/* Stat Box */}
            <div className="absolute bottom-6 left-6 right-6 z-20 glass-card p-6 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-muted-foreground">Compliance</p>
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
              className="text-3xl md:text-4xl font-display font-bold text-white mb-6"
            >
              Committed to Quality, Safety & Customer Satisfaction
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-6 leading-relaxed"
            >
              Kolob Electrical and Projects is a trusted Cape Town-based electrical company specializing in high-quality installations, solar panel systems, emergency maintenance, and strict compliance certification.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              We believe in doing the job right the first time. Our team consists of licensed professionals who are passionate about providing safe and efficient electrical solutions for both residential and commercial properties.
            </motion.p>

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
                "Strict Adherence to SANS 10142-1 Standards",
                "Transparent Upfront Pricing",
                "24/7 Emergency Support Availability",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
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
