import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  Calendar,
  MessageSquare,
  HeadphonesIcon,
  LogOut,
} from "lucide-react";
import carelinkLogo from "@/assets/carelink-logo.png";
import { useAuth } from "@/context/AuthContext";

const sidebarItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Patients", url: "/patients", icon: Users },
  { title: "Nurses", url: "/nurses", icon: UserCheck },
  { title: "Bookings", url: "/bookings", icon: Calendar }
];

interface DashboardSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function DashboardSidebar({ isOpen = false, onClose }: DashboardSidebarProps) {
  const location = useLocation();
  const { adminLogout } = useAuth();
  const currentPath = location.pathname;
  const isPathActive = (path: string) => currentPath === path;

  return (
    <Sidebar
      className="h-screen fixed md:relative inset-y-0 left-0 z-50
                 bg-[#72BEE9] text-white transition-transform duration-300 "
    >
      <SidebarContent className="flex flex-col h-full justify-between items-center overflow-visible">

        {/* Logo & Project Name */}
        <div className="mt-12 p-6 flex items-center space-x-3">
          <img src={carelinkLogo} alt="CareLink Logo" className="w-10 h-10" />
          <span className="text-3xl italic font-bold text-black dark:text-white">CareLink</span>
        </div>

        {/* Navigation Links */}
        <SidebarGroup className="flex-1 px-4 py-6 w-full">
          <SidebarGroupContent className="flex flex-col justify-between h-full">
            <SidebarMenu className="flex flex-col space-y-6">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const active = isPathActive(item.url);

                return (
                  <SidebarMenuItem key={item.title} >
                    <SidebarMenuButton asChild >
                      <NavLink

                        to={item.url}
                        onClick={onClose}
                        className={`relative flex items-center space-x-4 px-4 py-8 rounded-lg transition-all duration-200 w-full
    ${active
                            ? "text-gradient-primary font-bold"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                          }`}
                      >
                        {active && (
                          <span
                            className="absolute top-1/2 transform -translate-y-1/2 w-12 h-12 bg-cyan-400 rounded-full shadow-lg"
                            style={{
                              right: '-10%',
                              zIndex: 10,
                            }}
                          />
                        )}

                        <div className="w-6 h-6 flex items-center justify-center">
                          <Icon
                            className={`h-full w-full transition-colors duration-200
        ${active ? "text-cyan-400 drop-shadow-[0_0_6px_rgba(0,215,217,0.7)]" : "text-black/80 dark:text-white/80"}`}
                          />
                        </div>
                        <span
                          className={`font-bold text-xl ${active ? "text-transparent bg-clip-text text-gradient-primary" : "text-black dark:text-white"}`}
                          style={active ? { textShadow: "2px 2px 4px rgba(0, 215, 217, 0.7)" } : {}}
                        >
                          {item.title}
                        </span>
                      </NavLink>

                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>

            {/* Logout Button at Bottom */}
            <div className="mt-auto w-full">
              <Button
                variant="ghost"
                className="w-full justify-start font-semibold rounded-lg px-4 py-3
                           bg-gradient-to-r from-cyan-400 to-teal-400 text-white
                           hover:opacity-90 transition"
                onClick={adminLogout}
              >
                <LogOut className="h-5 w-5 mr-3" />
                Logout
              </Button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
