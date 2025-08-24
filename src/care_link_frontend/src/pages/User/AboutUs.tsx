import { motion } from "framer-motion";

import aboutHero from "@/assets/about-hero.png";
import aboutImg1 from "@/assets/about1.png";
import aboutImg2 from "@/assets/about2.png";
import aboutImg3 from "@/assets/about3.png";

const sections = [
    {
        title: "Our Mission",
        paragraphs: [
            "Patient-Centered Care: Our mission is to provide accessible, timely, andcompassionate nursing care to all our patients through a seamlessappointment system, ensuring every patient feels heard, cared for, andsatisfied with their healthcare experience.",
            "Innovation in Healthcare: We aim to revolutionize the way nurseappointments are managed by integrating cutting-edge technology thatoptimizes efficiency, enhances nurse-patient communication, and improveshealth outcomes.",
            "Community Health: Our mission is to serve our community by offeringconvenient, comprehensive nurse-led health services in a welcomingenvironment, fostering healthier lives across all ages and backgrounds."
        ],
        image: aboutImg1,
    },
    {
        title: "Our Approach ",
        paragraphs: [
            "Patient-Centered Care: Our mission is to provide accessible, timely, and compassionate nursing care to all our patients through a seamlessappointment system, ensuring every patient feels heard, cared for, andsatisfied with their healthcare experience.",
            "Innovation in Healthcare: We aim to revolutionize the way nurseappointments are managed by integrating cutting-edge technology thatoptimizes efficiency, enhances nurse-patient communication, and improveshealth outcomes.",
            "Community Health: Our mission is to serve our community by offeringconvenient, comprehensive nurse-led health services in a welcomingenvironment, fostering healthier lives across all ages and backgrounds."
        ],
        image: aboutImg2,
    },
    {
        title: "Our Process",
        paragraphs: [
            "Patient-Centered Care: Our mission is to provide accessible, timely, andcompassionate nursing care to all our patients through a seamlessappointment system, ensuring every patient feels heard, cared for, andsatisfied with their healthcare experience.",
            "Innovation in Healthcare: We aim to revolutionize the way nurseappointments are managed by integrating cutting-edge technology thatoptimizes efficiency, enhances nurse-patient communication, and improveshealth outcomes.",
            "Community Health: Our mission is to serve our community by offeringconvenient, comprehensive nurse-led health services in a welcomingenvironment, fostering healthier lives across all ages and backgrounds."
        ],
        image: aboutImg3,
    },
];


export default function AboutUsPage() {
    return (
        <main className="bg-background min-h-screen">
            {/* Hero Section */}
            <section
                className="relative w-full h-[15vh] md:h-[30vh] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${aboutHero})`,
                }}
            >
                <div className="absolute inset-0 dark:bg-black/50 "></div>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-6xl font-bold text-black z-10 dark:text-white"
                >
                    About Us
                </motion.h1>
            </section>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto py-20 px-4 space-y-32">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col md:flex-row gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image */}
                        <div className="md:w-1/2">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="rounded-2xl shadow-lg w-full object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-foreground">
                                {section.title}
                            </h2>
                            <div className="space-y-4">
                                {section.paragraphs.map((para, idx) => {
                                    const [highlight, ...rest] = para.split(":");
                                    return (
                                        <p key={idx} className="text-lg text-muted-foreground">
                                            <span className="text-gradient-primary font-semibold">{highlight}:</span>
                                            {rest.join(":")}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>

                    </motion.div>

                ))}
            </div>
        </main>
    );
}
