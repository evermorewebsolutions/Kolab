import { motion } from "framer-motion";
import { Star, Zap, Award, Tag, MapPin } from "lucide-react";

const features = [
  {
    title: "5.0 Star Rated Service",
    description: "Consistently rated 5 stars by our happy customers across Cape Town.",
    icon: Star,
  },
  {
    title: "Fast & Reliable",
    description: "Quick response times, and we always arrive on time, every time.",
    icon: Zap,
  },
  {
    title: "Certified Professionals",
    description: "Fully licensed and certified electricians handling your property.",
    icon: Award,
  },
  {
    title: "Affordable Pricing",
    description: "Transparent, upfront pricing with zero hidden fees.",
    icon: Tag,
  },
  {
    title: "Locally Based",
    description: "Proudly serving Cape Town, Kuils River, and surrounding areas.",
    icon: MapPin,
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-secondary/50 border-y border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight"
            >
              Setting the Standard for <span className="text-primary">Electrical Excellence</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-8 text-lg"
            >
              When you choose Kolob Electrical, you're not just getting a contractor. You're partnering with dedicated professionals who prioritize your safety and satisfaction above all else.
            </motion.p>
            
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="#contact"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors group"
            >
              Schedule an inspection
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:translate-x-1 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-2xl bg-background border border-white/5 shadow-lg ${
                  idx === 4 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
