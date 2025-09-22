import React from "react";
import { Search, Phone, DollarSign, Star, Shield } from "lucide-react";
import { motion } from "framer-motion";
import nursePlaceHolder from "@/assets/nurse-placeholder.png"
import nurseCircle from "@/assets/nurse-circle.png"
import { useNavigate } from "react-router-dom";

const NursesList = () => {
    const navigate = useNavigate();
    const nurses = [
        {
            id: 1,
            name: "Mariam Fadel",
            service: "Critical Care Nursing",
            phone: "+20123456789",
            rate: "30 Dollar / Hour",
            specialty: "Critical Care",
            experience: "7 Years of Experience",
            status: "Active",
            image: nurseCircle,
        },
        {
            id: 2,
            name: "Mariam Fadel",
            service: "Critical Care Nursing",
            phone: "+20123456789",
            rate: "30 Dollar / Hour",
            specialty: "Critical Care",
            experience: "7 Years of Experience",
            status: "Active",
            image: nurseCircle,
        }, {
            id: 3,
            name: "Mariam Fadel",
            service: "Critical Care Nursing",
            phone: "+20123456789",
            rate: "30 Dollar / Hour",
            specialty: "Critical Care",
            experience: "7 Years of Experience",
            status: "Active",
            image: nurseCircle,
        },

    ];

    return (
        <div className="p-16 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Nurse List</h1>
                    <p className="text-gray-600">Exploring the nurse</p>
                </div>
                <div className="relative mt-4 md:mt-0 w-full md:w-1/3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Nurse by name"
                        className="w-full border rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0097E8]"
                    />
                </div>
            </div>

            {/* Nurses Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {nurses.map((nurse, i) => (
                    <motion.div
                        key={nurse.id}
                        className="bg-[#72bde936] border border-border rounded-2xl shadow-lg p-8 flex flex-col justify-between shadow-card transition-all duration-300 hover:scale-[1.03] hover:shadow-gradient"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.2 }}
                    >
                        <div className="space-y-4">
                            {/* Row 1 */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={nurse.image}
                                        alt={nurse.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h2 className="font-semibold text-lg">{nurse.name}</h2>
                                        <p className="text-sm text-gray-700 dark:text-gray-400">{nurse.service}</p>
                                    </div>
                                </div>
                                <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                    {nurse.status}
                                </span>
                            </div>

                            {/* Row 2 */}
                            <div className="flex items-center justify-between">
                                <div className="space-y-2 text-sm">
                                    <p className="flex items-center gap-2">
                                        <Shield className="text-[#0060FF]" size={16} />
                                        {nurse.specialty}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Phone className="text-[#0060FF]" size={16} />
                                        {nurse.phone}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <DollarSign className="text-[#0060FF]" size={16} />
                                        {nurse.rate}
                                    </p>
                                </div>
                                <img
                                    src={nursePlaceHolder}
                                    alt="nurse icon"
                                    className="opacity-20"
                                />
                            </div>

                            {/* Row 3 */}
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold text-[#0060FF]">
                                    {nurse.experience}
                                </p>
                                <div className="flex gap-1">
                                    <Star className="text-[#0097E8]" fill="#00DDD9" size={18} />
                                    <Star className="text-[#0097E8]" fill="#00DDD9" size={18} />
                                    <Star className="text-[#0097E8]" fill="#00DDD9" size={18} />
                                    <Star className="text-[#0097E8]" fill="#00DDD9" size={18} />
                                    <Star className="text-[#0097E8]" fill="#00DDD9" size={18} />
                                </div>
                            </div>
                        </div>

                        {/* Row 4 - Buttons */}
                        <div className="flex gap-3 mt-4">
                            <button onClick={() => navigate("/booking-nurse")} className="flex-1 bg-gradient-to-r from-[#0097E8] to-[#00DDD9] text-white py-2 rounded-tl-lg font-semibold shadow shadow-card transition-all duration-300 hover:scale-[1.03] hover:shadow-gradient">
                                Book
                            </button>
                            <button onClick={() => navigate("/messages")} className="flex-1 border-2 border-[#0097E8] text-[#0097E8] py-2 rounded-tl-lg font-semibold shadow-card transition-all duration-300 hover:scale-[1.03] hover:shadow-gradient">
                                Message
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default NursesList;
