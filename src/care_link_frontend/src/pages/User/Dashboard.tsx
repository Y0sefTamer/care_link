import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CalendarCheck, Pill, MessageCircle, Users } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "Reservations",
      icon: CalendarCheck,
      path: "/reservations",
    },
    {
      id: 2,
      title: "Medication Schedule",
      icon: Pill,
      path: "/medication-schedule",
    },
    {
      id: 3,
      title: "Messages",
      icon: MessageCircle,
      path: "/messages",
    },
    {
      id: 4,
      title: "Nurse List",
      icon: Users,
      path: "/nurses-list",
    },
  ];

  return (
    <main className="bg-background min-h-screen relative w-full">
      {/* Hero Section */}
      <section className="relative h-[20vh] bg-gradient-to-r from-[#0097E8] to-[#00DDD9] flex items-center justify-center">
        <div className="text-center space-y-4 px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl font-bold text-white">Dashboard</h1>
            <p className="text-white/90 text-lg">Quick access to your features</p>
          </motion.div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#72bde936] border border-border rounded-xl p-8 shadow-card transition-all duration-300 hover:scale-[1.03] hover:shadow-gradient flex flex-col items-center text-center gap-6"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#0097E8] to-[#00DDD9] rounded-lg flex items-center justify-center shadow-md">
                <card.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {card.title}
              </h3>
              <button
                onClick={() => navigate(card.path)}
                className="mt-2 bg-gradient-to-r from-[#0097E8] to-[#00DDD9] text-white px-6 py-2 rounded-tl-lg font-medium shadow-md hover:scale-[1.03] transition-all"
              >
                Open
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
