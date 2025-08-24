import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Bell } from "lucide-react";
import { toast } from "sonner";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { PatientList } from "@/components/dashboard/patient-list";
import { ConsultationPanel } from "@/components/dashboard/consultation-panel";

export default function Dashboard() {
  const [notifications, setNotifications] = useState(3);
  const [userInitials, setUserInitials] = useState("AD");

  const showNotification = () => {
    toast.success("New appointment scheduled successfully!");
    setNotifications(prev => prev + 1);
  };

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      const parts = storedName.trim().split(" ");
      const initials = parts
        .map(p => p.charAt(0).toUpperCase())
        .slice(0, 2)
        .join("");
      setUserInitials(initials || "AD");
    }
  }, []);

  return (
    <div className="min-h-screen flex w-full bg-background">
      <div className="flex-1 flex flex-col">


        {/* Main Content */}
        <main className="flex-1 p-6 bg-slate-50 dark:bg-slate-900/20 ">
          <StatsCards />

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-6">
              <RecentActivity />
            </div>

            {/* Middle Column */}
            <div className="lg:col-span-1 space-y-6">
              <PatientList />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1 space-y-6">
              <ConsultationPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
