import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, LogIn, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { adminLogin } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (name === "Ahmed Magdy" && password === "7/7/2005") {
            adminLogin(name, password);
            navigate("/dashboard");
        } else {
            toast.error("Invalid credentials, please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center  px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md bg-card shadow-gradient rounded-2xl p-8 space-y-6"
            >
                <h1 className="text-2xl font-bold text-center text-gradient-primary">
                    CareLink Admin Login
                </h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Username */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" /> Username
                        </label>
                        <Input
                            type="text"
                            placeholder="Enter username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Password */}
                    <div className="space-y-2 relative">
                        <label className="text-sm font-medium flex items-center gap-2">
                            <Lock className="w-4 h-4 text-primary" /> Password
                        </label>
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="focus:ring-2 focus:ring-primary pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[30px] text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? (
                                <EyeOff className="w-5 h-5" />
                            ) : (
                                <Eye className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        className="w-full bg-gradient-subtle text-white shadow-gradient hover:opacity-90 transition"
                    >
                        <LogIn className="w-4 h-4 mr-2" /> Login
                    </Button>
                </form>
            </motion.div>
        </div>
    );
}
