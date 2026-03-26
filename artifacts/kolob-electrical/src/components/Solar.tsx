import { motion } from "framer-motion";
import { Sun, Battery, Zap, TrendingDown, ShieldCheck, Home } from "lucide-react";

const solarServices = [
  {
    icon: Sun,
    title: "Solar Panel Installation",
    description: "Professional rooftop PV system design and installation for homes and businesses.",
  },
  {
    icon: Battery,
    title: "Inverter & Battery Systems",
    description: "Complete inverter and lithium battery backup solutions — stay powered during loadshedding.",
  },
  {
    icon: Zap,
    title: "Backup Power Solutions",
    description: "Never lose power again. We design backup systems tailored to your energy needs.",
  },
  {
    icon: TrendingDown,
    title: "Energy Efficiency",
    description: "Cut your Eskom bill significantly with smart solar setups and efficient electrical design.",
  },
];

const benefits = [
  { stat: "100%", label: "Loadshedding-proof" },
  { stat: "50%+", label: "Electricity bill reduction" },
  { stat: "20yr", label: "Panel lifespan" },
];

export function Solar() {
  return (
    <section id="solar" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-sm mb-3"
          >
            <Sun className="w-4 h-4" />
            Solar & Backup Power
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4 leading-tight"
          >
            Escape Loadshedding.<br />
            <span className="text-accent">Go Solar with Kolob.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            South Africa's energy crisis is real — but so is the solution. We install complete solar and backup power systems that keep your home or business running 24/7, while slashing your electricity costs.
          </motion.p>
        </div>

        {/* Main content: image + services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Real solar photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/solar-install.jpg`}
              alt="Kolob Electrical solar panel installation on Cape Town rooftop"
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl flex items-center justify-between">
              {benefits.map((b, i) => (
                <div key={i} className="text-center flex-1">
                  <p className="text-2xl font-bold text-accent">{b.stat}</p>
                  <p className="text-xs text-muted-foreground">{b.label}</p>
                  {i < benefits.length - 1 && (
                    <div className="absolute top-1/2 -translate-y-1/2 w-px h-8 bg-white/10" style={{ right: `${(benefits.length - 1 - i) * 33.33}%` }} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solar service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {solarServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl group hover:border-accent/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-5 h-5 text-accent group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-white font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client types banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-accent/20 bg-accent/5 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Home className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-white font-bold">Homeowners</h4>
            <p className="text-sm text-muted-foreground">Backup power + full solar to protect your family and reduce monthly costs.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-white font-bold">Small Businesses</h4>
            <p className="text-sm text-muted-foreground">Keep operations running during loadshedding. No power cuts, no lost revenue.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-white font-bold">Construction Projects</h4>
            <p className="text-sm text-muted-foreground">New electrical installs with solar-ready infrastructure from day one.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
