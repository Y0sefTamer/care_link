import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner"
import pharmacyImg from "@/assets/pharmacy-img.png";
import iconOne from "@/assets/icon-1.png";
import iconTwo from "@/assets/icon-2.png";
import iconThree from "@/assets/icon-3.png";
import iconFour from "@/assets/icon-4.png";

// Products Images

/* New Products */
import newOne from "@/assets/new-1.png";
import newTwo from "@/assets/new-2.png";
import newThree from "@/assets/new-3.png";
import newFour from "@/assets/new-4.png";

/* Popular Products */
import popOne from "@/assets/popular-1.png";
import popTwo from "@/assets/popular-2.png";
import popThree from "@/assets/popular-3.png";
import popFour from "@/assets/popular-4.png";

/* Top Products */
import topOne from "@/assets/top-1.png";
import topTwo from "@/assets/top-2.png";
import topThree from "@/assets/top-3.png";
import topFour from "@/assets/top-4.png";

/* Medicine Products */
import medicineOne from "@/assets/medicine-1.png";
import medicineTwo from "@/assets/medicine-2.png";
import medicineThree from "@/assets/medicine-3.png";
import medicineFour from "@/assets/medicine-4.png";


// Gradient Button
function GradientButton({ text }: { text: string }) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg font-semibold bg-white shadow border border-gray-200"
        >
            <span className="bg-gradient-to-r from-[#0097E8] to-[#00DDD9] bg-clip-text text-transparent">
                {text}
            </span>
        </motion.button>
    );
}

// Card (Offers)
function OfferCard({ bg, icon, title }: { bg: string; icon: string; title: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-between p-4 rounded-xl shadow text-black dark:text-white"
            style={{ backgroundColor: bg }}
        >
            <div className="flex items-center space-x-3">
                <img src={icon} alt={title} className="w-10 h-10" />
                <h3 className="font-semibold">{title}</h3>
            </div>
            <ArrowRight className="w-5 h-5" />
        </motion.div>
    );
}

// Product Card
function ProductCard({ image, title, price }: { image: string; title: string; price: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-card rounded-xl shadow p-4 flex flex-col items-center text-center space-y-4"
        >
            <img src={image} alt={title} className="w-32 h-32 object-contain mb-3" />
            <hr className="w-full my-2 border-gray-200 dark:border-gray-700" />
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-primary font-bold">{price}</p>
            <button onClick={() => toast.success("Add to Cart Successfully")}>
                <GradientButton text="Add to Cart" />
            </button>
        </motion.div>
    );
}

// Product Section (New, Popular, Top, Medicine)
function ProductSection({ title, products }: { title: string; products: { image: string; title: string; price: string }[] }) {
    return (
        <div className="w-full my-12">
            {/* Header */}
            <motion.div
                className="flex justify-between items-center mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-bold text-black dark:text-white">
                    {title}
                </h2>
                <button className="flex items-center bg-gradient-to-r from-[#0097E8] to-[#00DDD9] bg-clip-text text-transparent font-medium">
                    View All -&gt;
                </button>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((p, idx) => (
                    <ProductCard key={idx} image={p.image} title={p.title} price={p.price} />
                ))}
            </div>
        </div>
    );
}

export default function PharmacyPage() {

    const newProducts = [
        { image: newOne, title: "Pain Relief", price: "$10.99" },
        { image: newTwo, title: "Vitamin C", price: "$7.49" },
        { image: newThree, title: "Cough Syrup", price: "$5.99" },
        { image: newFour, title: "Skin Cream", price: "$12.00" },
    ];

    const popularProducts = [
        { image: popOne, title: "Allergy Pills", price: "$9.99" },
        { image: popTwo, title: "Fish Oil", price: "$14.49" },
        { image: popThree, title: "Kids Syrup", price: "$6.50" },
        { image: popFour, title: "Hand Sanitizer", price: "$4.99" },
    ];

    const topProducts = [
        { image: topOne, title: "Blood Pressure Monitor", price: "$45.00" },
        { image: topTwo, title: "Thermometer", price: "$15.99" },
        { image: topThree, title: "Diabetes Kit", price: "$30.00" },
        { image: topFour, title: "Protein Powder", price: "$25.00" },
    ];

    const medicineProducts = [
        { image: medicineOne, title: "Amoxicillin", price: "$18.00" },
        { image: medicineTwo, title: "Ibuprofen", price: "$8.00" },
        { image: medicineThree, title: "Paracetamol", price: "$5.50" },
        { image: medicineFour, title: "Cough Tablets", price: "$6.99" },
    ];
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <div className="w-full bg-[#0097E8] text-white py-16">
                <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
                    {/* Left Text */}
                    <motion.div
                        className="flex-1 text-left space-y-6"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Your Prescription for Affordable Health Solutions!
                        </h1>
                        <p className="text-lg md:text-xl max-w-lg">
                            Elevate your health journey with exclusive discounts and unparalleled convenience.
                            Your path to well-being starts here, where every purchase is a prescription for savings.
                        </p>
                        <button onClick={() => toast.info("Coming Soon")}>
                            <GradientButton text="Start Shopping" />
                        </button>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="flex-1 mt-8 md:mt-0"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={pharmacyImg} alt="Pharmacy" className="w-full mx-auto" />
                    </motion.div>
                </div>
            </div>

            {/* Offers Section */}
            <div className="container  mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <OfferCard bg="rgba(40, 167, 69, 0.50)" icon={iconOne} title="Get 25% OFF" />
                <OfferCard bg="rgba(244, 210, 121, 0.50)" icon={iconTwo} title="Free Home Delivery" />
                <OfferCard bg="rgba(111, 214, 0, 0.50)" icon={iconThree} title="Doctor's Appointment" />
                <OfferCard bg="rgba(237, 207, 252, 0.50)" icon={iconFour} title="Health Advice" />
            </div>

            {/* Products Sections */}
            <div className="container mx-auto px-6">
                <ProductSection title="New Products" products={newProducts} />
                <ProductSection title="Popular Products" products={popularProducts} />
                <ProductSection title="Top Products" products={topProducts} />
                <ProductSection title="Medicine" products={medicineProducts} />
            </div>

        </div>
    );
}
