import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { isAdminAuthenticated, loading } = useAuth();
    if (loading) {
        return <div>Loading...</div>; 
    }

    if (!isAdminAuthenticated) {
        return <Navigate to="/admin-login" replace />;
    }

    return children;
}
