import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const projects = [
  { src: "project-01.jpg", alt: "Electrical installation project", label: "DB Board Upgrade", category: "Electrical" },
  { src: "project-02.jpg", alt: "Solar panel installation", label: "Solar Installation", category: "Solar" },
  { src: "project-03.jpg", alt: "Wiring and cabling project", label: "Professional Wiring", category: "Electrical" },
  { src: "project-04.jpg", alt: "Residential electrical work", label: "Residential Install", category: "Electrical" },
  { src: "project-05.jpg", alt: "Solar energy system", label: "Energy System", category: "Solar" },
  { src: "project-06.jpg", alt: "Commercial electrical project", label: "Commercial Work", category: "Electrical" },
  { src: "project-07.jpg", alt: "Circuit board installation", label: "Circuit Install", category: "Electrical" },
  { src: "project-08.jpg", alt: "Outdoor electrical work", label: "Outdoor Wiring", category: "Electrical" },
  { src: "project-09.jpg", alt: "Solar panel system installation", label: "Solar System", category: "Solar" },
  { src: "project-10.jpg", alt: "DB board installation", label: "DB Board", category: "Electrical" },
  { src: "project-11.jpg", alt: "Lighting installation", label: "Lighting Install", category: "Lighting" },
  { src: "project-12.jpg", alt: "Electrical maintenance", label: "Maintenance", category: "Electrical" },
  { src: "project-13.jpg", alt: "Industrial electrical work", label: "Industrial Project", category: "Electrical" },
  { src: "project-14.jpg", alt: "Solar backup system", label: "Backup Power", category: "Solar" },
  { src: "project-15.jpg", alt: "Residential solar panels", label: "Home Solar", category: "Solar" },
  { src: "project-16.jpg", alt: "Electrical panel upgrade", label: "Panel Upgrade", category: "Electrical" },
  { src: "project-17.jpg", alt: "Power installation", label: "Power Install", category: "Electrical" },
  { src: "project-18.jpg", alt: "Full electrical rewire", label: "Full Rewire", category: "Electrical" },
  { src: "project-19.jpg", alt: "Cape Town solar project", label: "Cape Town Solar", category: "Solar" },
];

const categoryColors: Record<string, string> = {
  Solar: "text-accent border-accent/30 bg-accent/10",
  Electrical: "text-primary border-primary/30 bg-primary/10",
  Lighting: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
};

const FILTERS = ["All", "Electrical", "Solar", "Lighting"];

export function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  const openLightbox = useCallback((globalIdx: number) => {
    setLightboxIdx(globalIdx);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);

  const goPrev = useCallback(() => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx - 1 + projects.length) % projects.length);
  }, [lightboxIdx]);

  const goNext = useCallback(() => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx + 1) % projects.length);
  }, [lightboxIdx]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    },
    [closeLightbox, goPrev, goNext]
  );

  return (
    <section id="gallery" className="py-24 bg-secondary/30 border-y border-white/5 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
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
            Browse our completed electrical and solar installations across Cape Town and surrounding areas.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-2 mb-10 flex-wrap"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white/5 border-white/10 text-muted-foreground hover:text-white hover:bg-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((project, idx) => {
              const globalIdx = projects.findIndex((p) => p.src === project.src);
              return (
                <motion.div
                  key={project.src}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="break-inside-avoid mb-4 relative rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(globalIdx)}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/${project.src}`}
                    alt={project.alt}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className={`text-xs font-semibold border rounded-full px-3 py-1 ${categoryColors[project.category] ?? "text-white border-white/20 bg-white/10"}`}>
                      {project.category}
                    </span>
                    <p className="text-white font-bold mt-2 text-sm drop-shadow-md">{project.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-4">Want work like this at your property?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={closeLightbox}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur-sm">
              {lightboxIdx + 1} / {projects.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.25 }}
              className="relative flex flex-col items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${projects[lightboxIdx].src}`}
                alt={projects[lightboxIdx].alt}
                className="max-w-full max-h-[80vh] rounded-xl object-contain shadow-2xl"
              />
              <div className="flex items-center gap-3">
                <span className={`text-xs font-semibold border rounded-full px-3 py-1 ${categoryColors[projects[lightboxIdx].category] ?? "text-white border-white/20 bg-white/10"}`}>
                  {projects[lightboxIdx].category}
                </span>
                <span className="text-white font-bold text-sm">{projects[lightboxIdx].label}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
