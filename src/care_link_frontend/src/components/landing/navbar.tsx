import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import carelinkLogo from "@/assets/carelink-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { LogoutDialog } from "@/components/LogoutDialog";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const navigate = useNavigate();
  const { principal, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    setShowLogoutDialog(false);
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background/95 backdrop-blur border-b border-border sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
              <img src={carelinkLogo} alt="CareLink Logo" className="h-10 w-8" />
              <span className="text-xl font-semibold italic">CareLink</span>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <Link key={item.name} to={item.href} className="text-foreground/80 hover:text-primary transition-colors font-medium">
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right */}
            <div className="hidden md:flex items-center space-x-4">
              <ModeToggle />
              {!isAuthenticated ? (
                <Link to="/login">
                  <Button className="bg-primary hover:bg-primary/90">Login</Button>
                </Link>
              ) : (
                <Button variant="outline" className="border-primary text-primary" onClick={() => setShowLogoutDialog(true)}>
                  Logout
                </Button>
              )}
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center space-x-2">
              <ModeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="md:hidden border-t border-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map(item => (
                  <Link key={item.name} to={item.href} className="block px-3 py-2 text-foreground/80 hover:text-primary" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                ))}
                <div className="px-3 pt-2">
                  {!isAuthenticated ? (
                    <Link to="/login">
                      <Button className="w-full bg-primary hover:bg-primary/90">Login</Button>
                    </Link>
                  ) : (
                    <Button className="w-full border-primary text-primary" onClick={() => setShowLogoutDialog(true)}>
                      Logout
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      <LogoutDialog open={showLogoutDialog} onClose={() => setShowLogoutDialog(false)} onConfirm={handleLogout} />
    </>
  );
}
