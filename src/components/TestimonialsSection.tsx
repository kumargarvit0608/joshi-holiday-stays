import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    text: "Amazing homestay with breathtaking mountain views! The food was delicious and the hosts were incredibly warm and welcoming. Will definitely come back!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "A perfect getaway from Delhi. The rooms were clean, the terrace views were stunning, and the peaceful surroundings made our weekend truly special.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    text: "Joshi Holiday Home exceeded all expectations. The location is perfect for nature lovers. The home-cooked Garhwali food was the highlight of our trip!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Guest Reviews
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            What Our Guests Say
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10"
            >
              <Quote className="w-8 h-8 text-gold/60 mb-4" />
              <p className="text-primary-foreground/90 leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-heading font-semibold text-gold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
