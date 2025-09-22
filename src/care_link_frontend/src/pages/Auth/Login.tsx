import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import carelinkLogo from "@/assets/carelink-logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

export default function Login() {
    const { principal, isAuthenticated, login, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        await login();
        toast.success("Logged in successfully!");
        navigate("/login-page");
    };

    const handleLogout = async () => {
        await logout();
        toast.success("Logged out successfully!");
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-card shadow-card rounded-2xl p-8 w-full max-w-md text-center shadow-gradient">
                <div className="flex flex-col items-center gap-2 mb-6">
                    <img src={carelinkLogo} alt="CareLink Logo" className="h-14 w-12 drop-shadow-md" />
                    <h1 className="text-3xl font-bold text-gradient-primary">CareLink Login</h1>
                    <p className="text-muted-foreground text-sm">Secure access with Internet Identity</p>
                </div>

                {!isAuthenticated ? (
                    <div>
                        <Button onClick={handleLogin} className="w-full bg-gradient-primary text-white font-medium py-3 rounded-xl shadow-gradient hover:scale-[1.02]">
                            Login with Internet Identity
                        </Button>
                    </div>
                ) : (
                    <div>
                        <p className="mb-2 text-foreground/80">Logged in as:</p>
                        <p className="font-mono text-xs bg-muted px-3 py-1 rounded-md break-all">{principal}</p>
                        <Button variant="outline" className="mt-4 w-full border-primary text-primary hover:bg-primary/10" onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
