import React from "react";
import { motion } from "framer-motion";
import nurseCircle from "@/assets/nurse-circle.png"

const Reservations = () => {
    const reservations = [
        {
            id: 1,
            name: "Sarah Johnson",
            service: "Critical Care Nursing",
            date: "20 Sept 2025",
            time: "10:00 AM",
            status: "Confirmed",
            image:
                nurseCircle,
        },
        {
            id: 2,
            name: "Michael Smith",
            service: "Post-Surgery Care",
            date: "22 Sept 2025",
            time: "02:00 PM",
            status: "Pending",
            image:
                nurseCircle,
        },
        {
            id: 3,
            name: "Emily Davis",
            service: "Medication Management",
            date: "25 Sept 2025",
            time: "09:30 AM",
            status: "Cancelled",
            image:
                nurseCircle,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#0097E8] to-[#00DDD9] p-16 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-center text-white">
                <h1 className="text-3xl font-bold">📅 Reservations</h1>
            </div>

            {/* Reservations Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {reservations.map((res, i) => (
                    <motion.div
                        key={res.id}
                        className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center shadow-card transition-all duration-300 hover:scale-[1.03]"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.2 }}
                    >
                        {/* Left: Image + Info */}
                        <div className="flex items-center gap-4">
                            <img
                                src={res.image}
                                alt={res.name}
                                className="w-16 h-16 rounded-full object-cover border"
                            />
                            <div>
                                <h2 className="font-semibold text-lg text-gray-800">
                                    {res.name}
                                </h2>
                                <p className="text-sm text-gray-600">{res.service}</p>
                            </div>
                        </div>

                        {/* Right: Details */}
                        <div className="text-sm text-gray-700 space-y-1 text-right">
                            <p>📅 Date: {res.date}</p>
                            <p>⏰ Time: {res.time}</p>
                            <p>🩺 Service: {res.service}</p>
                            <p>
                                ✅ Status:{" "}
                                <span
                                    className={
                                        res.status === "Confirmed"
                                            ? "text-green-600 font-semibold"
                                            : res.status === "Pending"
                                                ? "text-yellow-600 font-semibold"
                                                : "text-red-600 font-semibold"
                                    }
                                >
                                    {res.status}
                                </span>
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Reservations;
