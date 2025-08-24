import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface Patient {
  name: string;
  email: string;
  id: string;
  condition: string;
  age: number;
  nurse: string;
  address: string;
  status: "Active" | "Pending";
}

const mockPatients: Patient[] = [
  { name: "Mariam Fadel", email: "mariam@gmail.com", id: "P001", condition: "Diabetes", age: 45, nurse: "Nurse A", address: "123 Street", status: "Active" },
  { name: "Ahmed Magdy", email: "ahmed@gmail.com", id: "P002", condition: "Hypertension", age: 60, nurse: "Nurse B", address: "456 Avenue", status: "Pending" },
  { name: "Mariam Mohammed", email: "mariam@gmail.com", id: "P003", condition: "Asthma", age: 30, nurse: "Nurse C", address: "789 Boulevard", status: "Active" },
  { name: "Youssef Tamer", email: "youssef@gmail.com", id: "P004", condition: "Asthma", age: 30, nurse: "Nurse C", address: "789 Boulevard", status: "Active" },
];

const cards = [
  { title: "Active Patients", value: 3 },
  { title: "Pending Patients", value: 1 },
  { title: "Total Patients", value: 4 },
];

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = mockPatients.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.nurse.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-16 space-y-6">
      {/* Title */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-2xl font-bold text-black dark:text-white">List of Patients</h1>
        <p className="text-gray-400 dark:text-gray-300 mt-2">Manage patient records and information</p>
      </motion.div>

      {/* Search Bar */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="w-full md:w-[70vw] relative">
        <Search className="absolute md:left-16 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search patients by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            w-full
            pl-8 py-4
            md:pl-24 md:py-8
            bg-transparent
            text-gray-900 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none
          "
        />
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 dark:bg-gray-700 rounded transition-all duration-300 focus-within:bg-gradient-to-r from-cyan-400 to-teal-400 pointer-events-none"></span>
      </motion.div>

      {/* Table */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#eee] dark:bg-gray-800">
              {["Name", "ID", "Condition", "Age", "Assigned Nurse", "Address", "STATUS"].map((col) => (
                <th key={col} className="px-4 py-3 text-gray-700 dark:text-gray-200 font-medium">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((p) => (
              <tr key={p.id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-3">{p.name}<p className="opacity-[0.5]">{p.email}</p></td>
                <td className="px-4 py-3">{p.id}</td>
                <td className="px-4 py-3">{p.condition}</td>
                <td className="px-4 py-3">{p.age}</td>
                <td className="px-4 py-3">{p.nurse}</td>
                <td className="px-4 py-3">{p.address}</td>
                <td className="px-4 py-3">
                  <span className={`px-3 py-1 rounded-full font-semibold ${p.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Cards */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(0,215,217,0.35)" }}
            className="bg-white dark:bg-gray-800 shadow-card rounded-lg p-6 text-center transition-all duration-300 border border-black"
          >
            <p className="text-7xl font-bold text-gradient-primary m-6">{card.value}</p>
            <h2 className="text-lg font-medium mb-16">{card.title}</h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
