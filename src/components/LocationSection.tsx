import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Train, MapPin, Bus, Clock, Plane, Navigation } from "lucide-react";

const reachInfo = [
  { icon: MapPin, label: "Location", value: "Jaiharikhal, Lansdowne, Uttarakhand" },
  { icon: Train, label: "Nearest Railway Station", value: "Kotdwar — 30 KM" },
  { icon: Bus, label: "Nearest Bus Stand", value: "Kotdwar — 30 KM" },
  { icon: Plane, label: "Nearest Airport", value: "Dehradun (Jolly Grant) — 110 KM" },
  { icon: Clock, label: "From Delhi", value: "Approx. 6–7 Hours by Road" },
  { icon: Navigation, label: "From Dehradun", value: "Approx. 3–4 Hours by Road" },
];

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="py-24 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            How to Reach
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Your Way Here
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reachInfo.map((info, idx) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card rounded-lg p-5 shadow-sm border border-border"
              >
                <info.icon className="w-6 h-6 text-accent mb-3" />
                <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
                <p className="text-sm font-semibold text-foreground">{info.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-lg overflow-hidden shadow-lg h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d78.68!3d29.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUwJzI0LjAiTiA3OMKwNDAnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Joshi Holiday Home Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
