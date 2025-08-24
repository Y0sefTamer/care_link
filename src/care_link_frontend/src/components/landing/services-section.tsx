import { motion } from "framer-motion";
import { Heart, Shield, Clock, Users, Stethoscope, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const services = [
  {
    icon: Heart,
    title: "IV Therapy",
    description: "Professional intravenous therapy administered in the comfort of your home by certified nurses.",
  },
  {
    icon: Stethoscope,
    title: "Home Nursing",
    description: "Comprehensive nursing care services including wound care, medication management, and health monitoring.",
  },
  {
    icon: Shield,
    title: "Post-Surgery Care",
    description: "Specialized post-operative care to ensure safe recovery and prevent complications in a familiar environment.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency nursing services for urgent healthcare needs and peace of mind.",
  },
  {
    icon: Users,
    title: "Family Support",
    description: "Education and support for family members to help them participate in the care process effectively.",
  },
  {
    icon: Home,
    title: "Chronic Care",
    description: "Long-term care management for chronic conditions with personalized treatment plans and regular monitoring.",
  },
];

export function ServicesSection() {
  const navigate = useNavigate();
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare services delivered by qualified professionals with years of experience in home care and patient-centered treatment.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: index === 1 || index === 4 ? -48 : 0
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 shadow-card transition-all duration-300 hover:scale-[1.03] hover:shadow-gradient"
            >


              <div className="space-y-4 flex items-center justify-center flex-col">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


        {/* All Services Button */}
        <div className="mt-12 flex justify-center">
          <Link to="/services">
            <Button
              size="lg"
              className="bg-gradient-primary text-white hover:opacity-90 transition-all duration-300 shadow-float px-8 py-4 h-auto"
            >
              All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
