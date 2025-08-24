import { motion } from "framer-motion";
import { Heart, Shield, Clock, Users, Stethoscope, Home } from "lucide-react";
import aboutHero from "@/assets/about-hero.png";


const services = [
    {
        icon: Stethoscope,
        title: "Home Nursing",
        description:
            "Comprehensive nursing care services including wound care, medication management, and health monitoring.",
    },
    {
        icon: Shield,
        title: "Post-Surgery Care",
        description:
            "Specialized post-operative care to ensure safe recovery and prevent complications in a familiar environment.",
    },
    {
        icon: Clock,
        title: "24/7 Emergency",
        description:
            "Round-the-clock emergency nursing services for urgent healthcare needs and peace of mind.",
    },
    {
        icon: Users,
        title: "Family Support",
        description:
            "Education and support for family members to help them participate in the care process effectively.",
    },
    {
        icon: Home,
        title: "Chronic Care",
        description:
            "Long-term care management for chronic conditions with personalized treatment plans and regular monitoring.",
    },
    {
        icon: Heart,
        title: "Wonder Care",
        description:
            "Comprehensive personalized healthcare services to support patients and families with compassion.",
    },
    {
        icon: Stethoscope,
        title: "IV Therapy",
        description:
            "Safe and effective intravenous therapy delivered by experienced nurses at home.",
    },
    {
        icon: Shield,
        title: "Post-Surgery Assistance",
        description:
            "Dedicated support to ensure proper recovery and reduce the risk of complications after surgery.",
    },
    {
        icon: Users,
        title: "Elderly Care",
        description:
            "Specialized care services designed to improve the quality of life for elderly patients at home.",
    },
    {
        icon: Clock,
        title: "Medication Management",
        description:
            "Accurate medication administration and monitoring to ensure safe and effective treatment.",
    },
    {
        icon: Heart,
        title: "Diabetes Care",
        description:
            "Professional guidance and monitoring for patients managing diabetes with personalized plans.",
    },
    {
        icon: Stethoscope,
        title: "Pediatric Care",
        description:
            "Compassionate and specialized healthcare services for infants, children, and adolescents.",
    },
    {
        icon: Shield,
        title: "Patient Education",
        description:
            "Empowering patients and families with the knowledge to make informed healthcare decisions.",
    },
    {
        icon: Home,
        title: "Catheter Care",
        description:
            "Safe and hygienic catheter insertion, monitoring, and maintenance by trained professionals.",
    },
    {
        icon: Heart,
        title: "Blood Pressure Monitoring",
        description:
            "Regular monitoring and management of blood pressure to ensure overall cardiovascular health.",
    },
    {
        icon: Stethoscope,
        title: "Nutrition Support",
        description:
            "Guidance and assistance in maintaining proper nutrition for better health and recovery.",
    },
    {
        icon: Users,
        title: "Home Health Support",
        description:
            "Comprehensive home health services to assist patients in daily healthcare needs.",
    },
    {
        icon: Shield,
        title: "Pain Management",
        description:
            "Effective and compassionate management of acute and chronic pain to improve quality of life.",
    },

];


export default function ServicesPage() {
    return (
        <main className="bg-background min-h-screen relative w-full">
            {/* Hero Section */}
            <section
                className="relative h-[15vh] md:h-[30vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${aboutHero})` }}
            >
                <div className="absolute inset-0 dark:bg-black/50"></div>
                <div className="text-center space-y-4 px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl font-bold text-black dark:text-white">Our Services</h1>

                    </motion.div>
                </div>
            </section>


            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{
                                opacity: 1,
                                y: index % 3 === 1 ? -48 : 0,
                            }}
                            viewport={{ once: true }}
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
            </section>
        </main>
    );
}

