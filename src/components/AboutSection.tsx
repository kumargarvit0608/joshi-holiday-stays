import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Mountain, Wifi, Car } from "lucide-react";

const features = [
  { icon: Mountain, label: "Mountain Views" },
  { icon: TreePine, label: "Surrounded by Nature" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Free Parking" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Welcome to
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Joshi Holiday Home
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-8" />
          <p className="text-muted-foreground leading-relaxed text-lg">
            Nestled in the serene hills of Jaiharikhal, Lansdowne, Uttarakhand, Joshi Holiday Home 
            offers a peaceful retreat away from the hustle of city life. Wake up to breathtaking 
            mountain views, enjoy home-cooked meals, and experience the warmth of true Garhwali 
            hospitality. Our homestay is the perfect base to explore Lansdowne's beautiful trails, 
            ancient temples, and lush forests.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <feat.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground tracking-wide">
                {feat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
