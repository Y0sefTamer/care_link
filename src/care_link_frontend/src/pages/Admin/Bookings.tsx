import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface Booking {
    id: string;
    patient: string;
    nurse: string;
    date: string;
    time: string;
    phone: string;
    address: string;
    status: "Approved" | "Declined" | "Pending";
}

const mockBookings: Booking[] = [
    {
        id: "B001",
        patient: "Omar Khaled",
        nurse: "Mariam Fadel",
        date: "08/22/2025",
        time: "11:00 AM",
        phone: "01012345678",
        address: "123 Nile St, Cairo",
        status: "Approved",
    },
    {
        id: "B002",
        patient: "Nour Hassan",
        nurse: "Ahmed Magdy",
        date: "08/23/2025",
        time: "03:30 PM",
        phone: "01087654321",
        address: "456 Pyramid Ave, Giza",
        status: "Declined",
    },
    {
        id: "B003",
        patient: "Ali Mahmoud",
        nurse: "Mariam Mohammed",
        date: "08/24/2025",
        time: "09:00 AM",
        phone: "01122334455",
        address: "789 Downtown, Alexandria",
        status: "Pending",
    },
    {
        id: "B003",
        patient: "Ali Mahmoud",
        nurse: "Youssef Tamer",
        date: "08/24/2025",
        time: "09:00 AM",
        phone: "01087654321",
        address: "789 Downtown, Alexandria",
        status: "Pending",
    }
];

export default function Bookings() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [nurseFilter, setNurseFilter] = useState("All");

    const filteredBookings = mockBookings.filter((b) => {
        const matchesSearch =
            b.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
            b.nurse.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus =
            statusFilter === "All" ? true : b.status === statusFilter;
        const matchesNurse = nurseFilter === "All" ? true : b.nurse === nurseFilter;

        return matchesSearch && matchesStatus && matchesNurse;
    });

    const uniqueNurses = Array.from(new Set(mockBookings.map((b) => b.nurse)));

    return (
        <div className="p-16 space-y-6">
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
            >
                <h1 className="text-2xl font-bold text-black dark:text-white">
                    Bookings
                </h1>
                <p className="text-[#8D98AA]">
                    Manage appointments between patients and nurses
                </p>
            </motion.div>

            {/* Search + Filters */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col md:flex-row items-center gap-4 w-full"
            >
                {/* Search */}
                <div className="w-full md:flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by patient or nurse"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 py-3 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none border-b border-gray-300 dark:border-gray-700"
                    />
                </div>

                {/* Status Filter */}
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-3 border rounded-lg bg-transparent text-gray-700 dark:text-gray-200"
                >
                    <option value="All">All Statuses</option>
                    <option value="Approved">Approved</option>
                    <option value="Declined">Declined</option>
                    <option value="Pending">Pending</option>
                </select>

                {/* Nurse Filter */}
                <select
                    value={nurseFilter}
                    onChange={(e) => setNurseFilter(e.target.value)}
                    className="px-4 py-3 border rounded-lg bg-transparent text-gray-700 dark:text-gray-200"
                >
                    <option value="All">All Nurses</option>
                    {uniqueNurses.map((n) => (
                        <option key={n} value={n}>
                            {n}
                        </option>
                    ))}
                </select>
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
                            {[
                                "Booking ID",
                                "Patient",
                                "Nurse",
                                "Date",
                                "Time",
                                "Contact",
                                "Address",
                                "Status",
                            ].map((col) => (
                                <th
                                    key={col}
                                    className="px-4 py-3 text-gray-700 dark:text-gray-200 font-medium"
                                >
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBookings.map((b) => (
                            <tr
                                key={b.id}
                                className="border-b border-gray-200 dark:border-gray-700"
                            >
                                <td className="px-4 py-3">{b.id}</td>
                                <td className="px-4 py-3">{b.patient}</td>
                                <td className="px-4 py-3">{b.nurse}</td>
                                <td className="px-4 py-3">{b.date}</td>
                                <td className="px-4 py-3">{b.time}</td>
                                <td className="px-4 py-3">{b.phone}</td>
                                <td className="px-4 py-3">{b.address}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`px-3 py-1 rounded-full font-semibold ${b.status === "Approved"
                                                ? "bg-green-100 text-green-600"
                                                : b.status === "Declined"
                                                    ? "bg-red-100 text-red-600"
                                                    : "bg-yellow-100 text-yellow-600"
                                            }`}
                                    >
                                        {b.status}
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
