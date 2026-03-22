import { motion } from "framer-motion";
import { PlugZap, Wrench, ShieldCheck, Search, Building2, Sun } from "lucide-react";

const services = [
  {
    title: "Electrical Installations",
    description: "Full-scale electrical installations for new builds, renovations, and extensions.",
    icon: PlugZap,
  },
  {
    title: "Maintenance & Repairs",
    description: "Fast, reliable troubleshooting and repair of all electrical faults to keep you powered.",
    icon: Wrench,
  },
  {
    title: "COC Certification",
    description: "Official Certificates of Compliance (COC) for property sales and insurance purposes.",
    icon: ShieldCheck,
  },
  {
    title: "Solar Panel Installation",
    description: "Professional solar PV system design, installation, and grid-tie setup for homes and businesses across Cape Town.",
    icon: Sun,
  },
  {
    title: "Fault Finding",
    description: "Advanced diagnostics to detect and permanently fix tripping issues and electrical shorts.",
    icon: Search,
  },
  {
    title: "Commercial & Residential",
    description: "Comprehensive solutions tailored for both home owners and commercial properties.",
    icon: Building2,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-white"
          >
            Premium Electrical Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground"
          >
            From minor repairs and major installations to complete solar panel systems, our certified team handles all your electrical needs with precision and care.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
