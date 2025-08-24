import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import promoNurse from "@/assets/promo-nurse.jpg";

export function PromoSection() {
  return (
    <section className="lg:-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-float">
              <img
                src={promoNurse}
                alt="Professional nurse with medical equipment"
                className="w-full  object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div> */}
            </div>
          </motion.div>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary">
                20% OFF
              </h2>
              <p className="text-xl text-black/80 dark:text-white">
                Subscribe to our mailing list and receive 20% off
                on your first Marvel Infusion Therapies
              </p>
            </div>

            <p className="text-sm text-black/70 dark:text-white/70">
              *Terms and conditions apply. Valid for new subscribers only.
            </p>
          </motion.div>


        </div>
      </div>
    </section>
  );
}