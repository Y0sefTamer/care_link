import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const faqs = [
  {
    question: "What services does CareLink provide?",
    answer: "CareLink offers comprehensive home healthcare services including IV therapy, wound care, medication management, post-surgery care, and 24/7 emergency nursing services.",
  },
  {
    question: "Are your nurses licensed and certified?",
    answer: "Yes, all our nurses are licensed healthcare professionals with extensive experience in home care. They undergo continuous training to maintain the highest standards of care.",
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment through our online booking system, by calling our support team, or through our mobile app. We offer flexible scheduling to accommodate your needs.",
  },
  {
    question: "Do you accept insurance?",
    answer: "We work with most major insurance providers. Our billing team will help verify your coverage and assist with insurance claims to minimize your out-of-pocket expenses.",
  },
  {
    question: "What areas do you serve?",
    answer: "CareLink currently serves the greater metropolitan area. Contact us to confirm if we provide services in your specific location.",
  },
  {
    question: "Is there a minimum commitment required?",
    answer: "No, we offer flexible care plans ranging from one-time visits to ongoing care programs. Our services are tailored to your specific healthcare needs and preferences.",
  },
];

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and how we can help you.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Collapsible
                open={openFAQ === index}
                onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:shadow-card transition-all duration-300">
                    <h3 className="text-left font-semibold text-foreground">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ml-2 ${openFAQ === index ? 'rotate-180' : ''
                        }`}
                    />
                  </div>
                </CollapsibleTrigger>

                {/* Animated Answer */}
                <AnimatePresence initial={false}>
                  {openFAQ === index && (
                    <CollapsibleContent forceMount>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <p className="text-muted-foreground">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </CollapsibleContent>
                  )}
                </AnimatePresence>
              </Collapsible>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-primary p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold text-white mb-4">
              Didn't find what you're looking for?
            </h3>
            <p className="text-white/90 mb-6">
              Our support team is here to help with any questions you may have.
            </p>
            <Button
              onClick={() => navigate("/contact")}
              variant="secondary"
              size="lg"
              className="bg-white text-secondary hover:bg-white/90"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
