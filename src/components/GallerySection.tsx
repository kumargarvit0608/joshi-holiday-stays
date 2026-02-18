import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const images = [
  { src: hero1, alt: "Joshi Holiday Home exterior" },
  { src: room1, alt: "Mountain view room" },
  { src: gallery2, alt: "Lansdowne aerial view" },
  { src: hero2, alt: "Terrace morning view" },
  { src: gallery1, alt: "Sunset over hills" },
  { src: room2, alt: "Deluxe room interior" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Captured Moments
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="overflow-hidden rounded-lg aspect-square group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
