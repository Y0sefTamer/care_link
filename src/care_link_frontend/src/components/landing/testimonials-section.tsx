import { motion } from "framer-motion";
import { Star } from "lucide-react";
import clientImage from "@/assets/client-1.jpg";

const testimonials = [
  {
    rating: 5,
    text: "The care my mother received was exceptional. The nurses were professional, kind, and made her feel comfortable throughout her recovery.",
    name: "Sarah Johnson",
    role: "Daughter of Patient",
    image: clientImage,
  },
  {
    rating: 5,
    text: "CareLink made post-surgery recovery so much easier. Having professional care at home gave our family peace of mind.",
    name: "Michael Chen",
    role: "Family Caregiver",
    image: clientImage,
  },
  {
    rating: 5,
    text: "The IV therapy sessions were administered with such care and precision. I felt safe and well-cared for throughout the treatment.",
    name: "Emily Rodriguez",
    role: "Patient",
    image: clientImage,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our patients and their families have to say about their experience with CareLink.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-float transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#72BEE9] text-[#72BEE9]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
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