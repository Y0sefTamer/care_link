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

// User Pages
import Index from "./pages/User/Index";
import UserDashboard from "./pages/User/Dashboard";
import NursesList from "./pages/User/NursesList";
import BookingNurse from "./pages/User/BookingNurse";
import Messages from "./pages/User/Messages"
import RadiologyScans from "./pages/User/RadiologyScans"
import BookingRadiology from "./pages/User/BookingRadiology"
import NurseLogin from "./pages/User/NurseLogin"
import PatientsList from "./pages/User/PatientsList"
import MedicationManagement from "./pages/User/MedicationManagement"
import AddMedication from "./pages/User/AddMedication"
import MedicationSchedule from "./pages/User/MedicationSchedule"
import Reservations from "./pages/User/Reservations"
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
import AdminMessages from "./pages/Admin/Messages"
import UsersMessages from "./pages/Admin/UsersMessages";
import LoginPage from "./pages/User/Login";
import CarelinkAssistantPage from "./pages/User/CarelinkAssistant";
import PharmacyPage from "./pages/User/Pharmacy";
import ShoppingPage from "./pages/User/Shopping";



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
            closeButton
          />
          <Routes>
            {/* Landing pages */}
            <Route element={<LandingLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/my-dashboard" element={<UserDashboard />} />
              <Route path="/nurses-list" element={<NursesList />} />
              <Route path="/booking-nurse" element={<BookingNurse />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/radiology-scans" element={<RadiologyScans />} />
              <Route path="/booking-radiology" element={<BookingRadiology />} />
              <Route path="/patients-list" element={<PatientsList />} />
              <Route path="/medication-management" element={<MedicationManagement />} />
              <Route path="/medication-schedule" element={<MedicationSchedule />} />
              <Route path="/add-medication" element={<AddMedication />} />
              <Route path="/nurse-login" element={<NurseLogin />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/booking-form" element={<BookingForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login-page" element={<LoginPage />} />
              <Route path="/carelink-assistant" element={<CarelinkAssistantPage />} />
              <Route path="/pharmacy" element={<PharmacyPage />} />
              <Route path="/shopping" element={<ShoppingPage />} />

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
              <Route path="/admin-messages" element={<AdminMessages />} />
              <Route path="/user-messages" element={<UsersMessages />} />
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
