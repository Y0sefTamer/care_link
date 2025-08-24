import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Calendar, UserCheck, HeartHandshake } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import howItWorksNurse from "@/assets/how-it-works-nurse.jpg";

const steps = [
  {
    icon: Calendar,
    title: "Schedule Your Appointment",
    description: "Book your preferred time slot through our easy-to-use online platform or by calling our dedicated support team.",
  },
  {
    icon: UserCheck,
    title: "Professional Assessment",
    description: "Our certified nurses will conduct a comprehensive assessment to understand your specific healthcare needs and create a personalized care plan.",
  },
  {
    icon: HeartHandshake,
    title: "Receive Quality Care",
    description: "Experience professional healthcare services in the comfort of your home with our experienced and compassionate nursing team.",
  },
];

export function HowItWorksSection() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-float">
              <img 
                src={howItWorksNurse} 
                alt="Healthcare professional explaining procedure" 
                className="w-full  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-accent font-semibold text-lg">How it Works</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Easy Steps to Secure Your Nursing Appointment
              </h2>
              <p className="text-lg text-muted-foreground">
                With our user-friendly platform, getting professional healthcare at home has never been easier. Follow these simple steps to start your journey to better health.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <Collapsible
                  key={index}
                  open={openStep === index}
                  onOpenChange={() => setOpenStep(openStep === index ? null : index)}
                >
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:shadow-card transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-foreground">
                          {index + 1}. {step.title}
                        </h3>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                          openStep === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <div className="ml-14 p-4 bg-muted/50 rounded-lg">
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}