import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2, Plus } from "lucide-react";

const MedicationManagement = () => {
  const navigate = useNavigate();

  const medications = [
    {
      id: 1,
      name: "Paracetamol",
      dose: "500 mg",
      time: "08:00 AM",
      frequency: "3 times/day",
    },
    {
      id: 2,
      name: "Ibuprofen",
      dose: "200 mg",
      time: "12:00 PM",
      frequency: "2 times/day",
    },
    {
      id: 3,
      name: "Amoxicillin",
      dose: "250 mg",
      time: "06:00 PM",
      frequency: "3 times/day",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0097E8] to-[#00DDD9] p-16 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between text-white">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          💊 Medication Management
        </h1>
        <button
          onClick={() => navigate("/add-medication")}
          className="mt-4 md:mt-0 bg-white text-[#0097E8] px-4 py-2 rounded-tl-lg font-semibold shadow-lg hover:scale-105 transition-all"
        >
          <Plus size={18} className="inline mr-2" />
          Add Medication
        </button>
      </div>

      {/* Medications Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {medications.map((med, i) => (
          <motion.div
            key={med.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center shadow-card transition-all duration-300 hover:scale-[1.03]"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            {/* Left Data */}
            <div className="space-y-1 text-gray-800">
              <h2 className="font-semibold text-lg">{med.name}</h2>
              <p className="text-sm">{med.dose}</p>
              <p className="text-sm">{med.time}</p>
              <p className="text-sm">{med.frequency}</p>
            </div>

            {/* Right Buttons */}
            <div className="flex gap-2">
              <button className="bg-[#0097E8] text-white px-3 py-1 rounded-lg hover:opacity-90 transition">
                <Pencil size={16} />
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:opacity-90 transition">
                <Trash2 size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MedicationManagement;
