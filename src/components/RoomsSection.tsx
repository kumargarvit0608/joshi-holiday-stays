import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bed, Eye, Users, Coffee } from "lucide-react";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";

const rooms = [
  {
    image: room1,
    name: "Mountain View Room",
    description: "Cozy room with stunning mountain views, private terrace, and all modern amenities.",
    features: ["Mountain View", "Private Terrace", "TV", "Attached Bathroom"],
    price: "₹1,500",
  },
  {
    image: room2,
    name: "Deluxe Family Room",
    description: "Spacious room perfect for families, with panoramic valley views and a seating area.",
    features: ["Valley View", "Seating Area", "Hot Water", "Room Service"],
    price: "₹2,500",
  },
];

const featureIcons: Record<string, typeof Bed> = {
  "Mountain View": Eye,
  "Valley View": Eye,
  "Private Terrace": Coffee,
  "Seating Area": Users,
  TV: Bed,
  "Attached Bathroom": Bed,
  "Hot Water": Coffee,
  "Room Service": Users,
};

const RoomsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rooms" className="py-24 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Our Stays
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comfortable Rooms
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {rooms.map((room, idx) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-3 mb-5">
                  {room.features.map((f) => {
                    const Icon = featureIcons[f] || Bed;
                    return (
                      <span
                        key={f}
                        className="flex items-center gap-1.5 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {f}
                      </span>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-2xl font-bold text-accent">
                    {room.price}
                    <span className="text-sm text-muted-foreground font-body font-normal">
                      {" "}/ night
                    </span>
                  </span>
                  <a
                    href="#payment"
                    className="bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
