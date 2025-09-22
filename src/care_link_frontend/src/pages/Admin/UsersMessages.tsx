import React from "react";
import { motion } from "framer-motion";
import { Mail, Clock, UserCircle2 } from "lucide-react";

const UsersMessages = () => {
  const messages = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@mail.com",
      date: "21/12/2022",
      time: "10:40 PM",
      message: "Hello, I would like to know more about your nursing services.",
      status: "New",
    },
    {
      id: 2,
      name: "John Smith",
      email: "john.smith@mail.com",
      date: "20/12/2022",
      time: "05:20 PM",
      message: "I already booked a reservation, just confirming the details.",
      status: "Read",
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily.davis@mail.com",
      date: "19/12/2022",
      time: "02:10 PM",
      message: "Thanks for your support, everything went well.",
      status: "Answered",
    },
  ];

  const statusColors: Record<string, string> = {
    New: "bg-[#0097E8]",
    Read: "bg-[#E88700]",
    Answered: "bg-[#00E88F]",
  };

  return (
    <div className="min-h-screen p-16 space-y-10">
      {/* Header */}
      <div className="text-center text-black dark:text-white space-y-2">
        <h1 className="text-3xl font-bold">Users Messages</h1>
        <p className="text-lg opacity-90">
          Managing and following up on customer messages and communication
          requests
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="bg-gradient-to-r from-[#0097E8] to-[#00DDD9] text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition">
          All Messages
        </button>
        <button className="border-2 border-[#0097E8] text-[#0097E8] px-4 py-2 rounded-lg hover:bg-[#0097E810] transition">
          New (2)
        </button>
        <button className="border-2 border-[#0097E8] text-[#0097E8] px-4 py-2 rounded-lg hover:bg-[#0097E810] transition">
          Read (3)
        </button>
        <button className="border-2 border-[#0097E8] text-[#0097E8] px-4 py-2 rounded-lg hover:bg-[#0097E810] transition">
          Answered
        </button>
      </div>

      {/* Messages Cards */}
      <div className="space-y-8">
        {messages.map((msg, i) => (
          <motion.div
            key={msg.id}
            className="relative w-full rounded-2xl p-6 space-y-4 hover:scale-[1.01] transition duration-300 border-2 border-transparent bg-clip-padding"
            style={{
              borderImage: "linear-gradient(90deg, #0097E8, #00DDD9) 1",
            }}
            initial={{ opacity: 0, scale: 0.97, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            {/* Badge */}
            <span
              className={`absolute top-4 right-4 text-white text-xs font-semibold px-3 py-1 rounded-full ${statusColors[msg.status]}`}
            >
              {msg.status}
            </span>

            {/* Top Section */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                <UserCircle2 size={36} className="text-gray-500" />
              </div>
              <div>
                <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
                  {msg.name}
                </h2>
                <div className="flex flex-col text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {msg.date} {msg.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail size={14} /> {msg.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <p className="text-gray-700 text-sm leading-relaxed dark:text-white">
              {msg.message}
            </p>

            <hr />

            {/* Actions */}
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-[#0097E8] to-[#00DDD9] text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition">
                Answered
              </button>
              <button className="border-2 border-[#0097E8] text-[#0097E8] px-4 py-2 rounded-lg text-sm hover:bg-[#0097E810] transition">
                Seen
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UsersMessages;
