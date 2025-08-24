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
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Bell } from "lucide-react";
import { toast } from "sonner";

export function Topbar() {
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
        <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center justify-between px-6 h-full">
                {/* Left side */}
                <div className="flex items-center space-x-4">
                    <div className="md:hidden">
                        <SidebarTrigger />
                    </div>
                    <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
                </div>

                {/* Right side */}
                <div className="flex items-center space-x-4">


                    <ModeToggle />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-9 w-9 rounded-full shadow-gradient hover:text-black dark:text-white">
                                <Avatar className="h-9 w-9 ">
                                    <AvatarImage src="/api/placeholder/40/40" alt="User" />
                                    <AvatarFallback >{userInitials}</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>

                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
