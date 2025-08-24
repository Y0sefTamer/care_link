import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

import LandingLayout from "./layouts/LandingLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Protected Routes
import ProtectedRoute from "./components/ProtectedRoute";

// Auth Pages
import Login from "./pages/Auth/Login";
import AdminLogin from "./pages/Auth/AdminLogin";

// Home Pages
import Index from "./pages/User/Index";
import Services from "./pages/User/Services";
import AboutUs from "./pages/User/AboutUs";
import ContactUs from "./pages/User/ContactUs";
import BookingForm from "./pages/Admin/BookingForm";
import NotFound from "./pages/NotFound";

// Auth Provider
import { AuthProvider } from "./context/AuthContext";

// Admin Pages
import Dashboard from "./pages/Admin/Dashboard";
import Patients from "./pages/Admin/Patients";
import Nurses from "./pages/Admin/Nurses";
import AddNurse from "./pages/Admin/AddNurse";
import Bookings from "./pages/Admin/Bookings";

const queryClient = new QueryClient();

// eslint-disable-next-line react-refresh/only-export-components
const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="carelink-ui-theme">
      <TooltipProvider>
        <AuthProvider>
          <Toaster
            position="top-right"
            richColors
            duration={4000}
            toastOptions={{ className: "toast" }}
          />

          <Routes>
            {/* Landing pages */}
            <Route element={<LandingLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/booking-form" element={<BookingForm />} />
              <Route path="/login" element={<Login />} />
            </Route>

            {/* Dashboard pages */}
            <Route path="/admin-login" element={<AdminLogin />} />

            <Route
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/nurses" element={<Nurses />} />
              <Route path="/nurses/add-nurse" element={<AddNurse />} />
              <Route path="/bookings" element={<Bookings />} />
            </Route>

            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

// eslint-disable-next-line react-refresh/only-export-components
export default () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
