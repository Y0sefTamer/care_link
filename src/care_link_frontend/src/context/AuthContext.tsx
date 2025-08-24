// AuthContext.tsx
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { logout as logoutUtil } from "@/utils/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    principal: string | null;
    isAuthenticated: boolean;
    isAdminAuthenticated: boolean;
    login: () => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
    adminLogin: (name: string, password: string) => void;
    adminLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const [authClient, setAuthClient] = useState<AuthClient | null>(null);
    const [principal, setPrincipal] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initAuth = async () => {
            const client = await AuthClient.create();
            setAuthClient(client);

            const storedPrincipal = localStorage.getItem("principal");
            if (storedPrincipal) {
                setPrincipal(storedPrincipal);
                setIsAuthenticated(true);
            }

            const storedAdmin = localStorage.getItem("isAdmin");
            if (storedAdmin === "true") {
                setIsAdminAuthenticated(true);
                setPrincipal("admin-principal");
            }

            setLoading(false);
        };
        initAuth();
    }, []);


    const login = async () => {
        if (!authClient) return;
        await authClient.login({
            identityProvider: "https://identity.ic0.app",
            onSuccess: async () => {
                const identity = authClient.getIdentity();
                const principalId = identity.getPrincipal().toText();

                setPrincipal(principalId);
                setIsAuthenticated(true);
                localStorage.setItem("principal", principalId);
                toast.success("Logged in successfully!");
            },
        });
    };

    const adminLogin = (name: string, password: string) => {
        if (name === "Ahmed Magdy" && password === "7/7/2005") {
            setPrincipal("admin-principal");
            setIsAdminAuthenticated(true);
            localStorage.setItem("isAdmin", "true");
            localStorage.setItem("username", name)
            toast.success("Login successful, welcome Admin");
        } else {
            toast.error("Invalid admin credentials!");
        }
    };

    const logout = async () => {
        await logoutUtil();
        setPrincipal(null);
        setIsAuthenticated(false);
        localStorage.removeItem("principal");
    };

    const adminLogout = () => {
        setPrincipal(null);
        setIsAdminAuthenticated(false);
        localStorage.removeItem("isAdmin");
        navigate("/admin-login");
    };

    return (
        <AuthContext.Provider
            value={{
                principal,
                isAuthenticated,
                isAdminAuthenticated,
                login,
                logout,
                loading,
                adminLogin,
                adminLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};
