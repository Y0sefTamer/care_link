import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import nurse1 from "@/assets/nurse-1.jpg";
import nurse2 from "@/assets/nurse-2.jpg";

const nurses = [
  {
    name: "Dr. Mariam Mohammed",
    image: nurse1,
    stat: "500+",
    label: "Patients Cared",
  },
  {
    name: "Dr. Youssef Tamer",
    image: nurse2,
    stat: "8 Years",
    label: "Experience",
  },
  {
    name: "Dr. Mariam Fadel",
    image: nurse1,
    stat: "24/7",
    label: "Available",
  },

  {
    name: "Dr. Ahmed Magdy",
    image: nurse2,
    stat: "8 Years",
    label: "Experience",
  },
];

export function NursesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-32"
        >
          <p className="text-accent font-semibold text-lg">Our Skilled Nurses</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Connect with Our Nursing Stars Where{" "}
            <span className="text-primary">Expertise</span> Meets{" "}
            <span className="text-secondary">Compassion</span>
          </h2>
        </motion.div>

        {/* Nurses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {nurses.map((nurse, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: index === 0 || index === 2 ? -32 : 0,
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-card transition-all duration-300 hover:scale-[1.03] hover:shadow-gradient"
            >
              <div className="relative">
                <img
                  src={nurse.image}
                  alt={nurse.name}
                  className="w-full  object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between flex-col gap-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {nurse.name}
                  </h3>
                  <div className="flex items-center space-x-2 bg-gradient-primary text-white px-3 py-1 rounded-full">
                    <Heart className="h-4 w-4" />
                    <div className="text-center">
                      <div className="text-sm font-bold">{nurse.stat}</div>
                      <div className="text-xs">{nurse.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}