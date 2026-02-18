import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bonfire from "@/assets/experience-bonfire.jpg";
import trek from "@/assets/experience-trek.jpg";
import food from "@/assets/experience-food.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

const experiences = [
  { image: bonfire, title: "Evening Bonfires", desc: "Gather around the warmth under starlit skies" },
  { image: trek, title: "Nature Treks", desc: "Explore pine forests and scenic trails nearby" },
  { image: food, title: "Home-Cooked Meals", desc: "Authentic Garhwali cuisine made with love" },
  { image: gallery1, title: "Stunning Sunsets", desc: "Watch golden sunsets paint the Himalayan sky" },
];

const ExperiencesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiences" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Things to do
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experiences
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From peaceful morning walks through pine forests to cozy bonfires under the stars — 
            every moment at Joshi Holiday Home is a memory in the making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-lg overflow-hidden h-80 cursor-pointer"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/60 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-1">
                  {exp.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
