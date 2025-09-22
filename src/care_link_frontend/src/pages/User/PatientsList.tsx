import React from "react";
import { motion } from "framer-motion";
import patientPlaceholder from "@/assets/patient-circle.png";
import { useNavigate } from "react-router-dom";

const PatientsList = () => {
    const navigate = useNavigate();

    const patients = [
        {
            id: 1,
            name: "Ahmed Ali",
            image: patientPlaceholder,
        },
        {
            id: 2,
            name: "Sara Mohamed",
            image: patientPlaceholder,
        },
        {
            id: 3,
            name: "Omar Khaled",
            image: patientPlaceholder,
        },
    ];

    return (
        <div className="p-16 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Patients List</h1>
                    <p className="text-gray-600">Explore patients</p>
                </div>
                <div className="relative mt-4 md:mt-0 w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Search patient by name"
                        className="w-full border rounded-lg pl-3 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0097E8]"
                    />
                </div>
            </div>

            {/* Patients Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {patients.map((patient, i) => (
                    <motion.div
                        key={patient.id}
                        className="bg-[#72bde936] border border-border rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between text-center shadow-card transition-all duration-300 hover:scale-[1.03] hover:shadow-gradient"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.2 }}
                    >
                        {/* Patient Image */}
                        <img
                            src={patient.image}
                            alt={patient.name}
                            className="w-20 h-20 rounded-full object-cover mb-4"
                        />

                        {/* Patient Name */}
                        <h2 className="font-semibold text-lg mb-4">{patient.name}</h2>

                        {/* Button */}
                        <button
                            onClick={() => navigate(`/patient/${patient.id}`)}
                            className="w-full bg-gradient-to-r from-[#0097E8] to-[#00DDD9] text-white py-2 rounded-tl-lg font-semibold shadow shadow-card transition-all duration-300 hover:scale-[1.03] hover:shadow-gradient"
                        >
                            View Details
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PatientsList;
