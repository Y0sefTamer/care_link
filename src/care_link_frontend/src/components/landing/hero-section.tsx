import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import bgHero from "@/assets/bg-hero.png";

export function HeroSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-start relative overflow-hidden bg-no-repeat bg-cover bg-top md:bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >

      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative max-w-4xl px-6 lg:px-16 md:ml-24 z-10 text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-black dark:text-white"
        >
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Where Care Meets{" "}
              <span className="text-primary">Comfort</span>:{" "}
              <span className="text-secondary">Schedule</span> Your Appointment with Ease
            </h1>
            <p className="text-lg md:text-sm opacity-50 max-w-2xl">
              Home IV Therapies & Nursing Services by professionals.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/booking-form">
              <Button
                size="lg"
                className="bg-gradient-primary font-bold text-white hover:opacity-90 transition-all duration-300 shadow-float text-lg px-16 py-3 h-auto rounded-3xl"
              >
                Book Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
