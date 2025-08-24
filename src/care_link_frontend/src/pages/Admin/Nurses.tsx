import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import boy from "@/assets/boy.png"
import girl from "@/assets/girl.png"

interface Nurse {
    name: string;
    email: string;
    id: string;
    age: number;
    address: string;
    status: "Active" | "Pending";
    gender: "Male" | "Female";
    date_added: string | null;
    time_added: string | null;
}

const mockNurses: Nurse[] = [
    { name: "Mariam Fadel", email: "nurseA@gmail.com", id: "N001", age: 35, address: "123 Street", date_added: "7/7/2025", time_added: "10:50 PM", status: "Active", gender: "Female" },
    { name: "Ahmed Magdy", email: "nurseB@gmail.com", id: "N002", age: 40, address: "456 Avenue", date_added: "7/7/2025", time_added: "10:50 PM", status: "Pending", gender: "Male" },
    { name: "Mariam Mohammed", email: "nurseC@gmail.com", id: "N003", age: 30, address: "789 Boulevard", date_added: "7/7/2025", time_added: "10:50 PM", status: "Active", gender: "Female" },
    { name: "Youssef Tamer", email: "nurseC@gmail.com", id: "N003", age: 30, address: "789 Boulevard", date_added: "7/7/2025", time_added: "10:50 PM", status: "Active", gender: "Male" },
];

export default function Nurses() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");

    const filteredNurses = mockNurses.filter(
        (n) =>
            n.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            n.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-16 space-y-6">
            {/* Title + Add Nurse Button */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between items-center"
            >
                <div>
                    <h1 className="text-2xl font-bold text-black dark:text-white">List of Nurses</h1>
                    <p className="text-gray-400 dark:text-gray-300 mt-2">Manage nurse records and information</p>
                </div>
                <button onClick={() => navigate("add-nurse")} className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-gradient-to-r from-cyan-400 to-teal-400 hover:brightness-105 transition">
                    <UserPlus size={20} />
                    Add New Nurse
                </button>
            </motion.div>

            {/* Search Bar */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full md:w-[70vw] relative"
            >
                <Search className="absolute md:left-16 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search nurses by name or email"
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
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="overflow-x-auto"
            >
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#eee] dark:bg-gray-800">
                            {["Name", "ID", "Age", "Address", "Email", "Date Added", "STATUS"].map((col) => (
                                <th key={col} className="px-4 py-3 text-gray-700 dark:text-gray-200 font-medium">
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredNurses.map((n) => (
                            <tr key={n.id} className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-3 flex items-center gap-3">
                                    <img
                                        className="h-10 w-10 rounded-full object-cover"
                                        src={n.gender === "Male" ? boy : girl}
                                        alt={n.name}
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-900 dark:text-gray-100">{n.name}</span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{n.email}</span>
                                    </div>
                                </td>


                                <td className="px-4 py-3">{n.id}</td>
                                <td className="px-4 py-3">{n.age}</td>
                                <td className="px-4 py-3">{n.address}</td>
                                <td className="px-4 py-3">{n.email}</td>
                                <td className="px-4 py-3">
                                    {n.date_added && n.time_added ? (
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{n.date_added}</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{n.time_added}</span>
                                        </div>
                                    ) : (
                                        <span className="text-sm text-gray-400 italic">Not Added</span>
                                    )}
                                </td>

                                <td className="px-4 py-3">
                                    <span
                                        className={`px-3 py-1 rounded-full font-semibold ${n.status === "Active"
                                            ? "bg-green-100 text-green-600"
                                            : "bg-red-100 text-red-600"
                                            }`}
                                    >
                                        {n.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>
        </div>
    );
}
