import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/landing/navbar";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function LandingLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Outlet /> 
      </main>
    </>
  );
}
