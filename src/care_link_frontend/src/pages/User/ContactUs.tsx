import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import contactHero from "@/assets/about-hero.png";

export default function ContactUsPage() {
    return (
        <main className="bg-background min-h-screen w-full">
            {/* Hero Section */}
            <section
                className="relative h-[15vh] md:h-[30vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${contactHero})` }}
            >
                <div className="absolute inset-0 dark:bg-black/50"></div>
                <div className="text-center px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl font-bold text-black dark:text-white">
                            Contact Us
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16">
                {/* Left Column - Form */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Get In Touch For Your Personalized <span className="text-gradient-primary">CareLink</span>
                        </h2>
                        <p className="text-muted-foreground mb-24">
                            Want a personalized approach or have questions? We’re here to help.
                            Leave us a message below and we’ll respond to you as soon as possible!
                        </p>

                        <form className="space-y-6">
                            {/* Name Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative">
                                    <label className="block text-sm font-medium mb-1 text-foreground">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        className="w-full p-2 bg-transparent border-none focus:outline-none peer"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#0097E8] to-[#00DDD9]"></div>
                                </div>
                                <div className="relative">
                                    <label className="block text-sm font-medium mb-1 text-foreground">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        className="w-full p-2 bg-transparent border-none focus:outline-none peer"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#0097E8] to-[#00DDD9]"></div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <label className="block text-sm font-medium mb-1 text-foreground">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-2 bg-transparent border-none focus:outline-none peer"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#0097E8] to-[#00DDD9]"></div>
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <label className="block text-sm font-medium mb-1 text-foreground">
                                    Message
                                </label>
                                <textarea
                                    style={{ resize: "none" }}
                                    placeholder="Write your message"
                                    rows={5}
                                    className="w-full p-2 bg-transparent border-none focus:outline-none peer"
                                ></textarea>
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#0097E8] to-[#00DDD9]"></div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full py-3 text-white rounded-lg bg-gradient-to-r from-[#0097E8] to-[#00DDD9] font-semibold shadow-md hover:opacity-90 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Right Column - Contact Info */}
                <div className="space-y-8">
                    {[
                        {
                            icon: Phone,
                            title: "Phone",
                            value: "+20 1127346022",
                        },
                        {
                            icon: Mail,
                            title: "Email",
                            value: "support@carelink.com",
                        },
                        {
                            icon: MapPin,
                            title: "Location",
                            value: "Shubra El Kheima, Egypt",
                        },
                    ].map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-gradient flex items-center gap-4"
                        >
                            <div className="w-10 h-10 bg-gradient-to-r from-[#0097E8] to-[#00DDD9] rounded-lg flex items-center justify-center">
                                <item.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                                <p className="text-muted-foreground">{item.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
