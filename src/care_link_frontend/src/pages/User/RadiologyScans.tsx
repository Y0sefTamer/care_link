import React from "react";
import { motion } from "framer-motion";
import radiology from "@/assets/radiology.png";
import { useNavigate } from "react-router-dom";

const RadiologyScans = () => {
    const navigate = useNavigate();
    const scans = [
        {
            id: 1,
            name: "CT Scan",
            description: "High-resolution imaging for internal organs.",
            price: "$150",
            image: radiology,
        },
        {
            id: 2,
            name: "MRI Scan",
            description: "Magnetic imaging for detailed body analysis.",
            price: "$250",
            image: radiology,
        },
        {
            id: 3,
            name: "X-Ray",
            description: "Quick and efficient bone imaging.",
            price: "$50",
            image: radiology,
        },
    ];

    return (
        <div className="p-16 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Radiology Scans</h1>
                    <p className="text-gray-600">Explore our available scans</p>
                </div>
            </div>

            {/* Scans Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {scans.map((scan, i) => (
                    <motion.div
                        key={scan.id}
                        className="relative bg-[#72bde936] border border-border rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-gradient"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.2 }}
                    >
                        {/* Price Badge */}
                        <span className="absolute top-4 right-4 bg-[#0097E8] text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                            {scan.price}
                        </span>

                        {/* Image */}
                        <img
                            src={scan.image}
                            alt={scan.name}
                            className="object-contain mb-4"
                        />

                        {/* Text */}
                        <h2 className="font-semibold text-lg mb-2">{scan.name}</h2>
                        <p className="text-sm text-gray-600 mb-4">{scan.description}</p>

                        {/* Book Button */}
                        <button onClick={() => navigate("/booking-radiology")} className="w-full bg-gradient-to-r from-[#0097E8] to-[#00DDD9] text-white py-2 rounded-lg font-semibold shadow transition-all duration-300 hover:scale-[1.03] hover:shadow-gradient">
                            Book
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default RadiologyScans;
