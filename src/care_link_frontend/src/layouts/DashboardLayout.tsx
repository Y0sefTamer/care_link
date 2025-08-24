import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { Topbar } from "./Topbar";


export default function DashboardLayout() {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <DashboardSidebar />
                <div className="flex-1 flex flex-col overflow-auto">
                    <Topbar />
                    <Outlet />
                </div>

            </div>
        </SidebarProvider>
    )
}

