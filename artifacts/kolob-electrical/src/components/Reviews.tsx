import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    quote: "Absolutely fantastic service! Quick, professional, and very affordable. Fixed our electrical fault within hours.",
    author: "Sarah M.",
    area: "Bellville",
  },
  {
    quote: "Got my COC done efficiently and professionally. Highly recommend Kolob Electrical to anyone in Cape Town!",
    author: "James T.",
    area: "Kuils River",
  },
  {
    quote: "Very reliable team. They installed all our lights and plugs in our new home. Excellent workmanship and great communication.",
    author: "Thandi K.",
    area: "Cape Town CBD",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center justify-center"
          >
            <h2 className="text-5xl md:text-6xl font-display font-extrabold text-white flex items-center gap-4 mb-2">
              5.0 <Star className="w-10 h-10 text-accent fill-accent" />
            </h2>
            <p className="text-xl text-primary font-semibold tracking-wide">(24+ Verified Reviews)</p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-muted-foreground text-lg"
          >
            Don't just take our word for it. Here's what our customers have to say.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-white/90 text-lg leading-relaxed italic mb-8">
                  "{review.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.author}</h4>
                  <p className="text-sm text-muted-foreground">{review.area}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
