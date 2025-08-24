import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, UserCheck, User } from "lucide-react";
import { motion } from "framer-motion";

const statsData = [
  {
    title: "Upcoming Appointments",
    value: "8 Today",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    title: "Active Nurse",
    value: "24 on duty",
    icon: UserCheck,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    title: "Total Patient",
    value: "200",
    subtitle: "This Month",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    title: "Patient Request",
    value: "12",
    subtitle: "Pending",
    icon: User,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300 hover:shadow-gradient">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    {stat.title}
                  </h3>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  {stat.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {stat.subtitle}
                    </p>
                  )}
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}