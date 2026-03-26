import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const projects = [
  {
    src: "solar-install.jpg",
    alt: "Solar panel installation on Cape Town rooftop",
    label: "Solar Installation",
    category: "Solar",
  },
  {
    src: "db-board-commercial.jpg",
    alt: "Large commercial DB board installation",
    label: "Commercial DB Board",
    category: "Electrical",
  },
  {
    src: "downlights-room.jpg",
    alt: "LED downlight installation in modern home",
    label: "Residential Lighting",
    category: "Lighting",
  },
  {
    src: "commercial-lighting.jpg",
    alt: "Commercial restaurant lighting installation",
    label: "Commercial Lighting",
    category: "Lighting",
  },
  {
    src: "db-board-clean.jpg",
    alt: "Clean professional DB board installation",
    label: "DB Board Upgrade",
    category: "Electrical",
  },
  {
    src: "led-mirror.jpg",
    alt: "LED mirror and bathroom lighting installation",
    label: "LED Bathroom Lighting",
    category: "Lighting",
  },
  {
    src: "socket-install.jpg",
    alt: "Modern socket and outlet installation",
    label: "Modern Socket Install",
    category: "Electrical",
  },
  {
    src: "downlights-bathroom.jpg",
    alt: "Recessed downlights in bathroom ceiling",
    label: "Ceiling Downlights",
    category: "Lighting",
  },
  {
    src: "db-board-wall.jpg",
    alt: "DB board installed on wall",
    label: "DB Board Installation",
    category: "Electrical",
  },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-secondary/30 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-white"
          >
            Real Projects. Real Results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground"
          >
            Browse a selection of our completed electrical and solar installations across Cape Town and surrounding areas.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[4/3]"
              onClick={() => setLightbox(project.src)}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${project.src}`}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                  {project.category}
                </span>
                <p className="text-white font-bold mt-2">{project.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={`${import.meta.env.BASE_URL}images/${lightbox}`}
            alt="Project photo"
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
